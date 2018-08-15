import React from 'react';
import { Players } from './../api/players';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    fontSize: '2rem'
  },
  textField: {
    flexGrow: 1,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit,
    fontSize: '1.5rem'
  },
  resize: {
    fontSize: '1.5rem'
  },
});

class AddPlayer extends React.Component {
  state = {
    name: ''
  };

  handleName(e) {
    let playerName = e.target.value;
    this.setState({ name: playerName });
    e.preventDefault();
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.name) {
      Players.insert({
        name: this.state.name,
        score: 0
      });
    }
    this.setState({ name: '' });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)} className={classes.container}>
          <TextField
            id='name'
            label='Player name'
            InputProps={{classes: { input: classes.resize }}}
            InputLabelProps={{classes: { root: classes.resize }}}
            className={classes.textField}
            onChange={this.handleName.bind(this)}
            value={this.state.name}
          />
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            type='submit'>
            Add Player
          </Button>
        </form>
      </div>
    );
  }
}

AddPlayer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddPlayer);
