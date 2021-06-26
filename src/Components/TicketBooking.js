import React,{useState} from 'react';
import '../App.css';
import { format } from 'date-fns';
import { enGB } from "date-fns/locale";
import { DatePickerCalendar, DateRangePickerCalendar, START_DATE } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import changeArrow from '../assests/images/up-downArrow.svg';
import roundTrip from '../assests/images/roundTrip.svg';
import inactiveCalender from '../assests/images/inactiveCalender.svg';
import activeCalender from '../assests/images/activeCalender.svg';
import debounce from "lodash/debounce";

var today = new Date();
var yesterday = new Date(today.setDate(today.getDate() - 1));


function TicketBooking() {
    const [select,setSelect]=useState("");
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [startDateString, setStartDateString] = useState("");
    const [endDateString, setEndDateString] = useState("");
    const [showStartDate, setShowStartDate] = useState(false);
    const [showEndDate, setShowEndDate] = useState(false);
    const [focus, setFocus] = useState(START_DATE);
    const delayStartDate= debounce(()=>{setShowStartDate(false)},1000);
    const delayEndDate= debounce(()=>{setShowEndDate(false)},1000);
    const toggleStartDate=(date)=>{
        if(showStartDate){
            setStartDate(date);
            setStartDateString(format(date, 'dd MMM yyyy', { locale: enGB }))
            delayStartDate();
            console.log(startDateString)
        }
        if(!showStartDate){
        setShowStartDate(true);
    }
    }
    const toggleEndDate=(date)=>{
        if(showEndDate){
            console.log(date)
            if(date!==null){setEndDate(date)
            setEndDateString(format(date, 'dd MMM yyyy', { locale: enGB }))
            delayEndDate()}
        }
        if(!showEndDate){
            setShowEndDate(true)
        }
    }
    const handleFocusChange = newFocus => {
        setFocus(newFocus || START_DATE)
      }
  return (
    <div className="TicketBookingBox">
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
        <div className="flightOptions">
            <div className="flightOption" style={select === "OneWay" ? {background:"#ff0100",borderRadius:"25px",color:"white",width:"100%",height:"100%"}:{}} 
            onClick={()=>{
                setSelect("OneWay")
            }}>
                <p style={select === "OneWay" ? {justifySelf:"center",alignSelf:"center"}:{}}>One-Way</p>
            </div>
            <div className="flightOption" style={select === "MultiCity" ? {background:"#ff0100",borderRadius:"25px",color:"white",width:"100%",height:"100%"}:{}} 
            onClick={()=>{
                setSelect("MultiCity")
            }}>
                <p style={select === "MultiCity" ? {justifySelf:"center",alignSelf:"center"}:{}}>Multi-City</p>
            </div>
            <div className="flightOption" style={select === "RoundTrip" ? {background:"#ff0100",borderRadius:"25px",color:"white",width:"100%",height:"100%"}:{}} 
            onClick={()=>{
                setSelect("RoundTrip")
            }}>
                <p style={select === "RoundTrip" ? {justifySelf:"center",alignSelf:"center"}:{}}>Round Trip</p>
            </div>
        </div>
        {(!showStartDate && !showEndDate) && <div className="datePicker">
            <div className="departure">
            <p className="fromTo">
                    Departure
            </p>
            <div onClick={toggleStartDate}>{startDate !== undefined ? <><p className="flightDate1">{startDateString.substr(0,3)}</p><p className="flightDate2">{startDateString.substring(3,11)}</p></> : <img src={activeCalender} style={{margin:"6.5px"}}/>}</div>
            </div>
            <div className="arrowBox">{startDate !== undefined && endDate !== undefined ? <img src={changeArrow}/>:""}</div>
            <div className="return">
            <p className="fromTo">
                    Return
            </p>
            {startDate !== undefined ? <div onClick={toggleEndDate}>{endDate!== undefined ? <><p className="flightDate1">{endDateString.substr(0,3)}</p><p className="flightDate2">{endDateString.substring(3,11)}</p></> : <img src={activeCalender} style={{margin:"6.5px"}}/>}</div> : <div><img src={inactiveCalender} style={{margin:"6.5px"}}/></div>}
            </div>
            <div>
            </div>
        </div>}
        {showStartDate && 
        (<div style={{textAlign:"center",  marginTop:"1.3546798vh", borderRadius:"10px", paddingTop:"1vh", boxShadow: "0px 0px 15px #00000021"}}>
            <p style={{font:"13px medium", fontFamily:"Roboto", color:"#ff0100"}}>Departure Date</p>
            <hr/>
            <DatePickerCalendar className="calender" date={startDate} onDateChange={toggleStartDate} locale={enGB} />
        </div>)
        }
            {showEndDate && (
            <div style={{textAlign:"center", marginTop:"1.3546798vh",  borderRadius:"10px", paddingTop:"1vh", boxShadow: "0px 0px 15px #00000021"}}>
                <p style={{font:"13px medium", fontFamily:"Roboto", color:"#ff0100"}}>Return Date</p>
                <hr/>
                <DateRangePickerCalendar
                    className="calender"
                    startDate={startDate}
                    endDate={endDate}
                    focus={focus}
                    onEndDateChange={
                        toggleEndDate}
                    onFocusChange={handleFocusChange}
                    locale={enGB}
                />
            </div>) }
    </div>
  );
}

export default TicketBooking;
