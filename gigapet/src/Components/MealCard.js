import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';



function MealCard(props) {

    const [data, setData] = useState([]);
    console.log(props.match.params.id)
    useEffect(() => {
        axios
            .get(`https://gigapetfive.herokuapp.com/auth/food/4`, {
                headers: { Authorization: localStorage.getItem("token") }
            })
            .then(res => {
                setData(res.data);
                console.log(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    console.log(data)

    return (
        // data.map(food => {
        //     return (
        //         <div className="FoodForm">
        //             <div key={food.id}>
        //                 <h1>{food.food_name}</h1>
        //                 <h2>{food.qty}</h2>
        //                 <h2>{food.date.split("T")[0]}</h2>
        //                 <h3>{food.category_id}</h3>
        //                 <button id={food.id}>Edit</button>
        //                 <button id={food.id}>Delete</button>
        //             </div>
        //         </div>
        //     )
        // }
        // )
        <div>
            <p>hello</p>
        </div>
    )
}

export default MealCard;