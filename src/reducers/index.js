import { combineReducers } from 'redux'; // This allows all you reducers to combine
// them into one because the store is just ONE big JS object!
import CategoriesReducer from './reducer_categories';
import CategoryItemReducer from './reducer_category_items';
import ItemDetailReducer from './reducer_item_detail';

const rootReducer = combineReducers({
  categories: CategoriesReducer,
  categoryItems: CategoryItemReducer,
  itemDetail: ItemDetailReducer
});

export default rootReducer;
