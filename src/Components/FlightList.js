import React,{useEffect, useState} from 'react';
import '../App.css';
import next from '../assests/images/whiteNextArrow.svg';
import prev from '../assests/images/whitePrevArrow.svg';
import { useHistory} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {selectFlight} from '../Redux/actions/flightActions';
import List from './List';
import Slider from "react-slick";


function Arrow(props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const char = props.type === "next" ? "👉" : "👈";
    return (
      <div className={className} onClick={props.onClick} style={{display:"grid"}}>
        <img src={ props.type === "next" ? next : prev} style={{justifySelf:"center", alignSelf:"center"}}/>
      </div>
    );
  }

  
 function FlightList() {
    const history = useHistory();
    const flights = [
        {
            name:"Indigo"
        },
        {
            name:"Spice Jet"
        },
        {
            name:"Go Air"
        },
        {
            name:"Vistara"
        },
        {
            name:"Air India"
        },
        {
            name:"Air Asia"
        },
        {
            name:"True Jet"
        },
        {
            name:"Quatar Airways"
        },
        {
            name:"Saudi Arabia"
        },
        {
            name:"Emirates"
        },
        {
            name:"Nauru Airlines"
        },
        {
            name:"Singapore Airlines"
        },
        {
            name:"Thai Airways"
        }
    ]
    const noOfFlights=7;
    const [totalFlights, setTotalFlights]=useState(flights.length);
    const [lastPage, setLastPage]=useState(flights.length % noOfFlights);
    const [noPage, setNoPage]=useState(flights.length - (flights.length % noOfFlights));
    const sliderArray =(flights) =>{
        const slider=[];
        for(let i=0;i<noPage;i++){
            var ar=[];
            for(let j=0;j<noOfFlights;j++){
                if(flights[i*noOfFlights + j] !== undefined)
                    ar.push(flights[i*noOfFlights + j])
            }
            if(ar.length !== 0)
                slider.push(ar);
        }
        var Lar=[];
        for(let z=(noPage*noOfFlights);z<flights.length;z++){
            if(flights[z] !== undefined){
                Lar.push(flights[z]);
                if(z === (lastPage - 1)){
                    slider.push(Lar);
                }
            }
        }
        
        return slider
    }
    const list=sliderArray(flights);
    const [activeSlide,setActiveSlide]=useState(null);
    const dispatch = useDispatch();
    const settings = {
        afterChange: (current, next) => setActiveSlide(next),
        className: 'center',
        // centerMode: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipeToSlide: true,
        arrows: true,
        dots: true,
        focusOnSelect: true,
        nextArrow:<Arrow type="next" />,
        prevArrow:<Arrow type="prev" />,
        appendDots: dots => (
            <div>
              <button key={dots} className="viewAllFlights" onClick={()=>history.push("/flights")}>View All</button>
            </div>
          ),
          customPaging: i => (
            i+1
          )
      };
    return (
        <div>
        <div>
        <Slider {...settings}>
        {list.map((li,i)=>{
                return (
                    <div className="flightList">
                    <ul key={i}>
                    <List className="item" list={li}/>
                    </ul>
                    </div>
                )
            })}
        </Slider>
      </div>
        </div>
    );
}

export default FlightList;
