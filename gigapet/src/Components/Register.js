import React, {useState} from 'react';
import {slideInDown} from 'react-animations';
import styled, { keyframes } from 'styled-components';
import NavBeforeLog from './NavBeforeLog';
import Steak from './img/Steak.png';
import Bread from './img/Bread.png';
import Carrot from './img/Carrot.png';
import Broccoli from './img/Broccoli.png';
import logo from './img/logo.png';
import axios from "axios"

function Register(props){
 
    const DropDown = styled.div`animation: 10s ${keyframes `${slideInDown}`}`;

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

    return(

        <div>
             <div>
        <div className="Login">
        <NavBeforeLog />
        </div>




    </div>
    <div className="logo">
        <img src={logo} alt="logo" width="300px"/>
    </div>
        <div className="DroppingDown">
            <DropDown><img className="tooBigAt1700px" src={Steak} alt='Steak' width="100px" postion="absolute"/></DropDown>
            <DropDown><img className="tooBigAt1500px" src={Carrot} alt='Carrot' width="100px" postion="absolute"/></DropDown>
            <DropDown><img className="tooBigAt1300px" src={Bread} alt='Bread' width="100px" postion="absolute"/></DropDown>
            <DropDown><img className="tooBigAt1100px" src={Broccoli} alt='Broccoli' width="100px" postion="absolute"/></DropDown>
        </div>
<form onSubmit={handleSubmit}>
    <div className="RegForm">
        <div className="FormStyle">
            <p>Name:</p> <input type="text" placeholder="Enter a name" name="name" value={registerCredentials.name} onChange={handleChange}></input>
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