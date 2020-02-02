import React from 'react';
import { Link } from 'react-router-dom'

function NavBeforeLog(){
    return(
                <div>
            <div className="Login">
            <form>
                    <input type="e-mail" placeholder="Enter e-mail here"/>
                    <input type="password" placeholder="Enter password here"/>
                    <button>Login</button>
                    </form>
                <Link to="/Register">Register</Link>
                <Link to="/">Home Page</Link>
                <Link to="/Gigapet">Giga-Pet</Link>
                <Link to="/MealForm">Meal Form</Link>

            </div>
        </div>
    )
}

export default NavBeforeLog;