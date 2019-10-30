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
  Button
} from 'react-weui'
import '../css/toggle.css'
import Toggle from 'react-toggle'

const WrapStyle = {
  height: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  padding: '6px 15px',
  fontWeight: 400,
  fontSize: '14px',
  textAlign: 'center',
  verticalAlign: 'middle',
  touchAction: 'manipulation',
  cursor: 'pointer',
  border: '1px solid transparent',
  borderRadius: '4px',
  whiteSpace: 'nowrap',
  lineHeight: '1.5',
  userSelect: 'none',
  transition: 'color .3s ease,background-color .3s ease,border .3s ease',
  color: '#1AAD19',
  backgroundColor: '#fcfcfc',
  borderColor: '#1AAD19'
}

const borderWrap = {
  border: '2px solid #1AAD19',
  padding: '12px',
  margin: '24px',
  borderRadius: "12px"
}

class HttpServer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <div style={ borderWrap }>
          <CellsTitle>http://localhost:{3000}</CellsTitle>
          <Cells>
            <Cell>
              <CellBody>
                <Cells>
                  <Cell>
                    <CellHeader>
                      <Label>路径</Label>
                    </CellHeader>
                    <CellBody>
                      <Input />
                    </CellBody>
                  </Cell>
                </Cells>
                <Cells>
                  <Cell>
                    <CellHeader>
                      <Label>端口号</Label>
                    </CellHeader>
                    <CellBody>
                      <Input />
                    </CellBody>
                  </Cell>
                </Cells>
                <Cells>
                  <Cell>
                    <CellHeader>
                      <Label>备注</Label>
                    </CellHeader>
                    <CellBody>
                      <Input />
                    </CellBody>
                  </Cell>
                </Cells>
                <Cells>
                  <Cell>
                    <CellBody>
                      <div>
                        <Toggle /> <span>{true ? '开启服务' : '关闭服务'}</span>
                        <Button type="warn" size="small" style={{ marginLeft: '24px' }}>删除服务</Button>
                      </div>
                    </CellBody>
                  </Cell>
                </Cells>
              </CellBody>
              <CellFooter>
                <div style={ WrapStyle }>
                  fs文件系统
                </div>
              </CellFooter>
            </Cell>
          </Cells>
        </div>
        <Button>添加</Button>
      </React.Fragment>
    );
  }
}

export default HttpServer;