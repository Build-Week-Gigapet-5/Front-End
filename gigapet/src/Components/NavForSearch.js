import React from 'react';
import {Link} from 'react-router-dom';

function NavForSearch(){
return(
    <div>
    <Link exact to="Giga-Pet/Days">Days</Link>
    <Link exact to="Giga-Pet/Months">Months</Link>
    <Link exact to="Giga-Pet/Years">Years</Link>
    </div>
)
}

export default NavForSearch;