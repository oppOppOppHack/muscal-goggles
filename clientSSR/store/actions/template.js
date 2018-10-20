import * as actionTypes from './actionTypes';
export const submitTemplate = (template, redirect)=>{
  return{
    type: actionTypes.INITIATE_TEMPLATE_CREATION,
    template,
    redirect
  }
}