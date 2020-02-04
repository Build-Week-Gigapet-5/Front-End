import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

function HomePage(props) {

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
                localStorage.setItem("name", res.data.user.name)
                props.history.push('/home');
                console.log("response =", res.data)
            })
            .catch(err => console.log("Error:", err))
    }

    console.log("credentials", credentials)

    return (
        <div>
            <div className="Login">
                <form onSubmit={login}>
                    <input type="e-mail" placeholder="Enter e-mail here" name="email" value={credentials.email} onChange={handleChange} />
                    <input type="password" placeholder="Enter password here" name="password" value={credentials.password} onChange={handleChange} />
                    <button>Login</button>
                </form>
                <Link to="/Register">Register</Link>
                <Link to="/">Home Page</Link>
                <Link to="Gigapet">Giga-Pet</Link>
                <Link to="/MealForm">Meal Form</Link>
                <Link to="/ChildForm"> Child Form</Link>
            </div>



        </div>
    )
}

export default HomePage;