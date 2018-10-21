import React, {Component} from 'react';
import {connect} from 'react-redux';
import Head from 'next/head';
import {restoreAuth} from '../../util/storeState';
import NavBars from '../../components/NavBars/NavBars'
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import GraphDemo from "../../components/Graphs/GraphDemo";
class Graphs extends Component
{
  static async getInitialProps(context)
  {
    const { store, isServer, query } = context.ctx;
    if(isServer){
      console.log("server");
    }else{
      console.log("not server")
    }
    console.log(query);
    return {query, isServer};
  }
  componentDidMount()
  {
    if(this.props.isServer)
    {
      restoreAuth(this.props);
    }
  }
  render()
  {
    console.log(this.props);
    const {classes} = this.props;
    let content = (<CircularProgress size = {50} thickness = {7} className = {classes.spinner}/>);
    if (this.props.auth.user)
    {
      if (this.props.auth.user.isAdmin)
      {
        content = (
          <div className = {classes.content}>
            <GraphDemo />
          </div>
        );
      }
      else
      {
        content = (
          <div className = {classes.content}>
            <GraphDemo />
          </div>
        );
      }
    }
    return(
      <div>
        <NavBars/>
        <Head>
          <title>Muscal Goggles | Account</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        <div className = {classes.divider}/>
        {content}
      </div>
    );
  }
}
const styles = (theme) =>
{
  return ({
    content:
    {
      textAlign: 'center',
      backgroundColor: 'lightgrey',
      width: '90vw',
      paddingBottom: '1rem',
      margin: 'auto',
      borderRadius: '2rem'
    },
    spinner:
    {
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block'
    },
    divider: {height: '1rem'},
    msg: {paddingTop: '1rem'}
  });
}
export default connect(state=>state)(withStyles(styles)(Graphs))