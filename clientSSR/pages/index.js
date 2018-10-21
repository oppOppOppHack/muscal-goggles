import React, {Component} from 'react';
import Link from 'next/link';
import {connect} from 'react-redux';
import {setUser} from '../store/actions/auth';
import {setTest} from '../store/actions/test';
import NavBars from '../components/NavBars/NavBars';
import Head from 'next/head';
const homePage = (props)=>(
  <div>
    <NavBars/>
    <Head>
      <title>Muscal Goggles | Home</title>
    </Head>
    <h1>Hello How Are U? {props.isServer? "This is from server":"From another client"}</h1>
    <Link href = "/blog/asdfasdf"><a>Blog page </a></Link>
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