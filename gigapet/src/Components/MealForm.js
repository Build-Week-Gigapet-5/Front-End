import React, { useEffect, useState } from 'react';
import SS1 from './img/Servingsize1.png';
import SS2 from './img/Servingsize2.png';
import SS3 from './img/Servingsize3.png';
import SS4 from './img/Servingsize4.png';
import SS5 from './img/Servingsize5.png';

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