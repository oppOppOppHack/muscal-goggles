import React, {Component} from 'react';
import Link from 'next/link';
import {connect} from 'react-redux';
import {setUser} from '../store/actions/auth';
import {setTest} from '../store/actions/test';
import Typography from '@material-ui/core/Typography';
import NavBars from '../components/NavBars/NavBars';
import Head from 'next/head';
const homePage = (props)=>(
  <div>
    <NavBars/>
    <Head>
      <title>Muscal Goggles | Home</title>
    </Head>
    <body>
      <div>
        <Typography variant="h2" color="Primary" align="center" paragraph='true'>
          Muscal Goggles
        </Typography> 
      </div>
      <div>
        <Typography variant="h5" color="textSecondary" align="center" paragraph='false'>
          This is a subheading
        </Typography>
        <Typography variant="body1" color="textPrimary" align="center" paragraph='true'>
          Lorem ipsum this is a paragraph
        </Typography>
      </div>
    </body>
  </div>
);
homePage.getInitialProps = async function(context){
  const { store, isServer, query } = context.ctx;
  if(isServer){
    store.dispatch(setTest("asdfasdfa"));
  }
  if(!isServer){
    console.log(localStorage.getItem("currentUser"));
  }
  //console.log("run once");
  //console.log(localStorage);
  return {query, isServer};
}
export default connect(state => state)(homePage);