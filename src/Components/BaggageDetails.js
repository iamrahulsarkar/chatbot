import React,{useEffect, useState} from 'react';
import '../App.css';

function BaggageDetails(props){
    const [select,setSelect]=useState("");
    return(
        <div className="menuList">
            {props.data.map((weight,i)=>{
                return(<div className="menuListMini">
                    <div className="mealBox">{weight["Weight"]}</div>
                    <div className="mealPriceBox">{weight.Size}</div>
                </div>)
                })
            }
        </div>
    )
}
export default BaggageDetails;