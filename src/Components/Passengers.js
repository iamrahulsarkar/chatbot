import React,{useEffect, useState} from 'react';
import '../App.css';
import next from '../assests/images/greyNextArrow.svg';
import prev from '../assests/images/greyPrevArrow.svg';
import Slider from "react-slick";

function Arrow(props) {
    let className = props.type === "next" ? "next" : "prev";
    return (
      <div className={className} onClick={props.onClick} style={{display:"grid"}}>
        <img src={ props.type === "next" ? next : prev} style={{justifySelf:"center", alignSelf:"center"}}/>
      </div>
    );
  }
  
function Passengers() {
    const [opt, setOpt] = useState("");
    const [num, setNum] = useState(0);
    const array=["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20"]
    const [activeSlide,setActiveSlide]=useState(null);
    const settings = {
        afterChange: (current, next) => setActiveSlide(next),
        className: 'center',
        // centerMode: true,
        infinite: false,
        slidesToShow: 7,
        slidesToScroll: 3,
        speed: 500,
        swipeToSlide: true,
        arrows: true,
        nextArrow:<Arrow type="next" />,
        prevArrow:<Arrow type="prev" />,
      };
    return (
        <div className="passengerBox">
            <div className="passengerType">
                <div className="passengerHeading">
                    Passenger
                </div>
                <div className="passengerOptions">
                    <div className="passengerOption">
                        <div className="passengerOptionBubble" style={ opt==="AD"?{background:"#ff0100", boxShadow: "0px 0px 10px #ff0100", color:"white"}:{}} onClick={() => setOpt("AD")}>
                            <span className="passengerOptionShort">AD</span>
                        </div>
                        <div className="passengerOptionText">
                            <p>Adults</p>
                            <p>(12yrs+)</p>
                        </div>
                    </div>
                    <div className="passengerOption">
                        <div className="passengerOptionBubble" style={ opt==="CH"?{background:"#ff0100", boxShadow: "0px 0px 10px #ff0100", color:"white"}:{}}  onClick={() => setOpt("CH")}>
                            <span className="passengerOptionShort">CH</span>
                        </div>
                        <div className="passengerOptionText">
                            <p>Children</p>
                            <p>(2y-12y)</p>
                        </div>
                    </div>
                    <div className="passengerOption">
                        <div className="passengerOptionBubble" style={ opt==="IN"?{background:"#ff0100", boxShadow: "0px 0px 10px #ff0100", color:"white"}:{}} onClick={() => setOpt("IN")}>
                            <span className="passengerOptionShort">IN</span>
                        </div>
                        <div className="passengerOptionText">
                            <p>Infant</p>
                            <p>(Below 2y)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="passengerNumberList">
            <Slider {...settings}> 
                {array.map((numb,i)=>{
                    return(<div key={i} className={`numBubble ${num.toString() === i.toString() && "selec"} `} onClick={()=>{setNum(i)}}>
                        {numb}
                    </div>)
                })}
            </Slider>
            </div>
        </div>
  );
}

export default Passengers;
