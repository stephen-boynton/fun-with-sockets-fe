import React, { Component } from 'react';
import './App.css';
import socket from 'socket.io-client';
import handler from './socketHandlers';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Loading',
      io: {}
    };
    handler(socket, (connection) => {
      this.setState({
        io: connection
      });
      console.log(connection);
    })
  }

  render() {
    return (
      <div>
        <header>
          <h1>{this.state.text}</h1>
        </header>
      </div>
    );
  }
}

export default App;
