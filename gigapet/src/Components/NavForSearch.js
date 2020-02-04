import React from 'react';
import {Link} from 'react-router-dom';

function NavForSearch(){
return(
    <div>
    <Link to="Giga-Pet/Days">Days</Link>
    <Link to="Giga-Pet/Months">Months</Link>
    <Link to="Giga-Pet/Years">Years</Link>
    </div>
)
}

export default NavForSearch;