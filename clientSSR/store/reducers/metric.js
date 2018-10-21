import * as actionType from '../actions/actionTypes';
export const metricInitialState = {
  metrics: []
};
export default reducer = (state = metricInitialState, action)=>{
  switch(action.type){
    case actionType.SET_EVENT_METRICS:
      return {
        ...state,
        metrics: action.payload
      }
    default:
      return state;
  }
}