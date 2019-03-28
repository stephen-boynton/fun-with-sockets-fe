import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import SocketContext from './socketHandlers/socketContext';
import './App.css';
import socket from 'socket.io-client';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      io: {},
      connected: false
    }
  }

  _joinAsHost = () => {
    this.props.history.push('/game/')
  }

  _emitJoin = () => {
    console.log('join');
  }

  render() {
    return (
      <div className="main">
        <div className="buttons">
          <h2>Welcome to Game</h2>
          <Button className="button" onClick={this._joinAsHost}>Host Game</Button>
          <Button className="button" onClick={this._emitJoin}>Join Game</Button>
        </div>
      </div>
    );
  }
}

export default App;
