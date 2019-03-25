import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button'
import './App.css';
import socket from 'socket.io-client';
import handler from './socketHandlers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      <Router>
        <div className="main">
          <div className="buttons">
            <h2>Welcome to Game</h2>
            <Button className="button">Host Game</Button>
            <Button className="button">Join Game</Button>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
