import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home'
import Footer from './components/Footer';



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Home/>
      </div>
    );
  }
}

export default App;
