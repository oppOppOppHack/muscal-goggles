import * as actionTypes from '../actions/actionTypes';

export const templateInitialState = {
  templates: null
};
const reducer = (state = templateInitialState, action)=>{
  switch(action.type){
    case actionTypes.SET_TEMPLATES:
      return {
        ...state,
        templates: action.payload
      }
    default: 
      return state
  }
}
export default reducer;