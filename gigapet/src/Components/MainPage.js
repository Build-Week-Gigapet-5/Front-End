import React, { Children } from 'react';
import NavAfterLog from './NavAfterLog';
import MealCards from './MealCards';
import DaysSearch from './DaysSearch';
import MonthsSearch from './MonthsSearch';
import GigaPetFunctionality from './GigaPetFunctionality';

function MainPage(){
    return(
        <div>
     <NavAfterLog />
     <GigaPetFunctionality />
     <DaysSearch />
     <MonthsSearch />
     <MealCards />
     {/* <Children /> */}
        </div>

    )
}

export default MainPage;

