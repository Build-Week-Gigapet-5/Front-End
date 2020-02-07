import React, {useState, useEffect} from 'react';
import axios from "axios";
import standard from './img/standardBunny.png';
import fluffy from './img/fluffyBunny.png';
import pop from './img/popTheBunny.png';

function GigaPetFunctionality(){
     const [category, setCategory] = useState([]);

 useEffect(()=> {
     axios
         .get('https:gigapetfive.herokuapp.com/auth/children/1/food')
         .then(res =>{
             setCategory(res.data);
         })
         .catch(err =>{
            console.log("error:", err)
         })},[])

         let result = 0;
         category.map(item => result = result + item.category_points);
         if(result = 0){
             return;
         }
         else if(result <= 10 && result !== 0){
             return(
                 <div className="stylishGiga">
             <img src={standard} width= "300px" />
             </div>
             )
         }else if(result <= 20 && result <=! 10){
             return(
                <div className="stylishGiga">
             <img src={fluffy} width= "300px" />
             </div>
             )
         }else{
             return(
                <div  className="stylishGiga">
             <img src={pop} width= "300px" />
             </div>
             )
         }
        }


export default GigaPetFunctionality