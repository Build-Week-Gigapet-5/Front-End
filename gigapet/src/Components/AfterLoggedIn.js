import React from "react"
import NavAfterLog from "./NavAfterLog";

const AfterLoggedIn = (props) => {
    return (
        <div>
            <NavAfterLog />
<h1>{`welcome ${localStorage.getItem("name")}`}</h1>
        </div>
    )
}

export default AfterLoggedIn;