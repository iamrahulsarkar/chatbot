import React,{useState} from 'react';
import '../App.css';
import airplane from '../assests/images/airplane.svg';
import question from '../assests/images/question.svg';
import suitcase from '../assests/images/suitcase.svg';
import { useHistory} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {selectTodo} from '../Redux/actions/todoActions';
import {userRequest} from '../helper/Backend.js';
import {addMessage} from '../Redux/actions/messageArrayActions';
import {useSelector, shallowEqual} from 'react-redux';

function OptionSelection() {
    const messageStack = useSelector(state => state.messageArray.array, shallowEqual);
    const msglength = useSelector(state => state.messageArray.length, shallowEqual);
    const [msgLength, setMsgLength] = useState(messageStack.length);
    const [selectM,setSelect]=useState("");
    React.useEffect(()=>{
        console.log(messageStack,"messages");
        setMsgLength(messageStack.length)
    },[msglength])
    React.useEffect(()=>{
        console.log(selectM,"Change");
    },[selectM])
    const dispatch = useDispatch();
    const sendMessage=(message)=>{
        const msg = messageStack;
        if(message !== "")
        {
        msg.unshift( {type:"User", message:message})
        if(message === "FAQs")
        {userRequest(message).then((data) => {
            if (data)if(data.error) {
              console.log(data.error, "err");
              dispatch(addMessage({
                array:msg,
                length:msg.length
            }))
            } else {
                const dataHandler = data[0].custom[0];
                console.log(dataHandler,"opts")
              msg.unshift(
                { type:"Bot", opt:dataHandler.type, Blayout:false, message:dataHandler.text, menu:dataHandler.buttons});
              dispatch(addMessage({
                array:msg,
                length:msg.length
            }))
            }
          });
        }else{
            msg.unshift(
                { type:"Bot", opt:'', Blayout:false, message:"Oh! I am sorry, unfortunately I am not currently equipped to assist you with this. I am in the process of updating myself. I request you to kindly contact the call center at the following phone no. 040-40904090 or visit us at www.trujet.com.", contact:"040-40904090", link:'www.trujet.com'});
              dispatch(addMessage({
                array:msg,
                length:msg.length
            }))
        }

        }
    }
  return (
    <div className="selectionGrid">
        <div className="airplaneMainBox" style={selectM === 'airplane' ?{background:"#ff0100",color:"white"}:{}} 
        onClick={()=>{
            dispatch(selectTodo({
                selected:true,
                service:"Flights"
            }))
            setSelect("airplane")
            sendMessage("Flights")}}>
            <div className="airplaneBox" style={selectM === 'airplane' ?{background:"white"}:{}}>
                <img src={airplane} className="airplane"/>
            </div>
            <p className="airplaneText">Flights</p>
        </div>
        <div className="questionMainBox" style={selectM === 'question' ?{background:"#ff0100",color:"white"}:{}} 
        onClick={()=>{
            dispatch(selectTodo({
                selected:true,
                service:"FAQs"
            }))
            setSelect("question")
            sendMessage("FAQs")}}>
            <div className="questionBox" style={selectM === 'question' ?{background:"white"}:{}}>
                <img src={question} className="question"/>
            </div>
            <p className="questionText">FAQs</p>
        </div>
        <div  className="suitcaseMainBox" style={selectM === 'suitcase' ?{background:"#ff0100",color:"white"}:{}}  
        onClick={()=>{
            dispatch(selectTodo({
                selected:true,
                service:"Bookings"
            }))
            setSelect("suitcase")
            sendMessage("Bookings")}}>
            <div  className="suitcaseBox" style={selectM === 'suitcase' ?{background:"white"}:{}}>
                <img src={suitcase} className="suitcase"/>
            </div>
            <p className="suitcaseText">Bookings</p>
        </div>
    </div>
  );
}

export default OptionSelection;
