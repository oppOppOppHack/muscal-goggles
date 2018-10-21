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
import ListItemText from '@material-ui/core/ListItemText';
import Link from 'next/link';

const styles =
{
  root: {
  flexGrow: 1,
  },
  grow: {
  flexGrow: 1,
  },
  list: {position: 'relative', width: '15vw'}
};

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
          <div>
            <Link prefetch href="/create/template">
              <a>Create Template</a>
            </Link>
          </div>
          <div>
            <Link prefetch href="/create/object">
              <a>Create Object</a>
            </Link>
          </div>
          <div>
            <Link prefetch href="/blog">
              <a>Create Blog</a>
            </Link>
          </div>
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
          <div>
            <Link prefetch href="/login">
              <a>Log In</a>
            </Link>
          </div>
          |
          <div>
            <Link prefetch href="/register">
              <a>Register</a>
            </Link>
          </div>

        </Toolbar>
      </AppBar>
    </div>
    );
  }
}

export default withStyles(styles)(NavBars);
