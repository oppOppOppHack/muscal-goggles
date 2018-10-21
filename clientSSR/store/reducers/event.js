import * as actionTypes from '../actions/actionTypes';

export const eventInitialState = {
  events: null
};
const reducer = (state = eventInitialState, action) => {
  switch (action.type) {
    case actionTypes.SET_EVENTS:
      return {
        ...state,
        events: action.payload
      }
    default:
      return state
  }
}
export default reducer;