import React from 'react';
import {Players} from './../api/players'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function Player(props) {
  const { classes, player } = props;
  let itemClassName = `item item--position-${player.rank}`;

  return (
    <div key={player._id} className={itemClassName}>
      <div className='player'>
        <div>
          <p className='player__name'>{player.name}</p>
          <p className='player__stats'>
            {player.position} place: {player.score} point(s)
          </p>
        </div>
        <div className='player__actions'>
          <button className='button button--round' onClick={() => {
            Players.update(player._id, {$inc: {score: -1}});
          }}>-1</button>
          <button className='button button--round' onClick={() => {
            Players.update(player._id, {$inc: {score: 1}});
          }}>+1</button>
          <IconButton
            className={classes.button}
            aria-label="Delete"
            onClick={() => Players.remove(player._id)}>
            <DeleteIcon />
          </IconButton>
          </div>
        </div>
      </div>
    )
  }

Player.propTypes = {
  player: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Player);
