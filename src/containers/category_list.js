import React, { Component } from 'react';
import { connect } from 'react-redux';

class CategoryList extends Component {
  createList() {
    return this.props.categories.map((category => {
      return (
        <li key={category}>{category}</li>
      )
    }));
  }

  render() {
    return (
      <ul>
        {this.createList}
      </ul>
    )
  }


  // render() {
  //   const { categories } = this.state
  //   const list = categories.map((category) => {
  //     <CategoryItem key={category} item={category} />
  //     })
  //   return (
  //     <div>
  //       <h1>This is a Starwars App</h1>
  //       <div>
  //         {list}
  //       </div>
  //     </div>
  //   )
  // }

}

function mapStateToProps({ categories }) {
  return { categories }; // same as: { categories: categories }
}

export default connect(mapStateToProps)(CategoryList);
