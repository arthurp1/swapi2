import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategoryItems } from '../actions/fetch_category_items'; // need this one?????
import { fetchItemDetail } from '../actions/fetch_item_detail';

class ItemList extends Component {

  createItemList() {
    return this.props.categoryItems.map((categoryItem) => {
      return (
        <li key={categoryItem} onClick={() => this.props.fetchItemDetail(categoryItem)}>
          {categoryItem}
        </li>
      );
    });
  }

  render() {
    // if(!this.props.categories) {
    //   return <h2>Select Category<h2>
    // }
    return (
      <ul>
        {this.createItemList()}
      </ul>
    );
  }
}

function mapStateToProps(state) { // takes a piece of the app store (defined in as the argument) and passes it into your container as a prop
  return { categoryItems: state.categoryItems };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchItemDetail: fetchItemDetail }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList); // connect function makes sure that the component gets the new state everytime
//state is updated in the store and thus making it a container
