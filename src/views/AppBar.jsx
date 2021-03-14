import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import gotLogo from 'images/got.png';
import theme from 'theme/muiTheme.js';

const styles = makeStyles(({
  root: {
    flexGrow: 1,
  },
  homeButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  homeIcon: {
    fontSize: '2.5rem',
  },
  appBar: {
    backgroundColor: theme.palette.background.default,
  },
  appBarLogo: {
    maxWidth: theme.spacing(42),
  },
  appBarLogoDiv: {
    flexGrow: 1,
    paddingTop: '5px',
    marginRight: '90px',
  }
}));

export default function ButtonAppBar() {
  const classes = styles();

  // Navigate back to the home page
  function handleHomeClick() {
    window.location.href = window.location.origin;
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.homeButton}
            onClick={() => handleHomeClick()}
            data-hook='home-button'
          >
            <HomeIcon className={classes.homeIcon} />
          </IconButton>
          <div className={classes.appBarLogoDiv}><img src={gotLogo} className={classes.appBarLogo} alt="logo" /></div>
        </Toolbar>
      </AppBar>
    </div>
  );
}