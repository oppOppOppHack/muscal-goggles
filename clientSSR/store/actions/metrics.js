import * as actionTypes from './actionTypes';
export const getMetrics = (event)=>{
  return {
    type: actionTypes.INITITATE_EVENT_METRICS,
    event: event
  }
}
export const setMetrics = (data)=>{
  return {
    type: actionTypes.SET_EVENT_METRICS,
    payload: data
  }
}