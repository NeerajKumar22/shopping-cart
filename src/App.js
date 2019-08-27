import React from 'react';
import {CardList} from "./components/card-list/card-list.component"
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      monsters : []

    }
  }

  // Life cycle method

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users") // Fetching from this url
    .then(response => response.json())                  // taking a response and converting into the json format
    .then(users => this.setState({monsters : users}))   // take the user and set monsters to that array of users

  }
  
  render(){
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />  
      </div>
    );
  }
}

export default App;
