import React from 'react';
import NavAfterLog from './NavAfterLog';
import MealCards from './MealCards';
import DaysSearch from './DaysSearch';

function MainPage(){
    return(
        <div>
     <NavAfterLog />
     <DaysSearch />
     <MealCards />
        </div>

    )
}

export default MainPage;