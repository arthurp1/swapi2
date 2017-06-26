import React, { Component } from 'react';
import TextInput from './TextInput';
import TextDisplay from './TextDisplay';

class App extends Component {

  render() {
    return (
      <div>
        <h1>This is a Starwars App</h1>
        <TextInput/>
      </div>
    )
  }

}

export default App
