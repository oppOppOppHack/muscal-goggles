import { delay } from 'redux-saga'
import { put, takeEvery, all, takeLatest} from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes';

import * as authSaga from './auth';
export default function* rootSaga(){
  yield takeEvery(actionTypes.LOGIN_USER, authSaga.loginUser);
  yield takeEvery(actionTypes.REGISTER_USER, authSaga.registerUser);
  
}