import React, {Component} from 'react';
class HomePage extends Component{
  static async getInitialProps(context){
    
  }
}
const homePage = (props)=>(
  <div>
    <h1>Hello How Are U?</h1>
  </div>
);
homePage.getInitialProps = async function(context){
  console.log(context);
  return {query: context.query};
}
export default homePage;