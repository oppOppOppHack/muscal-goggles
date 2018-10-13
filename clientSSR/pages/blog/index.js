import React, {Component} from 'react';

class blogPage extends Component{
  static async getInitialProps(context){
    console.log(context);
    return {query: context.query};
  }
  render(){
    return (
      <div>Blog Page with ID:</div>
    )
  }
}
export default blogPage;