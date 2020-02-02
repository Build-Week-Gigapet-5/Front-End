import React from 'react';
import { Link } from 'react-router-dom';

function NavAfterLog(){
return(
    <div className="Login">
    <Link to="/">Home Page</Link>
    <Link to="/Gigapet">Giga-Pet</Link>
    <Link to="/MealForm">Meal Form</Link>
    </div>
)
}

export default NavAfterLog;