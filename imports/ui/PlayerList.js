import React from 'react';
import Player from './Player';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

export default class PlayerList extends React.Component {
  renderPlayers() {
    return this.props.players.map((player) => {
      return <Player key={player._id} player={player}/>
    });
  }

  render() {
    return (
      <FlipMove maintainContainerHeight={true}>
        {this.renderPlayers()}
      </FlipMove>
    );
  }
};

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
}
