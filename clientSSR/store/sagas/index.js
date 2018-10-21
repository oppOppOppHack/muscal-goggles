import { delay } from 'redux-saga'
import { put, takeEvery, all, takeLatest} from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes';

import * as authSaga from './auth';
import * as templateSaga from './template';
import * as objectSaga from './object';
import * as metricSaga from './metric';
import * as eventSaga from './event';
export default function* rootSaga(){
  yield takeEvery(actionTypes.LOGIN_USER, authSaga.loginUser);
  yield takeEvery(actionTypes.REGISTER_USER, authSaga.registerUser);
  yield takeEvery(actionTypes.INITIATE_TEMPLATE_CREATION, templateSaga.submitTemplate);
  yield takeEvery(actionTypes.INITIATE_GET_TEMPLATES, templateSaga.getTemplates);
  yield takeEvery(actionTypes.INITIATE_OBJECT_CREATION, objectSaga.createObjects);
  yield takeEvery(actionTypes.INITITATE_EVENT_METRICS, metricSaga.getMetrics);
  yield takeEvery(actionTypes.INITIATE_EVENT_CREATION, eventSaga.createEvents);
}