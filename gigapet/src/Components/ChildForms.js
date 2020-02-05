import React, {useState} from 'react'; 
import NavAfterLog from './NavAfterLog';
import axios from "axios"

function ChildForm(props){

   const [childInfo, setChildInfo] = useState(
    {
        "child_name": "",
        "child_age": "",
        "users_id": localStorage.getItem("id")
    }
   )

   const handleChange = (e) => {
    setChildInfo({
        ...childInfo,
        [e.target.name]: e.target.value
    })
}

  const addChild = (e) => {
      e.preventDefault()

      axios
      .post("https://gigapetfive.herokuapp.com/auth/users/addChild", childInfo, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(res => {
         props.history.push("/")
      })
      .catch(err => console.log("Child add Error =", err))
  }

    return(
      
<div className="ChildFormContainer">
        <NavAfterLog /> 
<div className="ChildFormP">
    <p>
        Please enter your childs Name and Age to create a new Gigapet!
    </p>
</div>

<form className="ChildForm" onSubmit={addChild}>
    <p>Name:</p> <input type="text" placeholder="Name" name='child_name' value={childInfo.child_name} onChange={handleChange}></input>
    <p>Age:</p> <input type="number" placeholder="Age" name='child_age' value={childInfo.child_age} onChange={handleChange}></input>
    <button className="SubmitButton">Submit</button>
</form>

</div>
    )
}

export default ChildForm;

