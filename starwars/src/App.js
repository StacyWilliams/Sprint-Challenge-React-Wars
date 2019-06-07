import React from 'react';
import './App.css'
import CharacterList from './components/CharacterList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
  }
}
  

componentDidMount() {
  this.getCharacters('https://swapi.co/api/people');
};

getCharacters = URL => {
  fetch(URL)
    .then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({ starwarsChars: data.results });
    })
    .catch(err => {
      throw new Error(err);
    });
};

render() {
  return (
    <div className="container">
      <h1 className="header">React Wars Choose Wisely</h1>
      <h2 className="header">Fear is the path to the Dark Sidee</h2>
      <CharacterList starwarsChars ={this.state.starwarsChars} />
    </div>
  );
};
}
export default App;
