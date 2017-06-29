import React, { Component } from 'react';
import ShowCategories from '../containers/show_categories';
import CategoryList from '../containers/category_list';
//import ItemList from '../container/item_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>StarWars</h1>
        <ShowCategories />
        <CategoryList />
      </div>
    );
  }
}
