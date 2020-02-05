import React, { useState, useEffect } from 'react';
import axios from "axios";

function MonthsSearch(){
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

}, [data])
            const Change = event => {
            setInput(event.target.value)
            setSearchAnswer(data.filter(x =>x.date.split("-")[1] === inputv ))
            }
            return(
            <div>

                <select onChange={Change} placeholder="Pick a month">
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>               
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>             
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
export default MonthsSearch;