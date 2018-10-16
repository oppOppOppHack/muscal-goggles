import * as actionTypes from '../actions/actionTypes';
export const errorInitialState = {
  login: {},
  register: {}
};
const reducer = (state = errorInitialState, action)=>{
  switch(action.type){
    case actionTypes.LOGIN_USER_ERROR:
      return {
        register: {...state.register},
        login: action.payload
        
      }
    case actionTypes.REMOVE_LOGIN_USER_ERROR:
      return{
        register: {...state.register},
        login: {}
      }
    case actionTypes.REGISTER_USER_ERROR:
      return{
        register: action.payload,
        login: {...state.login}
      }
    case actionTypes.REGISTER_USER:
      return{
        register: {},
        login: {...state.login}
      }
    default:
      return state;
  }
}
export default reducer;