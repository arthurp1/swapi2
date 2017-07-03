import React, { Component } from 'react';
import ShowCategories from '../containers/show_categories';
import CategoryList from '../containers/category_list';
import ItemList from '../containers/item_list';
// import ItemDetail from '../container/item_detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>StarWars</h1>
        <ShowCategories />
        <CategoryList />
        <ItemList />
      </div>
    );
  }
}
