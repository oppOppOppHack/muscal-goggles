import React, {Component} from 'react';
import {connect} from 'react-redux';
import Head from 'next/head';
import {restoreAuth} from '../../util/storeState';
import NavBars from '../../components/NavBars/NavBars'
class accountPage extends Component{
  static async getInitialProps(context){
    const { store, isServer, query } = context.ctx;
    if(isServer){
      console.log("server");
    }else{
      console.log("not server")
    }
    console.log(query);
    return {query, isServer};
  }
  componentDidMount(){
    if(this.props.isServer){
      restoreAuth(this.props);
    }
  }
  render(){
    return(
      <div>
        <NavBars/>
        <Head>
          <title>Muscal Goggles | Account</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        <div>Account Page </div>
      </div>
      
    );
  }
}
export default connect(state=>state)(accountPage)