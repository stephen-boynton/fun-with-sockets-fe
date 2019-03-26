import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography'
import socket from 'socket.io-client';

class HostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: {}
    }
    console.log(this.props);
    // this.props.io.on('newPlayer', (playerInfo) => {
    //   this.setState({
    //     players: {
    //       ...this.state.players,
    //       [playerInfo.name]: playerInfo
    //     }
    //   })
    // })
  }
  render() {
    return (
      <div>
        <Typography variant="h2">Ready to Start Game???</Typography>
        {/* <Typography variant="subheading">Number of players: {this.state.players.entries().length}</Typography> */}
      </div>
    );
  }
}

export default HostScreen;
