import React, {Component} from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import Head from 'next/head';
import {restoreAuth} from '../../../util/storeState';
import TemplateCreator from '../../../components/TemplateCreator/TemplateCreator';
import {submitTemplate} from '../../../store/actions/template';
import NavBars from '../../../components/NavBars/NavBars';
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
        <NavBars/>
        <Head>
          <title>Muscal Goggles | Template</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        <TemplateCreator
          submit = {this.submit}
        />
      </div>
    );
  }
}
export default connect(state=>state)(templatePage);