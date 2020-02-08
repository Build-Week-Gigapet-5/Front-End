import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBeforeLog from './NavBeforeLog';
import popTheBunny from './img/popTheBunny.png';
import popThePuppy from './img/popThePuppy.png';
import popTheKitty from './img/popTheKitty'

function HomePage(props) {

    

    return (
        <div>
           <NavBeforeLog /> 
           {popTheBunny}
           {popTheKitty}
           {popThePuppy}
        </div>
    )
    }
export default HomePage;