import React,{useState} from 'react';
import '../App.css';
import { format } from 'date-fns';
import { enGB } from "date-fns/locale";
import { DatePickerCalendar, DateRangePickerCalendar, START_DATE } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import changeArrow from '../assests/images/up-downArrow.svg';
import roundTrip from '../assests/images/roundTrip.svg';import economyIN from '../assests/images/greyEconomy.svg';
import economy from '../assests/images/activeEconomy.svg';
import premiumEconomy from '../assests/images/activePremiumEconomy.svg';
import business from '../assests/images/activeBusiness.svg';

var today = new Date();
var yesterday = new Date(today.setDate(today.getDate() - 1));


function TicketBookingFinal() {
    const [select,setSelect]=useState("");
    const [startDateString, setStartDateString] = useState("16 Feb 2021");
    const [endDateString, setEndDateString] = useState("20 Feb 2021");
  return (
      <div>
            <div className="TicketBookingBox" style={{ gridTemplateRows: "1fr auto 1fr auto 1fr"}}>
                <div className="destRow">
                    <div className="from">
                        <p className="fromTo">
                            From
                        </p>
                        <p className="city">BOM</p>
                        <p className="fromTo">
                            Mumbai
                        </p>
                    </div>
                    <img className="roundTripLogo" src={roundTrip} />
                    <div className="dest">
                    <p className="fromTo">
                            To
                        </p>
                        <p className="city">AMD</p>
                        <p className="fromTo">
                            Ahemdabad
                        </p>
                    </div>
                </div>
                <div className="divider"/>
                <div className="datePicker">
                    <div className="departure">
                    <p className="fromTo">
                            Departure
                    </p>
                    <div>
                        <><p className="flightDate1">{startDateString.substr(0,3)}</p><p className="flightDate2">{startDateString.substring(3,11)}</p></>
                    </div>
                    </div>
                    <div className="arrowBox"><img src={changeArrow}/></div>
                    <div className="return">
                    <p className="fromTo">
                            Return
                    </p>
                    <div>
                        <><p className="flightDate1">{endDateString.substr(0,3)}</p>
                        <p className="flightDate2">{endDateString.substring(3,11)}</p></>
                    </div> 
                    </div>
                    <div>
                    </div>
                </div>
                <div className="divider"/>
                <div className="seatDetails">
                    <div style={{gridColumn:"1/2",textAlign:"center"}}>
                        <p className="fromTo">
                            Passenger
                        </p>
                        <p className="city" style={{fontWeight:"bolder"}}>1</p>
                        <p style={{font:"10px medium", fontFamily:"Roboto"}}>Adult(s)</p>
                    </div>
                    <div style={{gridColumn:"3/4",textAlign:"center"}}>
                        <p className="fromTo">
                            Class
                        </p>
                        <img className="economySeatLogo" src={economy} style={{justifySelf:"center",alignSelf:"center"}}/>
                        <p style={{font:"10px medium", fontFamily:"Roboto"}}>Economy</p>
                    </div>
                </div>
            </div>
            <div className="listButtonBox Booking" style={{width:"100%"}}>
                        <button className="proceedButton" style={{font:"13px Bold", fontFamily:"Roboto"}}>Confirm</button>
                        <button className="backButton" style={{font:"13px Regular", fontFamily:"Roboto"}}>Modify</button>
            </div>
        </div>
  );
}

export default TicketBookingFinal;
