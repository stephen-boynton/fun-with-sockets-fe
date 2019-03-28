import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography'
import SocketContext from '../socketHandlers/socketContext';
import './HostScreen.css';

class HostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: {},
      room: '',
    }
    this.props.socket.on('playerJoin', (player) => {
      this.setState({
        ...this.state.players,
        [player.name]: player
      })
    })

    this.props.socket.on('hostJoin', (hostData) => {
      this.setState({
        room: hostData.room
      })
    })
  }

  componentDidMount() {
    this.props.socket.emit('host');
  }

  render() {
    return (
      <div className="HostScreen">
        <Typography variant="headline">Players Should Join By Using Code: {this.state.room} </Typography>
        <Typography variant="subheading">Number of players: {Object.entries(this.state.players).length}</Typography>
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
