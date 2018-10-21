import * as actionTypes from './actionTypes';
export const createObjects = (data, redirect)=>{
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
    type: actionTypes.INITIATE_OBJECT_CREATION,
    data: data,
    redirect
  }
}