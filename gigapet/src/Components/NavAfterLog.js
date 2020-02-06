import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo.png';

function NavAfterLog(){
return(
    <div className="NavAfterLogContainer">
<div className="logo">
        <img src={logo} alt="logo" width="300px"/>
    </div>
    <div className="Login">
    <Link to="/">Home Page</Link>
    <Link to="/Gigapet">Giga-Pet</Link>
    <Link to="/Children">Meal Form</Link>
    <Link to="/ChildForm">Child Form</Link>
    </div>

    </div>
)
}

export default NavAfterLog;