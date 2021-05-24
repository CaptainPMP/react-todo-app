import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import './mystyle.scss';
import ControlElement from './ControlElement';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="mainContainer">
        <div className="titles">
          <h1 className="title">React To-do App</h1>
          <h2 className="subtitle">Enhance your prodictivity</h2>
        </div>

        <ControlElement />
      </div>
     );
  }
}

export default App;
