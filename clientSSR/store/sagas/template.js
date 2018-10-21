import axios from 'axios';
import {put} from 'redux-saga/effects';
import {setTemplates} from '../actions/template';
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
export function* getTemplates(){
  try{
    const response = yield axios.get("http://localhost:5000/api/templates");
    if(response.data.success){
      console.log("Got Templates")
      yield put(setTemplates(response.data.templates));
    }
  }catch(err){
    console.log("some error")
  }
}