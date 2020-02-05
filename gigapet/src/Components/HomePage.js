import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import NavBeforeLog from './NavBeforeLog';

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
            .post(`https://gigapet5.herokuapp.com/auth/login`, credentials)
            .then(res => {
                localStorage.setItem("token", res.data.token)
                props.history.push('/');
                console.log("response =", res.data)
            })
            .catch(err => console.log("Error:", err))
    }

    console.log("credentials", credentials)

    return (
        <div>
           <NavBeforeLog /> 
        </div>
    )
    }
export default HomePage;