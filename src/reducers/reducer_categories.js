import { FETCH_CATEGORIES } from '../actions/index';
import _ from 'lodash';

export default function(state=[], action) { 
  // console.log('Action received', action);

  switch (action.type) {
    case FETCH_CATEGORIES:
      return _.keys( action.payload.data );
      break;
  }
  return state;
}
