import React from 'react';
import NavAfterLog from './NavAfterLog';
import MealCards from './MealCards';
import DaysSearch from './DaysSearch';
import MonthsSearch from './MonthsSearch';

function MainPage(){
    return(
        <div>
     <NavAfterLog />
     <DaysSearch />
     <MonthsSearch />
     <MealCards />
        </div>

    )
}

export default MainPage;

