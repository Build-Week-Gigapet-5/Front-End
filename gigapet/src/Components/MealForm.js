import React from 'react';
import NavAfterLog from './NavAfterLog';
import MealCards from './MealCards';

function MealForm(){

    return(
<div>
        <NavAfterLog />
        <form className="MealFormStyle">
            <input type="string" placeholder="yyyy-mm-dd"/>
            <input type="number" placeholder="Enter Serving Size"></input>
            <select type="dropdown">
                <option>Please choose an option</option>
                <option category_id="1">Vegetables</option>
                <option category_id="2">Fruits</option>
                <option category_id="3">Protein</option>
                <option category_id="4">Grains</option>              
                <option category_id="5">Dairy</option>
                <option category_id="6">Snacks</option> 
            </select>
            <button>Submit</button>
        </form>
        <MealCards />
        </div>
    )
}

export default MealForm;