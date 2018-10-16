import * as actionTypes from './actionTypes';
export const setTest = (testValue)=>{
  return {
    type: actionTypes.TEST,
    payload: testValue
  }
}