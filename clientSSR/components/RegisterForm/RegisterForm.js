import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import FormHelperText from '@material-ui/core/FormHelperText';
//import { connect } from 'react-redux';
//import {registerUser} from '../../../store/actions/authActions';
//import {withRouter} from 'react-router-dom';
import  Typography  from '@material-ui/core/Typography';
import styles from './Styles';
class Register extends Component{
  state={
    username: "",
    email: "",
    password: "",
    password2: ""
  };
  onChangeFieldHandler = (name, event)=>{
    this.setState({
      [name]: event.target.value
    });
  }
  onRegisterClickHandler = () =>{
    this.props.registerUser({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }, this.props.history);
  }
  componentWillMount(){
    
  }
  render() {
    return(
      <Grid container spacing={16} className = {this.props.classes.root}>
        <Paper elevation={2} className = {this.props.classes.paper}>
          <Grid item xs={12}>
            <Typography variant='h6' className={this.props.classes.title}>Register</Typography>
          </Grid>
          <Grid item xs={12}>
            <FormControl className={this.props.classes.formControl}>
              <InputLabel htmlFor='username' classes={
                {
                  root: this.props.classes.formLabel,
                }}>Username</InputLabel>
              <Input
                id = 'username'
                type = 'text'
                onChange = {(e)=>this.onChangeFieldHandler('username', e)}
                value = {this.state.username}
                error = {this.props.errors.username?true: false}
                autoComplete = "off" 
                className = {this.props.classes.formInput}>
              </Input>
              {this.props.errors.username? 
                <FormHelperText className = {this.props.classes.formHelper}>{this.props.errors.username}</FormHelperText>: null
              }
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl className={this.props.classes.formControl}>
              <InputLabel htmlFor='email' classes={
                {
                  root: this.props.classes.formLabel,
                }}>Email</InputLabel>
              <Input
                id = 'email'
                type = 'email'
                onChange = {(e)=>this.onChangeFieldHandler('email', e)}
                value = {this.state.email}
                error = {this.props.errors.email?true: false}
                autoComplete="off"
                className = {this.props.classes.formInput}>
              </Input>
              {this.props.errors.email? 
                <FormHelperText className = {this.props.classes.formHelper}>{this.props.errors.email}</FormHelperText>: null
              }
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl className={this.props.classes.formControl}>
              <InputLabel htmlFor='password' classes={
                {
                  root: this.props.classes.formLabel,
                }}>Password</InputLabel>
              <Input
                id = 'password'
                type = 'password'
                onChange = {(e)=>this.onChangeFieldHandler('password', e)}
                value = {this.state.password}
                error = {this.props.errors.password?true: false}
                autoComplete="off"
                className = {this.props.classes.formInput}>
              </Input>
              {this.props.errors.password? 
                <FormHelperText className = {this.props.classes.formHelper}>{this.props.errors.password}</FormHelperText>: null
              }
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl className={this.props.classes.formControl}>
              <InputLabel htmlFor='password2' classes={
                {
                  root: this.props.classes.formLabel,
                }}>Re-enter Password</InputLabel>
              <Input
                id = 'password2'
                type = 'password'
                onChange = {(e)=>this.onChangeFieldHandler('password2', e)}
                value = {this.state.password2}
                error = {this.props.errors.password2?true: false}
                autoComplete="off"
                className = {this.props.classes.formInput}>
              </Input>
              {this.props.errors.password2? 
                <FormHelperText className = {this.props.classes.formHelper}>{this.props.errors.password2}</FormHelperText>: null
              }
            </FormControl>
          </Grid>
          <Grid item xs= {12}>
            <Button 
              variant = 'contained' 
              color='primary' 
              onClick = {this.onRegisterClickHandler} 
              className = {this.props.classes.button}>
              Register
            </Button>
          </Grid>
        </Paper>
      </Grid>
    )

  }
};
export default withStyles(styles)(Register);