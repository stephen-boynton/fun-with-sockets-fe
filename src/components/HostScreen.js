import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography'
import SocketContext from '../socketHandlers/socketContext';

class HostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: {}
    }
    console.log(this.props);
  }

  componentDidMount() {
    console.log(this.props);
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

const HostWithSocket = props => (
  <SocketContext.Consumer>
    {socket => <HostScreen {...props} socket={socket} />}
  </SocketContext.Consumer>
)

export default HostWithSocket;
