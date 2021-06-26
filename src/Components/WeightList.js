import React,{useEffect, useState} from 'react';
import '../App.css';

const arr=[{weight:5,price:3780},{weight:10,price:7580},{weight:15,price:11580},{weight:20,price:14580}];
function WeightList(props){
    const [select,setSelect]=useState("");
    return(
        <div className="menuList">
            {arr.map((weight,i)=>{
                return(<div className="menuListMini">
                    <div className="mealBox">{weight.weight} Kg Prepaid</div>
                    <div className="mealPriceBox">₹ {weight.price}</div>
                </div>)
                })
            }
        </div>
    )
}
export default WeightList;