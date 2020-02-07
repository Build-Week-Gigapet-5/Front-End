
import React, { useState, useEffect } from 'react';
import NavAfterLog from './NavAfterLog';
import axios from 'axios';
import styled from "styled-components"

const LegendKey = styled.p`
   color: black
`

function MealForm() {
    const [category, setCategory] = useState([]);
    const [foodData, setFoodData] = useState(

        {
            food_name: '',
            qty: '',
            date: "",
            children_id: localStorage.getItem('child_id'),
            category_id: ''
        }

    )
    console.log("foodData", foodData)

    useEffect(() => {
        axios
            .get('https://gigapetfive.herokuapp.com/auth/food/categories')
        .then(res => {
            setCategory(res.data);
        })
        .catch(err => console.log(err))
    }, [])

    const handleChange = (e) => {
        setFoodData({
            ...foodData,
            [e.target.name]: e.target.value
        })
    };

    const addFood = (e) => {
        e.preventDefault()

        axios
            .post("https://gigapetfive.herokuapp.com/auth/food/addFood", foodData, {
                headers: { Authorization: localStorage.getItem("token") }
            })
            .then(res => {
                console.log(res.data)
                setFoodData(
                    {
                        food_name: '',
                        qty: '',
                        date: '',
                        children_id: '',
                        category_id: ''
                    }
                )
            })
            .catch(err => console.log("Child add Error =", err))
    };

    console.log("categories", category)
    return (
        <div>
            <NavAfterLog />
            <form className="MealFormStyle" onSubmit={addFood}>
                <p>Name:</p><input type="text" placeholder="Name" name="food_name" value={foodData.food_name} onChange={handleChange}></input>
                <p>Year:</p><input type="string" placeholder="yyyy-mm-dd" name="date" value={foodData.date} onChange={handleChange} />
                <p>Serving Size:</p><input type="number" placeholder="Enter Serving Size" name="qty" value={foodData.qty} onChange={handleChange}></input>
                <p>Category:</p><input type="number" placeholder="Enter Category Number" name="category_id" value={foodData.category_id} onChange={handleChange}></input>
                <button>Submit</button>
                {category.map(item => {
                    return (<LegendKey key={item.id} category_id={item.id} name="category_id" value={foodData.category_id} onChange={handleChange}>{item.id} = {item.category_name}
                    </LegendKey>)
                })}
            </form>
        </div>
    )
}

export default MealForm;
