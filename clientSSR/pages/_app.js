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
