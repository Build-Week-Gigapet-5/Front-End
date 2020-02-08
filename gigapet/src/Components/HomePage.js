import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBeforeLog from './NavBeforeLog';
import popTheBunny from './img/popTheBunny.png';
import popThePuppy from './img/popThePuppy.png';
import popTheKitty from './img/popTheKitty.png';

function HomePage(props) {

    

    return (
        <div>
           <NavBeforeLog /> 
           <img src={popTheBunny} width="300px"/>
           <img src={popTheKitty} width="300px"/>
           <img src={popThePuppy} width="300px"/>
        </div>
    )
    }
export default HomePage;