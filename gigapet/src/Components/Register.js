import React, {useState} from 'react';
import {slideInDown} from 'react-animations';
import styled, { keyframes } from 'styled-components';
import {Link} from 'react-router-dom';
import Steak from './img/Steak.png';
import Lettuce from './img/Lettuce.png';
import Bread from './img/Bread.png';
import Carrot from './img/Carrot.png';
import Broccoli from './img/Broccoli.png';
import logo from './img/logo.png';
import axios from "axios"

function Register(props){
 
    const DropDown = styled.div`animation: 10s ${keyframes `${slideInDown}`} infinite`;

    const [registerCredentials, setRegisterCredentials] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setRegisterCredentials({
            ...registerCredentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
      e.preventDefault()
       
      
      axios
      .post('https://gigapetfive.herokuapp.com/auth/register', registerCredentials)
      .then(res => {
          console.log(res)
          props.history.replace('/')
      })
      .catch(error => console.log(error))
    }
console.log(registerCredentials)

    return(

        <div>
             <div>
        <div className="Login">
                <form>
                    <input type="e-mail" placeholder="Enter e-mail here"/>
                    <input type="password" placeholder="Enter password here"/>
                    <button>Login</button>
                </form>
                <Link to="/Register">Register</Link>
                <Link to="/">Home Page</Link>
                <Link to="Gigapet">Giga-Pet</Link>
                <Link to="/MealForm">Meal Form</Link>
        </div>




    </div>
    <div className="logo">
        <img src={logo} alt="logo" width="300px"/>
    </div>
        <div className="DroppingDown">
            <DropDown><img src={Steak} alt='Steak' width="250px"/></DropDown>
            <DropDown><img src={Lettuce} alt='Lettuce'width="250px"/></DropDown>
            <DropDown><img src={Bread} alt='Bread' width="250px"/></DropDown>
            <DropDown><img src={Broccoli} alt='Broccoli' width="250px"/></DropDown>
            <DropDown><img src={Carrot} alt='Carrot' width="250px"/></DropDown>
        </div>
<form onSubmit={handleSubmit}>
    <div className="RegForm">
        <div className="FormStyle">
            
            <p>Name:</p> <input type="text" placeholder="Enter a name" name="name" value={registerCredentials.name} onChange={handleChange} ></input>
            <p>E-mail:</p> <input type="email" placeholder="Enter your e-mail" name="email" value={registerCredentials.email} onChange={handleChange}></input>
            <p>Password:</p> <input type="password" placeholder="Enter your password" name="password" value={registerCredentials.password} onChange={handleChange}></input>
            <button className="btn">Submit</button>
            
        </div>
    </div>
</form>
</div>
    )

}

export default Register;