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
import { checkPath, checkPort } from '../api'

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
        {
          path: '/Users/kozo4/cat/Project/huluxia/web/www',
          isPath: true,
          port: '2334',
          usedPort: false,
          note: '葫芦侠开发测试',
          id: '',
          start: false
        }
      ]
    }
  }

  hideDialog() {
    const msgDialog = this.state.msgDialog
    msgDialog.isShow = !msgDialog.isShow
    this.setState({ msgDialog })
  }

  handlerChange = async (e, tag, index)=> {
    const regxCheckNumber = str=> /^\d{1,}$/.test(str)
    let value = e.target.value.trim()
    const httpLists = this.state.httpLists
    let current = httpLists[index]
    if (tag === 'path') {
      const { check: file } = await checkPath(value)
      current['path'] = value
      current['isPath'] = file
    } else if (tag === 'port') {
      if (regxCheckNumber(value)) {
        value = +value
        if (value <= 65535) {
          let { used } = await checkPort(value)
          current['port'] = value
          current['usedPort'] = used
        }
      }
    } else if (tag === 'note') {
      current['note'] = value
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

        <div >
          <Cells>
            { this.state.httpLists.map((item, index) => {
              return (
                <Cell key={ index } style={{
                  border: `2px solid ${ item.start ? '#1AAD19' : '#D9D9D9' }`,
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
                            <Toggle /> <span>{ !item.start ? '开启服务' : '关闭服务'}</span>
                            <Button type="warn" size="small" style={{ marginLeft: '24px' }}>删除服务</Button>
                          </div>
                        </CellBody>
                      </Cell>
                    </Cells>
                    <div>
                    { item.port ? (
                      <CellsTitle>http://localhost:{ item.port }</CellsTitle>
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
        <Button>添加</Button>
      </React.Fragment>
    );
  }
}

export default HttpServer;