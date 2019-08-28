import React from 'react';
import { CardList } from "./components/card-list/card-list.component";
import './App.css';
import {SearchBox} from './components/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',

    }
  }
  

  // Life cycle method

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")      // Fetching from this url
      .then(response => response.json())                    // taking a response and converting into the json format
      .then(users => this.setState({ monsters: users }))   // take the user and set monsters to that array of users

  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value})
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name ? monster.name.toLowerCase().includes(searchField.toLowerCase()) : false;
    })
    return (
      <div className="App">
        <SearchBox
          placeholder="Search box"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
