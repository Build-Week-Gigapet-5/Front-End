import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { logo } from './img/logo.png';
import axios from "axios"


function NavBeforeLog(props) {

	const [credentials, setCredentials] = useState({
		email: "",
		password: ""
	})

	const handleChange = (e) => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value
		})
	}

	const login = (e) => {
		e.preventDefault()

		axios
			.post(`https://gigapetfive.herokuapp.com/auth/login`, credentials)
			.then(res => {
				localStorage.setItem("token", res.data.token)
				localStorage.setItem("id", res.data.user.id)
				setCredentials({
					email: "",
					password: ""
				})
				// props.history.push('/');
				console.log("response =", res.data)
			})
			.catch(err => console.log("Error:", err))
	}


	return (
		<div className="NavBeforeLogContainer">
			<Link to="/Register">Register</Link>
			<Link to="/">Home Page</Link>
			<Link to="/Gigapet">Giga-Pet</Link>
			<Link to="/MealForm">Meal Form</Link>
			<Link to="/ChildForm">Child Form</Link>
			<div className="logo">
				<img src={logo} alt="logo" />
			</div>
			<div className="Login">
				<form onSubmit={login}>
					<div className="logo">
						<img src={logo} alt="logo" />
					</div>
					<input type="e-mail" placeholder="Enter e-mail here" name="email" value={credentials.email} onChange={handleChange} />
					<input type="password" placeholder="Enter password here" name="password" value={credentials.password} onChange={handleChange} />
					<button>Login</button>
				</form>
			</div>
		</div>
	);
}

export default NavBeforeLog;
