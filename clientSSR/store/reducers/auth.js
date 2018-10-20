import * as actionTypes from '../actions/actionTypes';

export const authInitialState = {
  user: null
};
const reducer = (state = authInitialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload
      }
    case actionTypes.REMOVE_USER:
      return {
        ...state,
        user: null
      }
    default:
      return state;
  }
}
export default reducer;