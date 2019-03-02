import React, { Component } from 'react';
import  Header from './components/layout/Header';
import  Foot  from './components/layout/Foot';
import  Side  from './components/layout/Side';

class App extends Component {
  render() {
    return (
      <div >
 
        <div >
          ok
          {this.props.children}       
        </div>
      </div>
    );
  }
}

export default App;
