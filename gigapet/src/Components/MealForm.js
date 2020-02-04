import React, {useState} from 'react';
import NavAfterLog from './NavAfterLog';
import MealCards from './MealCards';
import axios from 'axios';

function MealForm(){
 const [category, setCategory] = useState([]);
    axios

        .get('https://gigapetfive.herokuapp.com/auth/food/categories')
        .then(res =>{
            setCategory(res.data);
        })

    return(
<div>
        <NavAfterLog />
        <form className="MealFormStyle">
            <input type="string" placeholder="yyyy-mm-dd"/>
            <input type="number" placeholder="Enter Serving Size"></input>
            <select type="dropdown">
                {category.map(item =>{
                    return(<option  key={item.id} category_id={item.id}>{item.category_name}
                    
                    </option>)})}
            </select>
            <button>Submit</button>
            </form>
        </div>
    )
}

export default MealForm;