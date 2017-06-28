import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; // Makes sure the action flow through all the reducers

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return(
        <li
        key={book.title}
        onClick={() => this.props.selectBook(book)} 
        className="List-group-item">{book.title}></li>
      );
    });
  }

  render() {
    return (
      <ul className="List-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) { // This function is the glue between react and redux
  // whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books
  };
}

// Anything returne from this funciotn will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available as a
// prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
