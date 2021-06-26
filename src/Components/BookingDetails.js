import React,{useState} from 'react';
import '../App.css';

function BookingDetails() {
    const [ticketType, setTicketType]=useState("departure");
    const [detailsType, setDetailsType]=useState("flight");
    return(
        <div className="bookingDetails">
            <div className="Toggle1">
                <div className="departure" onClick={()=>setTicketType("departure")} style={ticketType === "departure" ?{background:"#ff0100", color:"white"}:{}}>
                    <div>Departure</div>
                </div>
                <div className="return" onClick={()=>setTicketType("return")} style={ticketType === "return" ?{background:"#ff0100", color:"white"}:{}}>
                    <div>Return</div>
                </div>
            </div>
            <div className="Toggle2">
                <div className="departure" onClick={()=>setDetailsType("flight")} style={detailsType === "flight" ?{background:"#ff0100", color:"white"}:{}}>
                    <div>Flight Details</div>
                </div>
                <div className="return" onClick={()=>setDetailsType("price")} style={detailsType === "price" ?{background:"#ff0100", color:"white"}:{}}>
                    <div>Price Details</div>
                </div>
            </div>
            <div className="detailsBox">
                <div className="detailsHeading">
                    <div className="col1">
                        <p style={{font:"13px", fontWeight:"bold", fontFamily:"Roboto"}}>Indigo Airlines</p>
                        <p>Boeing 737-800</p>
                        <p>IG-397</p>
                    </div>
                    <div className="col2">
                        Indigo
                    </div>
                </div>
                <div className="detailsSection">
                {detailsType === "flight" ?<div className="flightDetailsSection">

                    </div>
                    :<div className="priceDetailsSection">

                    </div>}
                </div>
            </div>
            <div className="">

            </div>
        </div>
  );
}

export default BookingDetails;
