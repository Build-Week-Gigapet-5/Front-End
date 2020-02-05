import React from 'react';
import Register from './Components/Register';
import HomePage from './Components/HomePage';
import MainPage from './Components/MainPage';
import MealForm from './Components/MealForm';
import {Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
    <Route path="/Register" component={Register} />
    <Route exact path="/" component={HomePage} />
    <Route path="/Gigapet" component={MainPage} />
    <Route path="/MealForm" component={MealForm} />
 
    </div>
  );
}

export default App;
