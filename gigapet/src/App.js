import React from 'react';
import Register from './Components/Register';
import HomePage from './Components/HomePage';
import MainPage from './Components/MainPage';
import MealForm from './Components/MealForm';
import { Route } from 'react-router-dom';
import ChildForm from './Components/ChildForms';

import './App.css';

function App() {
  return (
    <div>
    <Route exact path="/Register" component={Register} />
    <Route exact path="/" component={HomePage} />
    <Route exact path="/Gigapet" component={MainPage} />
    <Route exact path="/MealForm" component={MealForm} />
    <Route exact path="/ChildForm" component={ChildForm} />
    </div>
  );
}

export default App;
