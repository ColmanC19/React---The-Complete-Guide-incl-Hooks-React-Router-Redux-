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

  switchNameHandler = (newName) => {
    // this.state.persons[0].name = ; DONT DO This
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: 'Colman', age: 31 },
        { name: 'Bailey', age: 7 }
  
      ]
    })
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
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }
    return (
      <div className="App">
      <h1>Hi I'm a react app</h1>
      <p>This is really working</p>
      <button 
      style={style}
      onClick={() => this.switchNameHandler('ANNA!')}>Switch Name</button>
      <Person 
      name= {this.state.persons[0].name} 
      age= {this.state.persons[0].age}/>
      <Person 
      name= {this.state.persons[1].name} 
      age= {this.state.persons[1].age}
      click={this.switchNameHandler.bind(this, 'Anna!')} 
      changed={this.nameChangedHandler}
      >My Hobby is: Amateur Dog Handling
      </Person>
      <Person 
      name= {this.state.persons[2].name} 
      age= {this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Did this work?'))
  }
}

export default App;
