import React, { Component } from 'react';
import {
  Cells,
  Cell,
  CellsTitle,
  CellBody,
  CellFooter,
  Label,
  CellHeader,
  Input,
  Button,
  Dialog
} from 'react-weui'

// import { debounce } from 'throttle-debounce'
import '../css/toggle.css'
import '../css/httpBorder.css'
import Toggle from 'react-toggle'
import conf from '../config'
import WrapStyle from '../css/httpWrap'
import { 
  check_path as checkPath,
  check_port as checkPort,
  add_http_server,
  get_http_server_all,
  remove_http_server,
  os_kill_port,
  os_run_server,
  change_http_server
} from '../api'
import { stat } from 'fs';

const { messages } = conf
const { httpCheck: httpCheckMsg } = messages.info

class HttpServer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      customButton: [
        {
          label: 'Ok',
          onClick: this.hideDialog.bind(this)
        }
      ],
      msgDialog: {
        isShow: false,
        msg: ''
      },
      httpLists: [
        // {
        //   path: '/Users/kozo4/cat/Project/huluxia/web/www',
        //   isPath: true,
        //   port: '2334',
        //   usedPort: false,
        //   note: '葫芦侠开发测试',
        //   id: '',
        //   isStart: false
        // }
      ]
    }
  }

  componentDidMount = async ()=> {
    const res = await get_http_server_all()
    let { lists: httpLists } = res
    this.setState({ httpLists })
  }

  hideDialog() {
    const msgDialog = this.state.msgDialog
    msgDialog.isShow = !msgDialog.isShow
    this.setState({ msgDialog })
  }

  handlerChange = async (e, tag, index)=> {
    const regxCheckNumber = str=> /^\d{1,}$/.test(str)
    let value = e.target.value
    if (tag != 'note') {
      value = value.trim()
    }
    const update = ()=> {
      this.updateHttpServer({
        index,
        key: tag,
        value
      })
    }
    const httpLists = this.state.httpLists
    let current = httpLists[index]
    if (tag === 'path') {
      const { check: file } = await checkPath(value)
      if (file) update()
      current['path'] = value
      current['isPath'] = file
    } else if (tag === 'port') {
      if (regxCheckNumber(value)) {
        value = +value
        if (value <= 65535) {
          let { used } = await checkPort(value)
          if (!used) update()
          current['port'] = value
          current['usedPort'] = used
        }
      }
    } else if (tag === 'note') {
      current['note'] = value
      update()
    }
    httpLists[index] = current
    this.setState({ httpLists })
  }

  handlerKeyDown = async (e, index)=> {
    const httpLists = this.state.httpLists
    let port = httpLists[index]['port']
    if (e.keyCode === 8 && port.toString().length === 1) {
      httpLists[index]['port'] = ''
    }
    this.setState({ httpLists })
  }

  handleClickHttp = async ()=> {
    let conf = {
      path: '',
      port: '',
      note: ''
    }
    const create = await add_http_server(conf)
    let { now } = create
    now.isStart = false
    const xo = this.state.httpLists
    this.setState({
      httpLists: [ ...xo, now ]
    })
  }

  updateHttpServer = conf=> change_http_server(conf)
  
  handleRemoveService = async (_id, port, index)=> {
    if (port) {
      const { used } = await checkPort(port)
      used && await os_kill_port(port)
    }
    await remove_http_server(_id)
    let httpLists = this.state.httpLists
    httpLists.splice(index, 1)
    this.setState({ httpLists })
  }

  toggleService = async (index, port, isStart)=> {
    const httpLists = this.state.httpLists
    const uiToggle = (flag)=> httpLists[index]['isStart'] = flag
    if (!isStart) {
      const msgDialog = this.state.msgDialog
      const now = httpLists[index]
      let status = true, msg = '填写数据错误'
      let { used } = await checkPort(port)
      console.log(!now['port'], used, !now['isPath'], !now['path'])
      if ( !now['port'] || used || !now['isPath'] || !now['path'] ) {
        status = false
      }
      if (status) {
        // 启动服务
        uiToggle(status)
        await os_run_server(now)
      } else {
        msgDialog.isShow = true
        msgDialog.msg = msg
        this.setState({ msgDialog })
      }
    } else {
      // 关闭服务
      await os_kill_port(port)
      uiToggle(false)
    }
    this.setState({ httpLists })
  }

  render() {
    return (
      <React.Fragment>

        <Dialog
          type="android"
          title="提示"
          show={this.state.msgDialog.isShow}
          buttons={this.state.customButton}
        >
          {this.state.msgDialog.msg}
        </Dialog>
        { !this.state.httpLists.length ? (
          <div style={{
            textAlign: 'center',
            color: '#666',
            margin: '12px 0 6px'
          }}>
            🤚 请添加你的HTTP服务器
          </div>
        ) : null}
        <div >
          <Cells>
            { this.state.httpLists.map((item, index) => {
              return (
                <Cell key={ index } style={{
                  border: `2px solid ${ item.isStart ? '#1AAD19' : '#D9D9D9' }`,
                  padding: '12px',
                  margin: '24px',
                  borderRadius: "12px"
                }}>
                  <CellBody>
                    <Cells>
                      <Cell className={ !item.isPath ? 'error-border' : 'success-border' }>
                        <CellHeader>
                          <Label>路径</Label>
                        </CellHeader>
                        <CellBody>
                          <Input 
                            placeholder={ httpCheckMsg.path } 
                            value={ item.path } 
                            onChange={e => {
                              this.handlerChange(e,  'path', index)
                            }}
                          />
                        </CellBody>
                      </Cell>
                    </Cells>
                    <Cells>
                      <Cell className={ item.usedPort ? 'error-border' : 'success-border' }>
                        <CellHeader>
                          <Label>端口号</Label>
                        </CellHeader>
                        <CellBody>
                          <Input 
                            placeholder={ httpCheckMsg.port } 
                            value={ item.port }
                            onChange={ e=> {
                              this.handlerChange(e, 'port', index)
                            }}
                            onKeyDown={ e=> {
                              this.handlerKeyDown(e, index)
                            }}
                          />
                        </CellBody>
                      </Cell>
                    </Cells>
                    <Cells>
                      <Cell>
                        <CellHeader>
                          <Label>备注</Label>
                        </CellHeader>
                        <CellBody>
                          <Input 
                            placeholder={ httpCheckMsg.note } 
                            value={ item.note }
                            onChange={ e=> {
                              this.handlerChange(e, 'note', index)
                            }}
                          />
                        </CellBody>
                      </Cell>
                    </Cells>
                    <Cells>
                      <Cell>
                        <CellBody>
                          <div>
                            <Toggle
                              checked={ item.isStart }
                              onChange={ e=> this.toggleService(index, item.port, item.isStart) }
                            />
                            <span>{ !item.isStart ? '开启服务' : '关闭服务'}</span>
                            <Button 
                              type="warn"
                              size="small" 
                              style={{ marginLeft: '24px' }}
                              onClick={()=> {
                                this.handleRemoveService(item.id, item.port, index)
                              }}
                            >删除服务</Button>
                          </div>
                        </CellBody>
                      </Cell>
                    </Cells>
                    <div>
                    { item.port ? (
                      <CellsTitle
                        onClick={ ()=> {
                          if (item.isStart) {
                            typeof window != "undefined" && (()=> {
                              window.open(`http://localhost:${ item.port }`)
                            })()
                          }
                          return false
                        }}
                        style={{ 
                          color: item.isStart ? 'rgb(26, 173, 25)' : '',
                          cursor: item.isStart ? 'pointer' : 'default'
                        }}
                      >
                        { item.isStart ? '🚀' : '' } http://localhost:{ item.port }
                      </CellsTitle>
                    ) : null }
                    </div>
                  </CellBody>
                  <CellFooter>
                    <div style={WrapStyle}>
                      Σ(;ﾟдﾟ)
                    </div>
                  </CellFooter>
                </Cell>
              )
            })}
          </Cells>
        </div>
        <Button onClick={ this.handleClickHttp }>添加</Button>
      </React.Fragment>
    );
  }
}

export default HttpServer;