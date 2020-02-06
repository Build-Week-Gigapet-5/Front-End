import React, { useEffect, useState } from "react"
import { withRouter } from 'react-router-dom';
import axios from "axios"
import NavAfterLog from "./NavAfterLog"

const Children = (props) => {
    const [children, setChildren] = useState([])

    useEffect(() => {
        axios
            .get('https://gigapetfive.herokuapp.com/auth/children', {
                headers: { Authorization: localStorage.getItem("token") }
            })
            .then(res => {
                setChildren(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const clickHandler = (e) => {
        e.preventDefault()

        localStorage.setItem("child_id", e.target.id)
        props.history.push("/Mealform")
    }
    console.log(children)
    return (

        <div>
            <NavAfterLog />
            <h2>Children</h2>
            {children.map(item => {
                return <div>
                    <p>{item.child_name}</p>
                    <p>{item.child_age}</p>
                    <button key={item.id} id={item.id} onClick={clickHandler}>Select Child</button>
                </div>
            })}
        </div>
    )
}

export default withRouter(Children);