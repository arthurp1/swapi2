import { FETCH_CATEGORY_ITEMS } from '../actions/fetch_category_items';
import _ from 'lodash';

export default function(state = [], action) {
  // console.log('Action received', action);

  switch (action.type) {
    case FETCH_CATEGORY_ITEMS:
      return ( action.payload.data );
      break;
  }
  return state;
}

// people: name
// films: title
// starships: name
// vehicles: name
// species: name
// planets: name
