import React,{Component} from 'react'
import { CardList } from './cardList/cardList';
import { SearchBox } from './SearchBox/SearchBox';
import './App.css';



export class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      SearchField: '',
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  onSearchChange = (event) => {
    this.setState({ SearchField: event.target.value });
  };
  render() {
    const { monsters, SearchField } = this.state;
    //smart way to write it monster,SearchField
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(SearchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Hub</h1>
        <SearchBox />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
