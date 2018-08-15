import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1
  },
  title: {
    fontSize: '1.8rem'
  }
};

function TitleBar(props) {
  const { classes, player } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="title" color="inherit">
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

TitleBar.propTypes = {
    title: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TitleBar);
