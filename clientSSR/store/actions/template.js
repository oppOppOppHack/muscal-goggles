import * as actionTypes from './actionTypes';
export const submitTemplate = (template, redirect)=>{
  return{
    type: actionTypes.INITIATE_TEMPLATE_CREATION,
    template,
    redirect
  }
}
export const getTemplates = ()=>{
  return{
    type: actionTypes.INITIATE_GET_TEMPLATES,
  }
}
export const setTemplates = (data)=>{
  return{
    type: actionTypes.SET_TEMPLATES,
    payload: data
  }
}