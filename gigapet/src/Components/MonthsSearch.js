import React, { useState, useEffect } from 'react';
import axios from "axios";

function MonthsSearch(){
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
            const ChangeTxt = event =>{
                setInput(event.target.value)
            }
            function Change(event){
            event.prevent.default();
            let result = data.filter(x =>x.date.split("-")[1] === month);
            setSearchAnswer(result)
            let month = "";

            const monthObject ={
                January: "01",
                February: "02",
                March: "03",
                April: "04",
                May: "05",
                June: "06",
                July: "07",
                August: "08",
                September: "09",
                October: "10",
                November: "11",
                December: "12"
            }

           switch(inputv){
               case "January":
                 month = monthObject.January;
                 break;
               case "February":
                 month = monthObject.February;
                 break;
               case "March":
                 month = monthObject.March;
                 break;
               case "April":
                 month = monthObject.April;
                 break;
               case "May":            
                 month = monthObject.May;
                 break;
               case "June":
                 month = monthObject.June;
                 break;
               case "July":
                 month = monthObject.July;
                 break;
               case "August":
                 month = monthObject.August;
                 break;
               case "September":
                 month = monthObject.September;
                 break;
               case "October":
                 month = monthObject.October;
                 break;
               case "November":
                 month = monthObject.November;
                 break;
               case "December":
                 month = monthObject.December;
                 break;
               default:
                   month = "";
           }    
                

        }
        console.log("this is", searchAnswer);
            return (
            <div>


                <form>
                <input onChange={ChangeTxt} type="text" placeholder="Enter a Month Ex: January" value={inputv}/> 
                <button onSubmit={Change} type='submit'>Submit</button>
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