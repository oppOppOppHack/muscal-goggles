import axios from 'axios';
import {put} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
export function* getUser(data){
  try{
    const response = yield axios.get("/api/login", data);
    yield put({
      type: actionTypes.SET_USER,
      payload: response.data
    });
  }catch(error){
    yield put({
      type: actionTypes.FIND_USER_ERROR,
      payload: error
    });
  }
}