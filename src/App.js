import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "cahyo", age: "23" },
      { name: "afif", age: "27" },
      { name: "adi", age: "29" }
    ],
    // otherState : 'some other value'
  };

  switchNameHandler = (newName) => {
    // console.log('Was Clicked')
    this.setState({
      persons: [
        { name: newName, age: "23" },
        { name: "afif", age: "27" },
        { name: "adi sinambela", age: "30" }
      ]
    });
  };

  nameChangeHandler = (e) =>{
    this.setState({
      persons: [
        { name: 'Max', age: "23" },
        { name:  e.target.value, age: "27" },
        { name: "adi sinambela", age: "29" }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Cahyono !!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Cahyo')}
          changed={this.nameChangeHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
