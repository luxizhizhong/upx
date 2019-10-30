import React, { PureComponent } from 'react';
import {
  Cells,
  Cell,
  CellBody,
  CellFooter,
  Button
} from 'react-weui'
import { getOS } from '../api'

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      osInfo: {},
      isShow: false
    }
  }

  componentDidMount() {
    this.updateDataOS()
  }

  updateDataOS = async () => {
    const osInfo = await getOS()
    this.setState({ osInfo })
  }
  render() {
    return (
      <React.Fragment>
        <Button onClick={() => {
          this.setState({
            isShow: !this.state.isShow
          })
        }}>{ this.state.isShow ? '隐藏' : '查看' }系统信息</Button>
        {this.state.isShow ? (
          <Cells>
            {Object.keys(this.state.osInfo).map((key, i) => {
              let data = this.state.osInfo
              let current = data[key]
              return (
                <Cell key={i}>
                  <CellBody>
                    {key}
                  </CellBody>
                  <CellFooter>
                    {current}
                  </CellFooter>
                </Cell>
              )
            })}
          </Cells>
        ) : null}
      </React.Fragment>
    );
  }
}

export default App;