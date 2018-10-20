import setAuthToken from './setAuthToken';
import isEmpty from './is-empty';
import jwt_decode from 'jwt-decode';

import {setUser, removeUser} from '../store/actions/auth';

export const restoreAuth = (store, success, fail)=>{
  if (!isEmpty(localStorage.getItem('currentUser'))) {
    let token = localStorage.getItem('currentUser');
    let tokenDecode = null;
    try {
      tokenDecode = jwt_decode(localStorage.getItem('currentUser'));
    } catch (error) {
      tokenDecode = null;
    }
    if (tokenDecode) {
      setAuthToken(token);
      store.dispatch(setUser(tokenDecode));
      if(success){
        success();
      }
    } else {
      localStorage.removeItem('currentUser');
      store.dispatch(removeUser());
      if(fail){
        fail();
      }
    }
  } else {
    store.dispatch(removeUser());
    if(fail){
      fail();
    }
  }
}