import React, {Component} from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import Head from 'next/head';
import {restoreAuth} from '../../../util/storeState';
import ObjectCreator from '../../../components/TemplateCreator/ObjectCreator';
import {getTemplates} from '../../../store/actions/template';
class templatePage extends Component{
  static async getInitialProps(context){
    
    const{query, isServer}= context.ctx;
    
    return {isServer, query};
  }
  componentDidMount(){
    if(this.props.isServer){
      restoreAuth(this.props,()=>{});
    }
    this.props.dispatch(getTemplates());
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
          <title>Muscal Goggles | Object</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        <ObjectCreator
          submit = {this.submit}
          templates = {this.props.template.templates}
        />
      </div>
    );
  }
}
export default connect(state=>state)(templatePage);