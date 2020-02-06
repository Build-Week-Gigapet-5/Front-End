import React from 'react';
import Register from './Components/Register';
import HomePage from './Components/HomePage';
import MainPage from './Components/MainPage';
import MealForm from './Components/MealForm';
import Children from "../src/Components/Children"
import ProtectedRoute from "../src/Components/ProtectedRoute"
import {Route} from 'react-router-dom';

import './App.css';
import ChildForm from './Components/ChildForms';

function App() {
  return (
    <div>
    <Route path="/Register" component={Register} />
    <Route exact path="/" component={HomePage} />
    <ProtectedRoute path="/Gigapet" component={MainPage} />
    <Route path="/MealForm" component={MealForm} />
    <Route path="/ChildForm" component={ChildForm} />
    <Route path="/Children" component={Children} />
    </div>
  );
}

export default App;
