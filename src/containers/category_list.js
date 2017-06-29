import React, { Component } from 'react';
import { connect } from 'react-redux';

class CategoryList extends Component {

  renderCategories(data) {
    const temps = cityData.list.map(weather => weather.main.temp)

  }

  render() {
    return (
      <div>
        <h1>Categories</h1>
        <ul>
          {this.props.categories.map(this.renderCategories)}
        </ul>
      </div>
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
