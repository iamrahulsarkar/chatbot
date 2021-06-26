import React,{useEffect, useState} from 'react';
import '../App.css';
import image from '../assests/images/AirAsia.svg';

const arr=[{meal:"Ajwaini Lachcha Paratha with Palak Paneer & Mirch Bajji", price:"Rs.350"},
            {meal:"Grilled Basa Fish with Sauteed Vegetables",price:"Rs.350"},
            {meal:"Grilled Basa Fish with Sauteed Vegetables",price:"Rs.350"},
            {meal:"Grilled Basa Fish with Sauteed Vegetables",price:"Rs.350"},
            {meal:"Grilled Basa Fish with Sauteed Vegetables",price:"Rs.350"},
            {meal:"Grilled Basa Fish with Sauteed Vegetables",price:"Rs.350"},
            {meal:"Grilled Basa Fish with Sauteed Vegetables",price:"Rs.350"},
            {meal:"Grilled Basa Fish with Sauteed Vegetables",price:"Rs.350"},
            {meal:"Grilled Basa Fish with Sauteed Vegetables",price:"Rs.350"},
            {meal:"Grilled Basa Fish with Sauteed Vegetables",price:"Rs.350"},
            {meal:"Grilled Basa Fish with Sauteed Vegetables",price:"Rs.350"},
            {meal:"Grilled Basa Fish with Sauteed Vegetables",price:"Rs.350"},
            {meal:"Grilled Basa Fish with Sauteed Vegetables",price:"Rs.350"},
            {meal:"Grilled Basa Fish with Sauteed Vegetables",price:"Rs.350"},
            {meal:"Grilled Basa Fish with Sauteed Vegetables",price:"Rs.350"}];
function MenuList(props){
    const [select,setSelect]=useState("");
    return(
        <div className="menuList">
            {arr.map((menu,i)=>{
                return(<div className="menuListMini">
                    {i === 0 && <div className="flightMenuName">Air Asia</div>}
                    {i === 0 && <img src={image} className="flightMenuLogo"/>}
                    <div className="mealBox">{menu.meal}</div>
                    <div className="mealPriceBox">{menu.price}</div>
                </div>)
                })
            }
        </div>
    )
}
export default MenuList;