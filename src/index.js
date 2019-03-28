import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import HostScreen from './components/HostScreen';
import * as serviceWorker from './serviceWorker';
import socket from 'socket.io-client';
import SocketContext from './socketHandlers/socketContext';

// SOCKET NEEDS TO BE ABOVE THE COMPONENTS PROVIDER HERE?
ReactDOM.render(<Router>
  <SocketContext.Provider value={socket('http://localhost:3001')}>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/game/" component={HostScreen} />
    </Switch>
  </SocketContext.Provider>
</Router>, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
