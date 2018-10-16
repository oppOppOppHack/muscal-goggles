import * as actionTypes from './actionTypes';
//import jwt_decode from 'jwt-decode';
//import axios from 'axios';
//import setAuthToken from '../util/setAuthToken';
export const setUser = (user)=>{
  return {
    type: actionTypes.SET_USER,
    payload: user
  }
}
export const removeUser = ()=>{
  return {
    type: actionTypes.REMOVE_USER
  }
}
export const removeLoginUserError = ()=>{
  return {
    type: actionTypes.REMOVE_LOGIN_USER_ERROR
  }
}
export const setLoginError = (error)=>{
  return {
    type: actionTypes.LOGIN_USER_ERROR,
    payload: error
  }
}
export const loginUser = (data, history) => {
  return {
    type: actionTypes.LOGIN_USER,
    data,
    history
  };
}
export const removeRegisterUserError = ()=>{
  return {
    type: actionTypes.REMOVE_REGISTER_USER_ERROR
  };
}
export const setRegisterError = (error)=>{
  return {
    type: actionTypes.REGISTER_USER_ERROR,
    payload: error
  }
}
export const registerUser = (data, history)=>{
  return {
    type: actionTypes.REGISTER_USER,
    data,
    history
  }
}