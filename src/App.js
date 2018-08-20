import React, { Component } from 'react';
import './App.css';
import Header from'./header.js';
import MovieList from './MovieList.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <MovieList/>
      </div>
    );
  }
}

export default App;
