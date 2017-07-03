import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategories } from '../actions/index';

class ShowCategories extends Component {
  constructor(props) { // constructor initializes state
    super(props);

    this.state = { categories: [] };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault(); // tells browser not to submit the form by default

    this.props.fetchCategories();
    // this.setState({ categories: [] });
  }

  render() {
    return (
      <div>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary" onClick={this.onSubmit}>Show Categories</button>
        </span>
      </div>
    );
  }
}

console.log('Hier gaat het goed')

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCategories }, dispatch);
}

export default connect(null, mapDispatchToProps)(ShowCategories);
