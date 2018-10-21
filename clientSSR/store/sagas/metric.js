import axios from 'axios';
import {put} from 'redux-saga-effects';
import * as actionTypes from '../actions/actionTypes';
import {setMetrics} from '../actions/metrics';
export function* getMetrics(action){
  try{
    yield axios.get(`http://localhost:5000/api/reports/generate/${action.event}`);
    const response = yield axios.get(`http://localhost:5000/api/reports/metric/${action.event}`);
    yield put(setMetrics(response.data.metrics));
  }catch(err){
    console.log(err);
  }
}