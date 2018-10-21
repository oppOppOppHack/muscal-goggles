import axios from 'axios';
import {put} from 'redux-saga/effects';
export function* createObjects(action){
  try{
    const response = yield axios(`http://localhost:5000/api/objects/${action.data.template}`, action.data.objects);
  }catch(err){
    console.log(err);
  }
}