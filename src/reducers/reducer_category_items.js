import { FETCH_CATEGORY_ITEMS, category } from '../actions/fetch_category_items';
import _ from 'lodash';

export default function(state=[], action) {
  console.log('Action received', action);

  switch (action.type) {
    case FETCH_CATEGORY_ITEMS:
    console.log(" this one..")
    console.log(action.payload)
      return _.values( action.payload.data.results )
      // if(category === 'films') {
      //   return _.values( action.payload.data.results[5].title );
      // }
      // else {
      //   return _.values( action.payload.data.results[5].name );
      // }

      break;
  }
  return state;
}
