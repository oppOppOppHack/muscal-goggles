import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import React, {Component} from 'react';
import ListItem from '@material-ui/core/ListItem';
import Link from 'next/link';
import styles from './Styles';

class NavBars extends Component
{
  state = {showing: false}

  render()
  {
    const {classes} = this.props;

    return (
    <div className = {classes.root}>
      <SwipeableDrawer
        open = {this.state.showing}
        onClose = {() => {
          this.setState({showing: false});
        }}
        onOpen = {() => {
          this.setState({showing: true});
        }}
      >
        <div
          tabIndex = {0}
          role = "button"
          className = {classes.list}
          onClick = {() => {
            this.setState({showing: false});
          }}
          onKeyDown = {() => {
            this.setState({showing: true});
          }}
        >
          <ListItem button>
            <Link prefetch href="/create/template">
              <a className={classes.sideBar}>Create Template</a>
            </Link>
          </ListItem>
          <ListItem button>
            <Link prefetch href="/create/object">
              <a className={classes.sideBar}>Create Object</a>
            </Link>
          </ListItem>
        </div>
      </SwipeableDrawer>
      <AppBar position = "static">
        <Toolbar>
          <IconButton
            className = {classes.menuButton}
            color = "inherit"
            aria-label = "Menu"
            onClick = {() =>
            {
              this.setState({showing: true});
            }}
          >
          <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow} onClick = {() => {window.location= '/' }}>
            Muscal Goggles
          </Typography>
          <Button color="inherit">
            <Link prefetch href="/login">
              <a className={classes.topBar}>Log In</a>
            </Link>
          </Button>
          |
          <Button color="inherit">
            <Link prefetch href="/register">
              <a className={classes.topBar}>Register</a>
            </Link>
          </Button>

        </Toolbar>
      </AppBar>
    </div>
    );
  }
}

export default withStyles(styles)(NavBars);
