import React, {Component} from 'react';
import {connect} from 'react-redux';
import Router from 'next/router';
import {registerUser} from '../../store/actions/auth';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import {restoreAuth} from '../../util/storeState';
class registerPage extends Component{
  static async getInitialProps(context){
    const {query, isServer} = context.ctx;
    return {query, isServer};
  }
  registerUser = (data) => {
    this.props.dispatch(registerUser(data, Router));
  }
  redirect = () => {
    Router.push("/account");
  }
  componentDidMount() {
    if(this.props.isServer){
      restoreAuth(this.props, this.redirect, () => {});
    }
  }
  render(){
    return (
      <RegisterForm
        registerUser = {this.registerUser}
        errors = {this.props.errors.register}
        redirect = {this.redirect}
        auth = {this.props.auth}
      />
    )
  }
}
export default connect(state=>state)(registerPage);