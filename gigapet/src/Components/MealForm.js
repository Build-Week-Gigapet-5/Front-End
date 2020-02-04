import React, { useEffect, useState } from 'react';
import NavAfterLog from './NavAfterLog';

function MealForm(){
    function formatDate(date) {
        var dateForInput = new Date(date),
            month = '' + (dateForInput.getMonth() + 1),
            day = '' + dateForInput.getDate(),
            year = dateForInput.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }
    return(
<div>
        <NavAfterLog />
        <form className="MealFormStyle">
            <input className="test" type="date" min="01/01/2020" max={formatDate(new Date())}/>
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
        </div>
    )
}

export default MealForm;
