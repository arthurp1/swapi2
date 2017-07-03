import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategoryItems } from '../actions/fetch_category_items';

class CategoryList extends Component {

  createList() {
    return this.props.categories.map((category) => {
      return (
        <li key={category} onClick={() => this.props.fetchCategoryItems(category)}>
          {category}
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
        {this.createList()}
      </ul>
    );
  }
}

function mapStateToProps(state) { // takes a piece of the app store (defined in as the argument) and passes it into your container as a prop
  return { categories: state.categories };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCategoryItems: fetchCategoryItems }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList); // connect function makes sure that the component gets the new state everytime
//state is updated in the store and thus making it a container
