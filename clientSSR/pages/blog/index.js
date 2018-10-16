import React, {Component} from 'react';
import {setUser} from '../../store/actions/auth';
import {setTest} from '../../store/actions/test';
import {connect}from 'react-redux';
import Link from 'next/link';
class blogPage extends Component{
  state = {
    title: ""
  }
  static async getInitialProps(context){
    const { store, isServer, query } = context.ctx;
    if(isServer){
      console.log("server");
    }else{
      console.log("not server")
    }
    console.log(query);
    return {query, isServer};
  }
  componentDidMount(){
    this.props.dispatch(setTest("cccc"));
  }
  componentWillMount(){
  }
  render(){
    console.log(this.props.query.params.title);
    console.log(this.props.isServer);
    return (
      <div>Blog Page with ID: {this.props.query.params.title}<Link href = "/"><a>Hello</a></Link></div>
    )
  }
}
export default connect(state=>state)(blogPage);