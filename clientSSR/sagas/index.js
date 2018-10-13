import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes';

import * as authSaga from './auth';
export default function* rootSaga(){
  yield takeEvery(actionTypes.FIND_USER, authSaga.getUser);
}