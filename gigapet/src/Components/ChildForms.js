import React, {useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom';
import logo from './img/logo.png';
import axios from "axios"

function ChildForm(props){

  const [childInfo, setChildInfo] = useState({
	"child_name": "",
	"child_age": '',
	"users_id": localStorage.getItem("id")  // users_id is the Parents id
})

console.log(childInfo)

const handleChange = (e) => {
    setChildInfo({
        ...childInfo,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = (e) => {
    e.preventDefault()
    
    axios
    .post('https://gigapetfive.herokuapp.com/auth/users/addChild', childInfo, {
        headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
        console.log(res)
        props.history.replace('/')
    })
    .catch(error => console.log(error))
  }

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

<form className="ChildForm" onSubmit={handleSubmit}>
    <p>Name:</p> <input type="text" placeholder="Name" name="child_name" value={childInfo.child_name} onChange={handleChange} ></input>
    <p>Age:</p> <input type="number" placeholder="Age" name="child_age" value={childInfo.child_age} onChange={handleChange}></input>
    <button className="SubmitButton">Submit</button>
</form>

</div>
    )
}

export default ChildForm;