import React from "react";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';

const makeStore = (initialState, options) => {
    const sagaMiddleware = createSagaMiddleware();
    //const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
    return store;
};
if (!isEmpty(localStorage.getItem('currentUser'))) {
  let token = localStorage.getItem('currentUser');
  //console.log(token);
  let tokenDecode = null;
  try {
    tokenDecode = jwt_decode(localStorage.getItem('currentUser'));
  } catch (error) {
    tokenDecode = null;
  }
  if (tokenDecode) {
    setAuthToken(token);

    store.dispatch({
      type: actionTypes.auth.SET_USER,
      payload: tokenDecode
    });
  } else {
    localStorage.removeItem('currentUser');
    store.dispatch({
      type: actionTypes.auth.REMOVE_USER
    });
  }
} else {
  store.dispatch({
    type: actionTypes.auth.REMOVE_USER
  });
}

class MyApp extends App {
 
    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return {pageProps};
    }
 
    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
 
}
 
export default withRedux(makeStore)(MyApp);
