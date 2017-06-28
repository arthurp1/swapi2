import React, { Component } from 'react';
import axios from 'axios'
import { Button } from 'react-bootstrap'
// import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import TextInput from './components/TextInput';
import TextDisplay from './components/TextDisplay';
import CategoryItem from './components/CategoryItem';
import ListView from './components/ListView';
const api = 'http://swapi.co/api/'

class App extends Component {
  constructor() {
    super()
    this.state = { categories: [] }
  }
  componentDidMount() {
    let that = this
    axios.get('http://swapi.co/api/')
    .then(function(response) {
        const categories = Object.keys(response.data)
        that.setState({categories: categories })
      })
  }

  render() {
    const { categories } = this.state
    const list = categories.map((category) => {
      <CategoryItem key={category} item={category} />
      })
    return (
      <div>
        <h1>This is a Starwars App</h1>
        <div>
          {list}
        </div>
      </div>
    )
  }


}

export default App
