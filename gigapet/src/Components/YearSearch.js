import React, { useState, useEffect } from 'react';
import axios from "axios";

function YearSearch(){
    const [data, setData] = useState([]);
    const [inputv, setInput] = useState("");
    const [searchAnswer, setSearchAnswer] = useState([""]);
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


            const ChangeTxt = (event) =>{
                setInput(event.target.value)
                console.log(searchAnswer)
            }

            function Change(event) {
            event.prevent.default();
            let result = data.filter(x =>{
            return x.date.split("-")[0].includes(inputv)})
            setSearchAnswer(result)
        }
            return(
            <div>
                <form>
                <input onChange={ChangeTxt} type="text" placeholder="Enter a year" value={inputv} />
                <button onSubmit={Change}>Submit</button>
                </form>
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