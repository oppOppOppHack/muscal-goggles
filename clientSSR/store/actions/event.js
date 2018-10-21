import * as actionTypes from './actionTypes';
export const createEvents = (data, redirect) => {
  /*
    expected: 
    {
      template: ...
      objects: {
        field1: ...,
        field2: ...
      }
    }
  */
  return {
    type: actionTypes.INITIATE_EVENT_CREATION,
    data: data,
    redirect
  }
}