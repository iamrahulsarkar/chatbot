import React, { useState, useRef } from 'react';
import '../App.css';
import menu from '../assests/images/menu.svg';
import homeActive from '../assests/images/homeActive.svg';
import settings from '../assests/images/settings.svg';
import BG2 from '../assests/images/BG2.svg';
import BG1 from '../assests/images/BG1.svg';
import Bot from '../assests/images/Bot.svg';
import microphone from '../assests/images/microphone.svg';
import sendLogo from '../assests/images/airplaneWhite.svg';
import User from '../assests/images/user.svg';
import BotChatBubble from '../Components/BotChatBubble';
import UserChatBubble from '../Components/UserChatBubble';
import {shallowEqual, useSelector} from 'react-redux';
import debounce from "lodash/debounce";
import TypingBubble from '../Components/Typing Bubble';
import whiteSeat from '../assests/images/whiteSeat.svg';
import whiteSetting from '../assests/images/whiteSetting.svg';
import whiteCancel from '../assests/images/whiteCancel.svg';
import whiteMeal from '../assests/images/whiteMeal.svg';
import whiteAirplane from '../assests/images/whiteAirplane.svg';
import whiteBaggage from '../assests/images/whiteBaggage.svg';
import whiteCheckIn from '../assests/images/whiteCheckIn.svg';
import whiteLogout from '../assests/images/whiteLogout.svg';
import whiteHelp from '../assests/images/whiteHelp.svg';
import whiteHome from '../assests/images/whiteHome.svg';
import activeHome from '../assests/images/activeHome.svg';
import activeSeat from '../assests/images/activeSeat.svg';
import activeSetting from '../assests/images/activeSetting.svg';
import activeCancel from '../assests/images/activeCancel.svg';
import activeMeal from '../assests/images/activeMeal.svg';
import activeAirplane from '../assests/images/activeAirplane.svg';
import activeBaggage from '../assests/images/activeBaggage.svg';
import activeCheckIn from '../assests/images/activeCheckIn.svg';
import activeLogout from '../assests/images/activeLogout.svg';
import activeHelp from '../assests/images/activeHelp.svg';
import logo from '../assests/images/landLOGO.svg';
import {userRequest} from '../helper/Backend.js';
import {useDispatch} from 'react-redux';
import {addMessage} from '../Redux/actions/messageArrayActions';

function ChatScreen() {
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    const [popUp, setpopUp]=useState(false);
    const messageStack = useSelector(state => state.messageArray.array, shallowEqual);
    const msglength = useSelector(state => state.messageArray.length, shallowEqual);
    const [msgLength, setMsgLength] = useState(messageStack.length);
    const opts=["Bookings","Cancellation","Seats","Meals","Web-Checkin","Baggage"]
    React.useEffect(()=>{
        console.log(messageStack,"messages");
        setMsgLength(messageStack.length)
        console.log(messageStack.length)
        if(messageStack.length % 2 !== 0){
            console.log()//need to initiate a reload here
        }
        scrollToBottom()
    },[msglength, popUp])
    const Service = useSelector(state => state.todo);
    const [message, setMessage]=useState("");
    const [isTyping, setIsTyping]=useState(false);
    const [showMenu, setShowMenu]=useState(false);
    const dispatch = useDispatch();
    const sendMessage=(e)=>{
        e.preventDefault()
        const msg = messageStack;
        if( message === "View Seat Map"){
            msg.unshift( {type:"User", message:message});
            dispatch(addMessage({
                array:msg,
                length:msg.length
            }));
          msg.unshift(
              { 
              type:"Bot", 
              opt:"13", 
              Blayout:false,
              message:"Here is your Seat Map",
              service: Service.service,
            });
          dispatch(addMessage({
              array:msg,
              length:msg.length
          })); 
          }
        else if(message !== "")
        {
        msg.unshift( {type:"User", message:message})
        if(message.toUpperCase().trim() === "GO BACK"){
            userRequest("Go Back to Initial options").then((data) => {
                if (data)if(data[0].custom === undefined) {
                    console.log(data[0].text, "err");
                              msg.unshift(
                                { type:"Bot", message:data[0].text});
                              dispatch(addMessage({
                                array:msg,
                                length:msg.length
                            }))
                } else {
                    const dataHandler = data[0].custom[0];
                  msg.unshift(
                    { 
                    type:"Bot", 
                    opt:dataHandler.type, 
                    Blayout:false, 
                    message:dataHandler.text, 
                    menu:dataHandler.buttons, 
                    Cancellation:dataHandler.Cancellation,
                    ReIssuance:dataHandler.Reissuance,
                    BaggageDetails: dataHandler["Baggage Data"],
                    seat_Tru_Standard : dataHandler["Tru Standard"],
                    seat_Tru_Classic : dataHandler["Tru Classic"],
                    seat_Tru_Max_Corporate : dataHandler["Tru Max Corporate"],
                    Fare: dataHandler.Fare,
                    Seat:dataHandler.Seat, 
                    contact:dataHandler.number,
                    service: Service.service,
                    });
                  dispatch(addMessage({
                    array:msg,
                    length:msg.length
                }))
                }
                setIsTyping(false);
                setMessage("");
              });
        }
        else{userRequest(message).then((data) => {
            if (data)if(data[0].custom === undefined) {
                console.log(data[0].text, "err");
                          msg.unshift(
                            { type:"Bot", message:data[0].text});
                          dispatch(addMessage({
                            array:msg,
                            length:msg.length
                        }))
            } else {
                const dataHandler = data[0].custom[0];
              msg.unshift(
                { 
                type:"Bot", 
                opt:dataHandler.type, 
                Blayout:false, 
                message:dataHandler.text, 
                menu:dataHandler.buttons, 
                Cancellation:dataHandler.Cancellation,
                ReIssuance:dataHandler.Reissuance,
                BaggageDetails: dataHandler["Baggage Data"],
                seat_Tru_Standard : dataHandler["Tru Standard"],
                seat_Tru_Classic : dataHandler["Tru Classic"],
                seat_Tru_Max_Corporate : dataHandler["Tru Max Corporate"],
                Fare: dataHandler.Fare,
                Seat:dataHandler.Seat,
                service: Service.service,
                });
              dispatch(addMessage({
                array:msg,
                length:msg.length
            }))
            }
            setIsTyping(false);
            setMessage("");
          });}
        }
    }
    const handleTyping =debounce(() => {
        setIsTyping(false);
      },5000);
    const handleChange=(e)=>{
        setMessage(e.target.value);
        setIsTyping(true);
        handleTyping()
    }
    const togglePopUp = async()=>{
        setpopUp(!popUp)
    }
    const goHome=(e)=>{
        e.preventDefault()
        const msg = messageStack;
              msg.unshift(
                {
                        type:"Bot", 
                        opt:"initialoptions", 
                        Blayout:false, 
                        message:[
                          "Hi! Welcome to TruJet. We are #Trulyfriendly.",
                          "I am your AI powered assistant and I am glad to assist you."
                      ], 
                        menu:[{
                          "payload": "FAQs",
                          "title": "FAQs"
                      }], 
                        Cancellation:undefined,
                        ReIssuance:undefined,
                        BaggageDetails: undefined,
                        seat_Tru_Standard : undefined,
                        seat_Tru_Classic : undefined,
                        seat_Tru_Max_Corporate : undefined,
                        Fare: undefined,
                        Seat:undefined
                });
              dispatch(addMessage({
                array:msg,
                length:msg.length
            }))
            setIsTyping(false);
            setMessage("");
    }
  return (
    <div className="container">
        {showMenu && <>
        <div className="landBG">
            <img src={BG1} style={{width:"100vw"}}/>
        </div>
        <div className="landOPAC"/>
        </>}
        {showMenu ? 
        (<>
        <div className="landContentBox" style={{height:"100vh",overflowY:"auto"}}>
            <div className="menuView">
                <div className="menuUser">
                    <img src={User} className="menuUserDP"/>
                    <div className="menuUserDetails">
                        <p style={{fontSize:"18px", fontWeight:"bold"}}>Avni Sharma</p>
                        <p>User Since: 23/02/12</p>
                    </div>
                </div>
                <div className="menuLine"/> 
                <div className="menuListT i">
                    <div className="opt" style={{background:"white", color:"#ff0100"}}>
                        <img src={homeActive}/>
                        <p>Home</p>
                    </div>
                    <div className="opt">
                        <img src={whiteSetting}/>
                        <p>Settings</p>
                    </div>
                </div>
                <div className="menuLine"/> 
                <div className="menuListT ii">
                    <div className="opt">
                        <img src={whiteAirplane}/>
                        <p>Bookings</p>
                    </div>
                    <div className="opt">
                        <img src={whiteCancel}/>
                        <p>Cancellation</p>
                    </div>
                    <div className="opt">
                        <img src={whiteSeat}/>
                        <p>Seats</p>
                    </div>
                    <div className="opt">
                        <img src={whiteMeal}/>
                        <p>Meal</p>
                    </div>
                    <div className="opt">
                        <img src={whiteCheckIn}/>
                        <p>Web Checkin</p>
                    </div>
                    <div className="opt">
                        <img src={whiteBaggage}/>
                        <p>Baggage</p>
                    </div>
                </div>
                <div className="menuLine"/> 
                <div className="menuListT i">
                    <div className="opt">
                        <img src={whiteHelp}/>
                        <p>Help</p>
                    </div>
                    <div className="opt">
                        <img src={whiteLogout}/>
                        <p>Logout</p>
                    </div>
                </div>
                <div className="menuLine"/> 
                <div className="menuLogoT">
                    <img src={logo} style={{width:"38.933vw", opacity:"0.4"}}/>
                </div>
            </div>
        </div></>) : 
        (<>
        <div className="landBG" 
        // style={popUp?{borderTop: '0.25vh solid rgb(100 97 97 / 27%)', borderBottom: '0.25vh solid rgb(100 97 97 / 27%)',borderRight: '0.5vw solid rgb(100 97 97 / 27%)',borderLeft: '0.5vw solid rgb(100 97 97 / 27%)'}:{}}
        >
            <img src={popUp?BG2:''} style={{width:"122vw"}}/>
        </div>
        <div className="landOPAC"/>
        {popUp?
        (<>
        <div className="landContentBox">
            <div className="topBar">
                {/* <img src={menu} className="menu" onClick={()=>{setShowMenu(true)}}/> */}
                <div className="topBarBox">
                    <div className="buttonBox">
                        <img src={homeActive} className='home' onClick={goHome}/>
                        {/* <img src={settings} className='settings'/> */}
                    </div>
                </div>
            </div>
            {/* {!(Service.selected) && (<div className="greet">
                <p style={{fontSize:"4.4334vh",fontFamily:"Roboto"}}>Hi, Anvi</p>
                <p>Good Evening. My name is Novigi, your personal assistant.</p>
            </div>)} */}
            <div className="chatBox" 
            style={popUp?{borderLeft: '0.5vw solid rgb(100 97 97 / 27%)', borderRight: '0.5vw solid rgb(100 97 97 / 27%)'}:{}}
            //  style={Service.selected ?{height:"88.3vh",marginTop:"1.4631vh"}:{}} temporarily changed due to ui issues
             >
                <div className="scrollBox"
                //  style={
                //         Service.selected ?{height:"80.6798vh"}:{} temporarily changed due to ui issues
                //         }
                        >
                            <div ref={messagesEndRef} />
                    {isTyping && <TypingBubble/>}
                    {Service.selected &&(<>
                    
                    <BotChatBubble opt="15" Blayout={true} message="Enter your booking and other details"/>  
                    
                    <BotChatBubble opt="0" Blayout={false} message="What else may I assist you with further?"/>
                    <BotChatBubble opt="13" Blayout={false} message="What else may I assist you with further?"/>
                    <BotChatBubble opt="14" Blayout={true} message="What else may I assist you with further?"/>
                    <BotChatBubble opt="12" Blayout={false} message="What else may I assist you with further?"/>
                    <BotChatBubble opt="11" Blayout={true} message="What else may I assist you with further?"/>
                    <BotChatBubble opt="10" Blayout={false} message="What else may I assist you with further?"/>
                    <BotChatBubble opt="9" Blayout={false} message="What else may I assist you with further?"/>
                    <BotChatBubble opt="8" Blayout={false} message="Thank You. Please select number of passengers."/>
                    <BotChatBubble opt="7" Blayout={false} message="What else may I assist you with further?"/>
                    <BotChatBubble opt="3" Blayout={false} options={opts} message="What else may I assist you with further?"/>
                    <BotChatBubble opt="6" Blayout={false} message="What else may I assist you with further?"/>
                    <UserChatBubble message={"I would like to check extra baggage fares."}/>
                    <BotChatBubble opt="3" Blayout={false} options={opts} message={"Passengers can do web check-In until 4 hour prior to the departure of their flight. What else may I assist you with further?"}/>
                    <UserChatBubble message={"What is the latest by which I can do web check-in?"}/>
                    <BotChatBubble opt="3" Blayout={false} options={opts} message="What else may I assist you with further?"/>
                    <BotChatBubble opt="5" Blayout={false} message="What else may I assist you with further?"/>
                    <UserChatBubble message={"I would like to check out the meals and fares."}/>
                    <BotChatBubble opt="3" Blayout={false} options={opts} message="What else may I assist you with further?"/>
                    <BotChatBubble seatMap={true} opt="4" Blayout={false} message={`The Fares for Seat Selection are as follows:`}/>
                    <UserChatBubble message={"I would like to know fares for seat selection."}/>
                    <BotChatBubble opt="3" Blayout={false} options={opts} message="What else may I assist you with further?"/>
                    <BotChatBubble opt="4" Blayout={false} message={`Sure. Bookings can be made before 1 hour to the schedule departure. How may I help with you with further?`}/>
                    <UserChatBubble message="I would like to know the cancellation charges for Air Asia"/>
                    <BotChatBubble opt="3" Blayout={false} options={opts} message={`Sure. Bookings can be made before 1 hour to the schedule departure. How may I help with you with further?`}/>
                    <UserChatBubble message="What is the latest by which you can book a ticket?"/>
                    <BotChatBubble opt="3" Blayout={false} options={opts} message={`Thank you for choosing Air Asia Airlines. How may I help with you with further?`}/>
                    <BotChatBubble opt="2" Blayout={false} message="Which flight do you have your query with?"/>
                    <UserChatBubble message="I want to enquire about a flight"/></>)}
                    <BotChatBubble opt="initialoptions" Blayout={false} message="Hi Avni, What can I help you with?"/>
                    
                    {/* {
                        messageStack&&msgLength>0&&messageStack.map((o,i)=>
                        
                            (o.type==="Bot"?<BotChatBubble
                            key={i}
                            opt={o.opt} 
                            options={o.menu} 
                            Blayout={o.Blayout} 
                            message={o.message} 
                            cancellation={o.Cancellation} 
                            reissuance={o.ReIssuance} 
                            baggage={o.BaggageDetails}
                            standard_seat={o.seat_Tru_Standard}
                            classic_seat={o.seat_Tru_Classic}
                            max_corp_seat={o.seat_Tru_Max_Corporate}
                            contact={o.contact}
                            link={o.link}
                            seatMap={(o.opt === "standard_seat" || o.opt === "classic_seat" || o.opt === "corporate_seat")?true:false}
                            fare={o.Fare}
                            seat={o.Seat}
                            parent={o.parent}
                            service={o.service}
                            />
                            :<UserChatBubble key={i} message={o.message}/>)
                        )
                    } */}
                </div>
            </div>
            <div className="typeLayout">
                        <form onSubmit={sendMessage}>
                            <input className="inputBox"
                            style={{width: '100%', height: '100%'}} 
                            type="text" 
                            value={message} 
                            placeholder="Type your message..."
                            onChange={handleChange}
                            />
                        </form>
                        {/* <div className="recordButton">
                            <img src={microphone} className="recordLogo"/>
                        </div> */}
                        <div className="sendButton" onClick={sendMessage}>
                            <img src={sendLogo} className="sendLogo"/>
                        </div>
                    </div>
        <div 
            style={popUp?{borderLeft: '0.5vw solid rgb(100 97 97 / 27%)', borderRight: '0.5vw solid rgb(100 97 97 / 27%)',textAlign: 'center', fontSize: '10px', backgroundColor: 'white'}:{textAlign: 'center', fontSize: '10px', backgroundColor: 'white'}}>Powered by <a href="www.novigi.io">novigi.io</a></div>
        </div>
        </>):""
        }<img className="popLogo" src={Bot} onClick={()=>{setpopUp(!popUp)}}/></>)}
    </div>
  );
}

export default ChatScreen;
