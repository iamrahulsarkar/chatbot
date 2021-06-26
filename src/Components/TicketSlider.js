import React,{useEffect, useState} from 'react';
import '../App.css';
import next from '../assests/images/whiteNextArrow.svg';
import prev from '../assests/images/whitePrevArrow.svg';
import { useHistory} from "react-router-dom";
import {useDispatch} from 'react-redux';
import TicketListNew from './TicketListNew';
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

  
 function TicketSlider() {
    const history = useHistory();
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
  ]
    const noOfFlights=3;
    const [totalFlights, setTotalFlights]=useState(flights.length);
    const [lastPage, setLastPage]=useState(flights.length % noOfFlights);
    const [noPage, setNoPage]=useState(flights.length - (flights.length % noOfFlights));
    const sliderArray =(flights) =>{
        const slider=[];
        for(let i=0;i<noPage;i++){
            var ar=[];
            for(let j=0;j<noOfFlights;j++){
              console.log(flights[i*noOfFlights + j])
                if(flights[i*noOfFlights + j] !== undefined)
                
                    ar.push(flights[i*noOfFlights + j])
            }
            if(ar.length !== 0)
                slider.push(ar);
        }
        var Lar=[];
        for(let z=(noPage*noOfFlights);z<totalFlights;z++){
          console.log(z)
            if(flights[z] !== undefined){
                Lar.push(flights[z]);
                if(z === (lastPage - 1)){
                    slider.push(Lar);
                }
            }
        }
        console.log(slider)
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
              <button key={dots} className="viewAllFlights" onClick={()=>history.push("/tickets")}>View All</button>
            </div>
          ),
          customPaging: i => (
            i+1
          )
      };
    return (
        <div>
        <div className="ticketSlider">
        <Slider {...settings}>
        {list.map((li,i)=>{
                return (
                    <div className="ticketList">
                    <TicketListNew className="item" list={li}/>
                    </div>
                )
            })}
        </Slider>
      </div>
        </div>
    );
}

export default TicketSlider;
