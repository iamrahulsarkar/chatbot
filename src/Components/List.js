import React,{useEffect, useState} from 'react';
import '../App.css';
import tick from '../assests/images/flight-tick.svg';
import {useDispatch} from 'react-redux';
import {selectFlight} from '../Redux/actions/flightActions';
import {useSelector} from 'react-redux';

function List(props){
    const Service = useSelector(state => state.flight);
    const dispatch = useDispatch();
    const [select,setSelect]=useState("");
    return(
        props.list.map((o,i)=>{
            return (
                <li className="eachFlight" key={i} onClick={()=>{
                    dispatch(selectFlight({
                        selected:true,
                        flight: o.name
                    }))
                    setSelect(o.name)}}>
                    {o.name}
                    <img className="flight-tick" src={tick} style={Service.flight === o.name ?{}:{display:'none'}}/>
                </li>
                )
        })
    )
}
export default List;