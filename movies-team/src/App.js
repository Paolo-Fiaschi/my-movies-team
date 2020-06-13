import React from 'react';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Movies from './components/Movies';
import Movie from './components/Movie';


function App() {
  return (
    <Router>
      <Navbar/>
      <Route exact path="/movies" component={Movies}/>
      <Route exact path="/movies/:id" component={Movie}/>
    </Router>
  );
}

export default App;
