import React, { PureComponent } from 'react';
import Os from './components/os'
import Footer from './components/footer'

export default class extends PureComponent {

  render() {
    return (
      <React.Fragment>
        <Os></Os>
        <Footer />
      </React.Fragment>
    )
  }

}