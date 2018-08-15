import React from 'react';
import {Players} from './../api/players'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    flexGrow: 1,
    fontSize: '1.5rem'
  },
  buttonContainer: {
    display: 'flex',
    padding: '0 0.875rem'
  },
  card: {
    minWidth: 275,
    marginBottom: '1.3rem'
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  stats: {
    fontSize: '1.5rem',
    fontStyle: 'italic',
    fontWeight: 300
  }
});

function Player(props) {
  const { classes, player } = props;
  let itemClassName = `item item--position-${player.rank}`;

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <div>
          <Typography variant="display2" gutterBottom>
            {player.name}
          </Typography>
          <Typography variant="headline" gutterBottom>
            {player.position} place: {player.score} point(s)
          </Typography>
        </div>
        <div>
          <IconButton
            className={classes.button}
            aria-label="Delete"
            onClick={() => Players.remove(player._id)}>
            <DeleteIcon />
          </IconButton>
        </div>
      </CardContent>
      <CardContent className={classes.buttonContainer}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => Players.update(player._id, {$inc: {score: 1000}})}>
          +1000
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => Players.update(player._id, {$inc: {score: 100}})}>
          +100
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => Players.update(player._id, {$inc: {score: 50}})}>
          +50
        </Button>
      </CardContent>
      <CardContent className={classes.buttonContainer}>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.button}
          onClick={() => Players.update(player._id, {$inc: {score: -1000}})}>
          -1000
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.button}
          onClick={() => Players.update(player._id, {$inc: {score: -100}})}>
          -100
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.button}
          onClick={() => Players.update(player._id, {$inc: {score: -50}})}>
          -50
        </Button>
      </CardContent>
    </Card>
  )
}

Player.propTypes = {
  player: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Player);
