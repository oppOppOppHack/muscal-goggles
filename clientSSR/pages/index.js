import React, {Component} from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm/LoginForm';
import {loginUser} from '../store/actions/auth';
import Router from 'next/router';
import Head from 'next/head';
import {restoreAuth} from '../util/storeState';
import NavBars from '../components/NavBars/NavBars';

class loginPage extends Component{
  static async getInitialProps(context){

    const{query, isServer}= context.ctx;

    return {isServer, query};
  }
  loginUser = (data)=>{
    this.props.dispatch(loginUser(data, Router));
  }
  redirect = ()=>{
    Router.push("/account");
  }
  componentDidMount(){
    if(this.props.isServer){
      restoreAuth(this.props, this.redirect);
    }
  }
  render(){
    return(
      <div>
        <NavBars/>
        <Head>
          <title>Muscal Goggles | Login</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        <LoginForm
          loginUser = {this.loginUser}
          errors = {this.props.errors.login}
          redirect = {this.redirect}
          auth = {this.props.auth}
        />
      </div>
    );
  }
}
export default connect(state=>state)(loginPage);
