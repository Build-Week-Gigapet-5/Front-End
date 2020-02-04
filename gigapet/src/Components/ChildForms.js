import React from 'react'; 
import NavAfterLog from './NavAfterLog';

function ChildForm(){

    return(
      
<div className="ChildFormContainer">

        <NavAfterLog /> 
       

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