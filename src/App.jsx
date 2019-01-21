import React, { Component } from 'react';
import  Header from './components/layout/Header';
import  Foot  from './components/layout/Foot';
import  Side  from './components/layout/Side';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Side /> */}
        <div className="Main">
          {this.props.children}       
        </div>
        <Foot />
      </div>
    );
  }
}

export default App;
