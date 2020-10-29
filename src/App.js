import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { id:'1', name: 'Anna', age: 30 },
      { id:'2', name: 'Colman', age: 31 },
      { id:'3', name: 'Bailey', age: 5 }

    ],
    otherState: 'some other value',
     showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); EQUIVILANT to below method, below is more modern/up to date
    const persons= [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Anna', age: 30},
        { name: event.target.value, age: 31},
        { name: 'Bailey', age: 5}
      ]
    })

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow});
  }
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}/>
          })}
        </div> 
      );
    }
    return (
      <div className="App">
      <h1>Hi I'm a react app</h1>
      <p>This is really working</p>
      <button 
      style={style}
      onClick={this.togglePersonsHandler}>Toggle Persons</button>
      {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Did this work?'))
  }
}

export default App;
