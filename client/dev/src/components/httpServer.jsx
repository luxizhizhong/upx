import React, { Component } from 'react';
import {
  Cells,
  Cell,
  CellsTitle,
  CellHeader,
  CellBody,
  CellFooter
} from 'react-weui'


const imgWrapStyle = {
  width: '8vw',
  height: '10vh',
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
  // boxSizing: 'border-box',
  color: '#8f8f8f',
  backgroundColor: '#fcfcfc',
  borderColor: '#c0b0ff'
}

class HttpServer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <React.Fragment>
        <CellsTitle>List with description</CellsTitle>
        <Cells>
          <Cell>
            <CellBody>
              <Cells>
                <Cell>
                  <CellBody>
                    路径
                  </CellBody>
                  <CellFooter>
                    233
                  </CellFooter>
                </Cell>
              </Cells>
            </CellBody>
            <CellFooter>
              <div style={ imgWrapStyle }>
                { true ? (
                  <span>选择目录➕</span>
                ) : null }
              </div>
            </CellFooter>
          </Cell>
        </Cells>
      </React.Fragment>
    );
  }
}

export default HttpServer;