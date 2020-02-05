import React from 'react';
import { Link } from 'react-router-dom'
import {logo} from './img/logo.png';
                    

function NavBeforeLog() {
	return (
		<div className="NavBeforeLogContainer">
			<Link to="/Register">Register</Link>
			<Link to="/">Home Page</Link>
			<Link to="/Gigapet">Giga-Pet</Link>
			<Link to="/MealForm">Meal Form</Link>
            <Link to="/ChildForm">Child Form</Link>
            <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
			<div className="Login">
				<form>
                   <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
					<input type="e-mail" placeholder="Enter e-mail here" />
					<input type="password" placeholder="Enter password here" />
					<button>Login</button>
				</form>
			</div>
		</div>
	);
}

export default NavBeforeLog;
