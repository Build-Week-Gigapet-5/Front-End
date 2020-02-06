import React, { useState, useEffect } from 'react';
import axios from "axios";

function MonthsSearch(){
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

            const ChangeTxt = (event) =>{
                setInput(event.target.value)
            }

            function Change(event){
            event.preventDefault();
 
           switch(inputv){
               case "January":
                 setInput("01");
                 break;
               case "February":
                setInput("02");
                 break;
               case "March":
                setInput("03");
                 break;
               case "April":
                setInput("04");
                 break;
               case "May":            
               setInput("05");
                 break;
               case "June":
                setInput("06");
                 break;
               case "July":
                setInput("07");
                 break;
               case "August":
                setInput("08");
                 break;
               case "September":
                setInput("09");
                 break;
               case "October":
                setInput("10");
                 break;
               case "November":
                setInput("11");
                 break;
               case "December":
                setInput("12");
                 break;
               default:
                  break;
           }
            let result = data.filter(x =>{return(x.date.split("-")[1] === inputv)});
            setSearchAnswer(result)
           }    
                
        console.log("this is", searchAnswer);
            return (
            <div>


                <form>
                <input onChange={ChangeTxt} type="text" placeholder="Enter a Month Ex: January" value={inputv}/> 
                <button onClick={Change} type='submit'>Submit</button>
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
export default MonthsSearch;