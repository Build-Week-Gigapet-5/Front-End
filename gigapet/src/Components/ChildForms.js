import React from 'react'; 
import {Link} from 'react-router-dom';
import logo from './img/logo.png';

function ChildForm(){

    return(
<div className="ChildFormContainer">

<div className="Nav">
    
     <div className="logo">
        <img src={logo} alt="logo" width="30px"/>
    </div>
                <Link to="/Register">Register</Link>
                <Link to="/">Home Page</Link>
                <Link to="Gigapet">Giga-Pet</Link>
                <Link to="/MealForm">Meal Form</Link> 
                <form>
                    <input type="e-mail" placeholder="Enter e-mail here"/>
                    <input type="password" placeholder="Enter password here"/>
                    <button>Login</button>
                </form>
        </div>

<div className="ChildFormP">
    <p>
        Please enter your childs Name and Age to create a new Gigapet!
    </p>
</div>

<form className="ChildForm">
    <p>Name:</p> <input type="text" placeholder="Name"></input>
    <p>Age:</p> <input type="number" placeholder="Age"></input>
    <button className="SubmitButton">Submit</button>
</form>

</div>
    )
}

export default ChildForm;