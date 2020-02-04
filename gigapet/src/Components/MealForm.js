import React from 'react';

function MealForm(){


    return(


        <form className="MealFormStyle">
            <input type="date"/>
            <select type="dropdown">
                <option value="protein">Protein</option>
                <option value="fruits and veggies">Fruits and Vegetables</option>
                <option value="grain">Grain</option>
                <option value="snacks">Snacks</option> 
            </select>
            <input Type="Qty" placeholder="Enter Serving Size"></input>
            <button>Submit</button>
        </form>

    )
}

export default MealForm;