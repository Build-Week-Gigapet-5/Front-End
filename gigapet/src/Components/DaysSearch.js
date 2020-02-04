import React, { useState, useEffect } from 'react';
import axios from "axios";
import MealCards from "./MealCards";

function DaysSearch(){
    const [data, setData] = useState([]);
    const [inputv, setInput] = useState("");
    const [searchAnswer, setSearchAnswer] = useState([]);
useEffect(()=> {
    axios
    .get('https://gigapetfive.herokuapp.com/auth/children/1/food')
    .then(res=>{
        setData(res.data);
    })
    .catch(err=>{
        console.log("You've recieved", err);
    })
}, [])

useEffect(()=>{
    let answer = data.filter(item =>{
        return item.date.includes(inputv);
        })
        setSearchAnswer(answer);

},[inputv])
        const Change = event => {
            setInput(event.target.value)
          }
        return(
            <div>
            <input onChange={Change} type="string" placeholder="YYYY-MM-DD" value={inputv} />
            {searchAnswer.map(food =>{
                return(
                    <div className="FoodForm">
                    <div key= {food.id}>
                        <h1>{food.food_name}</h1>
                        <h2>{food.qty}</h2>
                        <h2>{food.date}</h2>
                        <h3>{food.category_id}</h3>
                        <button>Delete</button>
                    </div>
                </div>
                )
            })
            }
            </div>
        )
}
export default DaysSearch;