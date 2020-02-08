import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Moment from 'moment';

function MealCards() {
    const [data, setData] = useState([]);
    const [editing, SetEditing] = useState(false)
    const [editForm, setEditForm] = useState(
        
       {
            id: '',
            food_name: "",
            qty: '',
            date: "",
            children_id: '',
            category_id: ''
        } 
    
    )
        
    

    useEffect(() => {
        axios
            .get(`https://gigapetfive.herokuapp.com/auth/food`, {
                headers: { Authorization: localStorage.getItem("token") }
            })
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    
   const handleChange = (e) => {
    setEditForm({
        ...editForm,
        [e.target.name]: e.target.value
    })
}

    const handleEdit = async e => {
        e.preventDefault();
        
        await axios
            .put(`https://gigapetfive.herokuapp.com/auth/food/${editForm.id}`, editForm, {
                headers: { Authorization: localStorage.getItem("token") }
            })
            .then(res => {
                const updatedItem = res.data;
                const newItems = data.map(item => {
                  if (item.id !== updatedItem.id) {
                    return item
                  }
                  return updatedItem;
                })
                setData(newItems)
                
            })
            .catch(error => console.log(error))
        // SetEditing(true);
        console.log(editForm)
 
        window.location.reload()
    }

    const handleDelete = (food) => {
        

        console.log("deleteData", food)
        axios
            .delete(`https://gigapetfive.herokuapp.com/auth/food/${food.id}`,  {
                headers: { Authorization: localStorage.getItem("token") }
            })
            .then(res => {
                console.log("delete", res)
                const updatedItemId = res.data;
                const newItems = data.filter(item => {
                    return item.id !== updatedItemId
                })
                setData(newItems)
            })
            .catch(err => console.log(err))

            window.location.reload()
    }
    console.log("editform", editForm)
  console.log("data", data)
    if (editing === false) {
        return (
            data.map(food => {
                return (
                    <div className="FoodForm">
                        <div key={food.id}>
                            <Link to={`/mealcard/${food.id}`}>Expand</Link>
                            <h1>{food.food_name}</h1>
                            <h2>{food.qty}</h2>
                            <h2>{food.date.split("T")[0]}</h2>
                            <h3>{food.category_id}</h3>
                            <button id={food.id} onClick={() => {
                              setEditForm(food)
                              SetEditing(true)
                              console.log("edit", editForm)
                            }}>Edit</button>
                            <button id={food.id} onClick={e => {
                                e.preventDefault()
                                handleDelete(food)
                            }}>Delete</button>
                        </div>
                    </div>
                )
            }
            )
        )
    } else {
        return (
            <div>
                <form onSubmit={handleEdit}>
                    <label>Name: <input type="text" name="food_name" value={editForm.food_name} onChange={handleChange} /> </label>
                    <label>Quantity: <input type="number" name="qty" value={editForm.qty} onChange={handleChange}/> </label>
                    <label>Name: <input type="string" name="date" value={editForm.date} onChange={handleChange} /> </label>
                    <button>Edit</button>
                </form>
            </div>
        )
    }

}

export default MealCards;