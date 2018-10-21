import {combineReducers} from 'redux';
import auth, {authInitialState} from './auth';
import errors, {errorInitialState} from './error';
import test, {testInitialState} from './test';
import template, {templateInitialState} from './template';
import metric, {metricInitialState} from './metric';
export const initialStateCombined = {
  auth: authInitialState,
  errors: errorInitialState,
  test: testInitialState,
  template: templateInitialState,
  metric: metricInitialState
}
export default combineReducers({
  auth,
  errors,
  test,
  template,
  metric
});