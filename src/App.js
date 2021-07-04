import './App.css';
import { Component } from 'react';
import {CardList} from './components/card-list/card-list.components';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
        devils: [],
        searchField : ''
    }
  }  

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ devils:users }))
  }
  
  render() {
      const {devils, searchField } = this.state;
      const filteredDevils = devils.filter(devil => devil.name.toLowerCase().includes(searchField.toLowerCase()))
     
      this.handleChange = e => {
        this.setState({searchField:e.target.value})
      }

      return ( 
      <div className="App" >
              <h1>Devils Den</h1>
              <SearchBox 
              placeholder = 'search devil'
              handleChange={this.handleChange }
              />
              <CardList devils = {filteredDevils} />
      </div>
    )
  }
}
export default App;
