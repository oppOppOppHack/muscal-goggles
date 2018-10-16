import React from "react";
import {Provider} from "react-redux";
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import withReduxSaga from 'next-redux-saga';

import makeStore from '../store/store';

import { MuiThemeProvider } from '@material-ui/core/styles';
import JssProvider from 'react-jss/lib/JssProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import getPageContext from '../src/getPageContext';

class MyApp extends App {
  constructor(props) {
    super(props);
    this.pageContext = getPageContext();
  }
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }
   
    
    return { pageProps }
  }
  componentDidMount(){
    //style MUI configuration
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    } 
  }
  render () {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        
          <JssProvider
            registry = {this.pageContext.sheetsRegistry}
            generateClassName = {this.pageContext.generateClassName}
          >
            <MuiThemeProvider 
              theme = {this.pageContext.theme}
              sheetsManager = {this.pageContext.sheetsManager}
            >
              <CssBaseline/>
              <Provider store={store}>
                <Component pageContext = {this.pageContext} {...pageProps} />
              </Provider>
            </MuiThemeProvider>
          </JssProvider>
      
      </Container>
    )
  }
}

export default withRedux(makeStore)(withReduxSaga({ async: true })(MyApp))