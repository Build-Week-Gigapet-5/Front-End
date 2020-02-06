import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import Moment from 'moment';

function MealCards() {
    const [data, setData] = useState([]);
    const [editing, SetEditing] = useState(false)
    const [editForm, setEditForm] = useState({})
        // {
        //     food_name: "",
        //     qty: '',
        //     date: "",
        //     children_id: '',
        //     category_id: ''
        // }
    

    useEffect(() => {
        axios
            .get(`https://gigapetfive.herokuapp.com/auth/children/1/food`, {
                headers: { Authorization: localStorage.getItem("token") }
            })
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const handleEdit = e => {
        e.preventDefault();

        axios
            .get(`https://gigapetfive.herokuapp.com/auth/food/${e.target.id}`, {
                headers: { Authorization: localStorage.getItem("token") }
            })
            .then(res => {
                console.log(res.data)
                setEditForm(res.data)
            })
            .catch(error => console.log(error))
        // SetEditing(true);
        console.log(editForm)
    }

    const handleDelete = (e) => {
        e.preventDefault()

        console.log(data.id)
        axios
            .delete(`https://gigapetfive.herokuapp.com/auth/food/${e.target.id}`, {
                headers: { Authorization: localStorage.getItem("token") }
            })
            .then(res => {
                console.log("delete", res.data)
                const updatedItemId = res.data;
                const newItems = data.filter(item => {
                    return item.id !== updatedItemId
                })
                setData(newItems)
            })
            .catch(err => console.log(err))
    }
    if (editing === false) {
        return (
            data.map(food => {
                return (
                    <div className="FoodForm">
                        <div key={food.id}>
                            <h1>{food.food_name}</h1>
                            <h2>{food.qty}</h2>
                            <h2>{food.date.split("T")[0]}</h2>
                            <h3>{food.category_id}</h3>
                            <button id={food.id} children_id={food.children_id} category_id={food.category_id} onClick={handleEdit}>Edit</button>
                            <button id={food.id} onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                )
            }
            )
        )
    } else {
        return (
            <div>
                <form>
                    <label>Name: <input /> </label>
                </form>
            </div>
        )
    }

}

export default MealCards;