import React, { Component } from 'react';
import './App.css';
import MoodChanger from './MoodChanger';
import List from './List';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MoodChanger />
      </div>
    );
  }
}

export default App;


//Build a component called MoodChanger that cycles through an array of mood by clicking a button
//Bulid a child component that takes a mood as props and renders an ascii emoji based on those props 