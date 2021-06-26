import React, { useState } from 'react';
import '../App.css';
import menu from '../assests/images/menu.svg';
import homeActive from '../assests/images/homeActive.svg';
import settings from '../assests/images/settings.svg';
import BG2 from '../assests/images/BG2.svg';
import microphone from '../assests/images/microphone.svg';
import sendLogo from '../assests/images/airplaneWhite.svg';
import {useSelector} from 'react-redux';
import debounce from "lodash/debounce";
import Ticketlist from '../Components/TicketListNew';
import TypingBubble from '../Components/Typing Bubble';
import filterIcon from '../assests/images/filterIcon.svg';
import { useHistory} from "react-router-dom";

function AllTicketList() {
    const history = useHistory();
    const Service = useSelector(state => state.todo);
    const flights = [{
        flightId:"UK-969",
        flightName:"Indigo",
        flight:"UK-970Indigo",
        from:"Mumbai",
        to:"Ahemdabad",
        departureTime:"08:45",
        arrivalTime:"18:15",
        travelTime:"09hrs 30mins",
        stops:true,
        stopsname:['New Delhi'],
        price:"12,000"
      },
      {
        flightId:"UK-969",
        flightName:"Indigo",
        flight:"UK-970Indigo",
        from:"Mumbai",
        to:"Ahemdabad",
        departureTime:"08:45",
        arrivalTime:"18:15",
        travelTime:"09hrs 30mins",
        stops:true,
        stopsname:['New Delhi'],
        price:"12,000"
      },
      {
        flightId:"UK-969",
        flightName:"Indigo",
        flight:"UK-970Indigo",
        from:"Mumbai",
        to:"Ahemdabad",
        departureTime:"08:45",
        arrivalTime:"18:15",
        travelTime:"09hrs 30mins",
        stops:true,
        stopsname:['New Delhi'],
        price:"12,000"
      },
      {
        flightId:"UK-969",
        flightName:"Indigo",
        flight:"UK-970Indigo",
        from:"Mumbai",
        to:"Ahemdabad",
        departureTime:"08:45",
        arrivalTime:"18:15",
        travelTime:"09hrs 30mins",
        stops:true,
        stopsname:['New Delhi'],
        price:"12,000"
      },
      {
        flightId:"UK-969",
        flightName:"Indigo",
        flight:"UK-970Indigo",
        from:"Mumbai",
        to:"Ahemdabad",
        departureTime:"08:45",
        arrivalTime:"18:15",
        travelTime:"09hrs 30mins",
        stops:true,
        stopsname:['New Delhi'],
        price:"12,000"
      }
    ];
    const [search, setSearch]=useState("");
    const [filter, setFilter]=useState("");
    const [message, setMessage]=useState("");
    const [isTyping, setIsTyping]=useState(false)
    const handleTyping =debounce(() => {
        setIsTyping(false);
      },5000);
    const handleChange=(e)=>{
        setMessage(e.target.value);
        setIsTyping(true);
        handleTyping()
    }
    const handleChangeSearch=(e)=>{
        setSearch(e.target.value);
    }
    const handleChangeFilter=(e)=>{
        setFilter(e.target.value);
    }
  return (
    <div className="container">
        <div className="landBG">
            <img src={BG2} style={{width:"122vw"}}/>
        </div>
        <div className="landOPAC"/>
        <div className="landContentBox">
            <div className="topBar">
                {/* <img src={menu} className="menu"/> */}
                <div className="topBarBox">
                    <div className="buttonBox">
                        <img src={homeActive} className='home' onClick={()=>alert('hi')}/>
                        {/* <img src={settings} className='settings'/> */}
                    </div>
                </div>
            </div>
            <div className="chatBox" style={{height:"88.3vh",marginTop:"1.4631vh", padding:"0"}}>
                <div className="scrollBox" 
                style={{height:"80.6798vh",
                        paddingLeft:"9.6vw",
                        display:"grid",
                        gridTemplateColumns:"1fr 1fr",
                        gridTemplateRows:"4.6798vh 63.5467vh 8.866vh",
                        paddingTop:"1.4631vh"
                }}>
                    <div className="searchAndSortBox">
                        <input
                        className="flightSearch"
                        placeholder="Search"
                        type="text"
                        value={search}
                        onChange={handleChangeSearch}/>
                        <div className="sortAndFilter">
                            <select name="cars" id="cars" className="flightSort" defaultValue={`Sort: ${filter}`} onChange={handleChangeFilter}>
                                <option value="By Price">By Price</option>
                                <option value="By A-Z">By A-Z</option>
                                <option value="By Z-A">By Z-A</option>
                            </select>
                            <div className="filterIcon">
                                <img src={filterIcon} style={{width:"4.533vw", margin:"30% 27%"}}/>
                            </div>
                        </div>
                    </div>
                    <div className="flightBox" style={{borderRadius:"0",boxShadow:"none"}}>
                        <div className="allFlightList" style={{gridRow:"2/3",borderRadius:"0",boxShadow:"none"}}>
                            <ul>
                                <Ticketlist className="item" list={flights}/>
                            </ul>
                        </div>
                    </div>
                    <div className="listButtonBox">
                        <button className="proceedButton">Proceed</button>
                        <button className="backButton" onClick={()=>history.push("/chat")}>Back to chat</button>
                    </div>
                    {isTyping && <TypingBubble/>}
                    
                </div>
            </div>
            <div className="typeLayout">
                        <input className="inputBox" 
                        type="text" 
                        value={message} 
                        placeholder="Type your message..."
                        onChange={handleChange}
                        />
                        <div className="recordButton">
                            <img src={microphone} className="recordLogo"/>
                        </div>
                        <div className="sendButton">
                            <img src={sendLogo} className="sendLogo"/>
                        </div>
                    </div>
        </div>
    </div>
  );
}

export default AllTicketList;
