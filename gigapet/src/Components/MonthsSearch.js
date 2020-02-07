import React, { useState, useEffect } from 'react';
import axios from "axios";

function MonthsSearch(){
    const [data, setData] = useState([]);
    const [inputv, setInput] = useState("");
    const [month, setMonth] = useState("")
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
                 setMonth("01");
                 break;
               case "February":
                setMonth("02");
                 break;
               case "March":
                setMonth("03");
                 break;
               case "April":
                setMonth("04");
                 break;
               case "May":            
               setMonth("05");
                 break;
               case "June":
                setMonth("06");
                 break;
               case "July":
                setMonth("07");
                 break;
               case "August":
                setMonth("08");
                 break;
               case "September":
                setMonth("09");
                 break;
               case "October":
                setMonth("10");
                 break;
               case "November":
                setMonth("11");
                 break;
               case "December":
                setMonth("12");
                 break;
               default:
                  break;
           }
            let result = data.filter(x =>{return(x.date.split("-")[1] === month)});
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
                        <h2>{food.date.split("T")[0]}</h2>
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