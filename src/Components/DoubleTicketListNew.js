import React,{useEffect, useState} from 'react';
import '../App.css';
import tick from '../assests/images/flight-tick.svg';
import {useDispatch} from 'react-redux';
import {selectFlight} from '../Redux/actions/flightActions';
import {useSelector} from 'react-redux';
import checkedIcon from '../assests/images/checkedIcon.svg';
import airplaneD from '../assests/images/airplaneD.svg';
import ticketFlight from '../assests/images/ticketFlight.svg';

function DoubleTicketListNew(props){
    const Service = useSelector(state => state.flight);
    const dispatch = useDispatch();
    const [select,setSelect]=useState("");
    return(
        props.list.map((o,i)=>{
            return (<>
                <div className="eachTicket" key={i} style={{marginBottom:0,  borderBottom:"1px dotted black"}} onClick={()=>{
                        dispatch(selectFlight({
                            selected:true,
                            flight: o.go.name
                        }))
                        setSelect(o.go.name)}}>
                            <div className="ticketDetails">
                                <div className="row1">
                                    <img src={checkedIcon}/>
                                    <p>{o.go.flightName} | {o.go.flight} | {o.go.flightId}</p>
                                    <img src={airplaneD} className="airplaneTicketList"/>
                                </div>
                                <div className="row2">
                                    <div className="row2col1">
                                        <p className="time">{o.go.departureTime}</p>
                                        <p className="place">{o.go.from}</p>
                                    </div>
                                    <div className="row2col2">
                                        <p>{o.go.travelTime}</p>
                                        <img src={ticketFlight} className="ticketFlightList"/>
                                        {/* <p>1 flight via New Delhi</p> */}
                                    </div>
                                    <div className="row2col3">
                                        <p className="time">{o.go.arrivalTime}</p>
                                        <p className="place">{o.go.to}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="priceDetails">
                                <div className="row1">
                                    <p style={{justifySelf:"center", alignSelf:"center"}}>{o.go.flightName}</p>
                                </div>
                                <div className="row2">
                                    <p style={{justifySelf:"center", alignSelf:"center"}}>{o.go.price}</p>
                                </div>
                            </div>
                </div>
                <div className="eachTicket" key={i} style={{ marginTop:0}} >
                            <div className="ticketDetails">
                                <div className="row1">
                                    <img src={checkedIcon}/>
                                    <p>{o.return.flightName} | {o.return.flight} | {o.return.flightId}</p>
                                    <img src={airplaneD} className="airplaneTicketList"/>
                                </div>
                                <div className="row2">
                                    <div className="row2col1">
                                        <p className="time">{o.return.departureTime}</p>
                                        <p className="place">{o.return.from}</p>
                                    </div>
                                    <div className="row2col2">
                                        <p>{o.return.travelTime}</p>
                                        <img src={ticketFlight} className="ticketFlightList" style={{transform:"rotate(180deg)"}}/>
                                        {/* <p>1 flight via New Delhi</p> */}
                                    </div>
                                    <div className="row2col3">
                                        <p className="time">{o.return.arrivalTime}</p>
                                        <p className="place">{o.return.to}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="priceDetails">
                                <div className="row1">
                                    <p style={{justifySelf:"center", alignSelf:"center"}}>{o.return.flightName}</p>
                                </div>
                                <div className="row2">
                                    <p style={{justifySelf:"center", alignSelf:"center"}}>{o.return.price}</p>
                                </div>
                            </div>
                </div>
                 {/* <li className="eachFlight" key={i} onClick={()=>{
                     dispatch(selectFlight({
                         selected:true,
                         flight: o.name
                     }))
                     setSelect(o.name)}}>
                     {o.name}
                     <img className="flight-tick" src={tick} style={Service.flight === o.name ?{}:{display:'none'}}/>
                 </li> */}
                </>
                )
        })
    )
}
export default DoubleTicketListNew;