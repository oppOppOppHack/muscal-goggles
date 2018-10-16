import * as actionTypes from '../actions/actionTypes';
export const testInitialState = {
  testValue: null
}
const reducer = (state = testInitialState, action)=>{
  switch(action.type){
    case actionTypes.TEST:
      return {
        ...state,
        testValue: action.payload
      };
    default:
      return state;
  }
}
export default reducer;