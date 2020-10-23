import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: 'Anna', age: 30 },
      { name: 'Colman', age: 31 },
      { name: 'Bailey', age: 5 }

    ]
  }
  render() {
    return (
      <div className="App">
      <h1>Hi I'm a react app</h1>
      <p>This is really working</p>
      <button>Switch Name</button>
      <Person name= {this.state.persons[0].name} age= {this.state.persons[0].age}/>
      <Person name= {this.state.persons[1].name} age= {this.state.persons[1].age}/>
      <Person name= {this.state.persons[2].name} age= {this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Did this work?'))
  }
}

export default App;
