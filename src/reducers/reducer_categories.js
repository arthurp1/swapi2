import { FETCH_CATEGORIES } from '../actions/index';
import _ from 'lodash';

export default function(state = null, action) { // OR state = []
  console.log('Action received', action);

  switch (action.type) {
  case FETCH_CATEGORIES:
    return _.keys([ action.payload.data ]); // OR with , ...state]
    console.log(action.payload.data)
  }
  return state;
  console.log(state);
}

console.log('Prima')
