import React, {Component} from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import Head from 'next/head';
class templatePage extends Component{
  static async getInitialProps(context){
    
    const{query, isServer}= context.ctx;
    
    return {isServer, query};
  }
  componentDidMount(){
    if(this.props.isServer){
      restoreAuth(this.props,()=>{});
    }
  }
  redirect = () => {
    Router.push("/account");
  }
  submit = (template)=>{
    this.props.dispatch(submitTemplate(template, this.redirect))
  }
  render(){
    return(
      <div>
        <Head>
          <title>Muscal Goggles | Create</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
      </div>
    );
  }
}
export default connect(state=>state)(templatePage);