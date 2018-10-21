import axios from 'axios';
import {put} from 'redux-saga/effects';
export function* createObjects(action){
  try{
    console.log(action.data.template, action.data.objects);
    const response = yield axios.post(`http://localhost:5000/api/objects/add/${action.data.template}`, action.data.objects);
    action.redirect();
  }catch(err){
    console.log(err);
  }
}