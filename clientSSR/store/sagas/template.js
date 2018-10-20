import axios from 'axios';
import {put} from 'redux-saga/effects';
export function* submitTemplate(action){
  try{
    const response = yield axios.post("http://localhost:5000/api/templates", action.template);
    if(response.data.success){
      console.log("Submitted");
      action.redirect();
    }
  }catch(err){
    console.log("submit error")
  }
}