import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button'
import './App.css';
import socket from 'socket.io-client';
import handler from './socketHandlers';
import HostScreen from './components/HostScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      io: handler(socket, (connection) => {
        return connection;
      }),
      dialogueOpen: false
    }
  }

  gameLink = props => <Link to={{ pathname: '/game/', state: { ...props } }}>Host Game</Link>;

  _emitJoin = () => {
    console.log(this.gameLink);
  }

  render() {
    return (
      <Router>
        <div className="main">
          <div className="buttons">
            <h2>Welcome to Game</h2>
            <Button className="button" component={this.gameLink}>Host Game</Button>
            <Button className="button" onClick={this._emitJoin}>Join Game</Button>
          </div>
          <Route path="/game/" component={HostScreen} />
        </div>
      </Router>
    );
  }
}

export default App;
