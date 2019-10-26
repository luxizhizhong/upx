import React, { PureComponent } from 'react';
import Os from './components/os'
import Footer from './components/footer'
import HttpServer from './components/httpServer'

export default class extends PureComponent {

  render() {
    return (
      <React.Fragment>
        <HttpServer />
        <Os />
        <Footer />
      </React.Fragment>
    )
  }

}