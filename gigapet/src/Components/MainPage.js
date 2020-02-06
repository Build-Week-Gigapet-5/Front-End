import React, { Children } from 'react';
import NavAfterLog from './NavAfterLog';
import MealCards from './MealCards';
import DaysSearch from './DaysSearch';
import MonthsSearch from './MonthsSearch';
import YearSearch from './YearSearch';

function MainPage(){
    return(
        <div>
     <NavAfterLog />
     <DaysSearch />
     <MonthsSearch />
     <YearSearch />
     <MealCards />
     {/* <Children /> */}
        </div>

    )
}

export default MainPage;

