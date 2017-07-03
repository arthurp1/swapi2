import { FETCH_ITEM_DETAIL } from '../actions/fetch_item_detail';
import _ from 'lodash';

export default function(state = [], action) {
  // console.log('Action received', action);

  switch (action.type) {
    case FETCH_ITEM_DETAIL:
      return _.keys( action.payload.data );
      break;
  }
  return state;
}
