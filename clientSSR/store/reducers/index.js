import {combineReducers} from 'redux';
import auth, {authInitialState} from './auth';
import errors, {errorInitialState} from './error';
import test, {testInitialState} from './test';
export const initialStateCombined = {
  auth: authInitialState,
  errors: errorInitialState,
  test: testInitialState
}
export default combineReducers({
  auth,
  errors,
  test
});