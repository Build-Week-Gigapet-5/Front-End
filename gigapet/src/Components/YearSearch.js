import React, { useState, useEffect } from 'react';
import axios from "axios";

function YearSearch(){
    const [data, setData] = useState([]);
    const [inputv, setInput] = useState("");
    const [searchAnswer, setSearchAnswer] = useState([]);
useEffect(()=> {
    axios
    .get('https://gigapetfive.herokuapp.com/auth/children/1/food', {
        headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res=>{
        setData(res.data);
    })
    .catch(err=>{
        console.log("You've recieved", err);
    })

}, [])
            const Change = event => {
            setInput(event.target.value)
            setSearchAnswer(data.filter(x =>x.date.split("-")[0] === inputv ))
            }
            return(
            <div>

                <select onChange={Change} placeholder="Pick a year">
                <option value="2014">2015</option>
                <option value="2015">2016</option>
                <option value="2016">2017</option>
                <option value="2017">2018</option>
                <option value="2018">2019</option>
                <option value="2019">2020</option>            
            </select>
            {searchAnswer.map(food =>{
                return(
                    <div className="FoodForm">
                    <div key= {food.id}>
                        <h1>{food.food_name}</h1>
                        <h2>{food.qty}</h2>
                        <h2>{food.date}</h2>
                        <h3>{food.category_id}</h3>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
                )
            })
            }
            </div>
        )
}
export default YearSearch;