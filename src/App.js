import React, { Component } from 'react';


export default class App extends Component {

  constructor(props){
    super(props); // parent class here Component   [to solve warrning this' is not allowed before 'super()]
    this.state = {
      counter: 0
    }
  }

  countUp = () => {
    this.setState({counter: ++this.state.counter})
  };

  render() {
    return (
      <div style={{fontSize: '30px', textAlign: 'center' }}>
        <button onClick={this.countUp}> Count Up </button>
            <h1> Hello From First React App </h1>
            {this.state.counter}
      </div>
    )
  }
}
