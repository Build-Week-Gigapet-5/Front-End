import React from 'react';

import {Form, Input, FormGroup, Label} from 'reactstrap';

function Register(){
    return(
<Form>
    <FormGroup>
        <Label for="Your E-mail">E-mail</Label>
        <Input type="email" name="email" placeholder="Enter your e-mail"></Input>
    </FormGroup>
</Form>

import {slideInDown} from 'react-animations';
import styled, { keyframes } from 'styled-components';
import {Link} from 'react-router-dom';
import Steak from './img/Steak.png';
import Lettuce from './img/Lettuce.png';
import Bread from './img/Bread.png';
import Carrot from './img/Carrot.png';
import Broccoli from './img/Broccoli.png';
import logo from './img/logo.png';

function Register(){
 
    const DropDown = styled.div`animation: 10s ${keyframes `${slideInDown}`} infinite`;

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
<form>
    <div className="RegForm">
        <div className="FormStyle">
            <p>Name:</p> <input type="text" placeholder="Enter a name"></input>
            <p>E-mail:</p> <input type="email" placeholder="Enter your e-mail"></input>
            <p>Password:</p> <input type="password" placeholder="Enter your password"></input>
            <button className="btn">Submit</button>
        </div>
    </div>
</form>
</div>

    )

}

export default Register;