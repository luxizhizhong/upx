import React, { PureComponent } from 'react';
import {
  Button
} from 'react-weui'

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <React.Fragment>
        <Button>clicked</Button>
        <Button>{ process.env.NODE_ENV }</Button>
      </React.Fragment>
    );
  }
}

export default App;