import React,{useEffect, useState} from 'react';
import '../App.css';
import economyIN from '../assests/images/greyEconomy.svg';
import economy from '../assests/images/activeEconomy.svg';
import premiumEconomyIN from '../assests/images/greyPremiumEconomy.svg';
import premiumEconomy from '../assests/images/activePremiumEconomy.svg';
import businessIN from '../assests/images/greyBusiness.svg';
import business from '../assests/images/activeBusiness.svg';

function SeatSelection() {
    const[select, setSelect]=useState("");
    return (
        <div className="seatBox">
            <div className="seatOption" style={select === "economy" ? {color:"#ff0100"}:{}} onClick={()=>setSelect("economy")}>
                <img className="economySeatLogo" src={select === "economy" ? economy : economyIN}/>
                <p>Economy</p>
            </div>
            <div className="seatOption" style={select === "premiumeconomy" ? {color:"#ff0100"}:{}} onClick={()=>setSelect("premiumeconomy")}>
                <img className="premiumEconomySeatLogo" src={select === "premiumeconomy" ? premiumEconomy : premiumEconomyIN}/>
                <p>Premium Economy</p>
            </div>
            <div className="seatOption"  style={select === "business" ? {color:"#ff0100"}:{}} onClick={()=>setSelect("business")}>
                <img className="businessSeatLogo" src={select === "business" ? business : businessIN}/>
                <p>Economy</p>
            </div>
        </div>
  );
}

export default SeatSelection;
