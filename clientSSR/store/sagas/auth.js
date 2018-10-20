import axios from 'axios';
import {put} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import setAuthToken from '../../util/setAuthToken';
import jwt_decode from 'jwt-decode';
import {
  setUser, 
  removeUser, 
  setLoginError, 
  removeLoginUserError,
  setRegisterError,
  removeRegisterUserError
} from '../actions/auth';
export function* loginUser(action){ //{data: data, history: history}
  try{
    const response = yield axios.post("http://localhost:5000/api/users/login", action.data);
    yield localStorage.setItem('currentUser', response.data.token);
    const decoded = jwt_decode(response.data.token);
    yield setAuthToken(response.data.token);
    yield put(setUser(decoded));
    yield put(removeLoginUserError());
    yield action.history.push("/account");
  }catch(error){
    yield put(setLoginError(error.response.data));
  }
}
/*
{
  author:
  
}
*/
export function* getBooks(action){

}
export function* registerUser(action){
  try{
    const response = yield axios.post("http://localhost:5000/api/users/register", action.data);
    yield localStorage.setItem('currentUser', response.data.token);
    const decoded = jwt_decode(response.data.token);
    yield setAuthToken(response.data.token);
    yield put(setUser(decoded));
    yield put(removeRegisterUserError());
    yield action.history.push("/account");
  }catch(error){
    yield put(setRegisterError(error.response.data));
  }
}