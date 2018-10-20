import React, {Component} from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import Head from 'next/head';
import {restoreAuth} from '../../util/storeState';
import TemplateCreator from '../../components/TemplateCreator/TemplateCreator';
import {submitTemplate} from '../../store/actions/template';
class templatePage extends Component{
  static async getInitialProps(context){
    
    const{query, isServer}= context.ctx;
    
    return {isServer, query};
  }
  componentDidMount(){
    if(this.props.isServer){
      restoreAuth(this.props, this.redirect);
    }
  }
  redirect = () => {
    Router.push("/account");
  }
  submitTemplate(template){
    this.props.dispatch(submitTemplate(template, this.redirect))
  }
  render(){
    return(
      <div>
        <Head>
          <title>Muscal Goggles | Template</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        <TemplateCreator
          submit = {this.submitTemplate}
        />
      </div>
    );
  }
}
export default connect(state=>state)(templatePage);