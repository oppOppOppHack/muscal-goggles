import React, {Component} from 'react';
import {connect} from 'react-redux';
import Router from 'next/router';
import Head from 'next/head';
import {restoreAuth} from '../../../util/storeState';
import ObjectCreator from '../../../components/ObjectCreator/ObjectCreator';
import {getTemplates} from '../../../store/actions/template';
import Button from '@material-ui/core/Button';
import CSVReader from 'react-csv-reader';
import {createObjects} from '../../../store/actions/object';
import NavBars from '../../../components/NavBars/NavBars';
import {withStyles} from '@material-ui/core';

class templatePage extends Component{
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
  render()
  {
    const {classes} = this.props;

    return(
      <div>
        <NavBars/>
        <Head>
          <title>Muscal Goggles | Object</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        <ObjectCreator
          //submit = {this.submit}
          templates = {this.props.template.templates}
        />
        <div className = {classes.multiple}>
          <CSVReader
            cssClass="csv-input"
            label="Select CSV"
            onFileLoaded={this.handleData}
            onError={()=>{}}
            inputId="csvExample"
            inputStyle={{color: 'red'}}
          />
          <div className = {classes.divider}/>
          <Button
            variant = 'contained'
            color = 'secondary'
            onClick = {(e) =>
            {
              e.preventDefault();
              console.log(this.state);
              this.props.dispatch(createObjects(this.state.object, this.redirect));
            }}
          >
            Create Objects
          </Button>
        </div>
      </div>
    );
  }
}

const styles = (theme) =>
{
  return ({
    multiple:
    {
      width: '60%',
      backgroundColor: 'lightblue',
      borderRadius: '2rem',
      margin: 'auto',
      marginTop: '1rem',
      padding: '1rem',
      textAlign: 'center'
    },
    divider: {height: '1rem'}
  });
}

export default connect(state=>state)(withStyles(styles)(templatePage));