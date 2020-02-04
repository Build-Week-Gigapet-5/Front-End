import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';

function MealCards(){
const [data, setData] = useState([]);
useEffect(()=> {
axios
    .get(`https://gigapetfive.herokuapp.com/auth/children/:id/food`)
    .then(res => {
        setData(res.data);
    })
    .catch(err => {
        console.log(err);
    })},[data]);
return(
    data.map(food =>{
        return(
    <div>
        <div key= {food.id}>
            <h1>{food.food_name}</h1>
            <h2>{food.qty}</h2>
            <h2>{food.date}</h2>
            <h3>{food.category_id}</h3>
        </div>
    </div>
        )
    }
    )
    )
}

export default MealCards;