import React, {Component} from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import Head from 'next/head';
import {restoreAuth} from '../../../util/storeState';
import EventCreator from '../../../components/EventCreator/EventCreator';
import {getTemplates} from '../../../store/actions/template';
import Button from '@material-ui/core/Button';
import CSVReader from 'react-csv-reader';
import {createEvents} from '../../../store/actions/event';
import NavBars from '../../../components/NavBars/NavBars';
class eventPage extends Component{
  static async getInitialProps(context){
    
    const{query, isServer}= context.ctx;
    
    return {isServer, query};
  }
  state={
    object: null
  };
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
    //this.props.dispatch(submitTemplate(template, this.redirect))

  }
  handleData = (data) => {
    let objectArray = [];
    if (data.length >= 2);
    let templateField = data[0][0];
    for (let i = 2; i < data.length; i++) {
      let obj = {
        
      };
      for (let j = 0; j < data[1].length; j++) {
        obj[data[1][j]] = data[i][j];
      }
      objectArray.push(obj);
    }
    let object = {
      template: templateField,
      objects: objectArray
    };

    console.log(object);
    this.setState({
      object
    })
    //this.props.dispatch(createObjects(object, this.redirect));
  }
  render(){
    let template = {
      'location': '',
      'number of participants': '',
       'date': ''
    }
    let objects = ['worker', 'volunteer', 'doctor']
    return(
      <div>
        <NavBars/>
        <Head>
          <title>Muscal Goggles | Event</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        <EventCreator
          //submit = {this.submit}
          template = {template}
          objects = {objects}
        />
        <CSVReader
          cssClass="csv-input"
          label="Select CSV"
          onFileLoaded={this.handleData}
          onError={()=>{}}
          inputId="csvExample"
          inputStyle={{color: 'red'}}
        />
        <Button
          variant = 'contained'
          color = 'secondary'
          onClick = {(e) =>
          {
            e.preventDefault();
            console.log(this.state);
            this.props.dispatch(createEvents(this.state.object, this.redirect));
          }}
          className = 'button'
        >
          Create Objects
        </Button>
      </div>
    );
  }
}
export default connect(state=>state)(eventPage);