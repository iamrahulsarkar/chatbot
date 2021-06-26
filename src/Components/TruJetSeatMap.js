import React,{useState} from 'react';
import '../App.css';

function TruJetSeatMap() {
    return(
        <div className="bookingDetails">
            <div className="seatMapPage">
                <div className="row1">
                    <div className="businessClass">
                        <p className="businessClassHeading">Premium Seats</p>
                        <div className="seat booked">A</div>
                        <div className="seat">B</div>
                        <div className="seatRow">1</div>
                        <div className="seat booked">C</div>
                        <div className="seat">D</div>
                        <div className="seat">A</div>
                        <div className="seat booked">B</div>
                        <div className="seatRow">2</div>
                        <div className="seat">C</div>
                        <div className="seat">D</div>
                        <div className="seat emergency">A</div>
                        <div className="seat">B</div>
                        <div className="seatRow">3</div>
                        <div className="seat">C</div>
                        <div className="seat emergency">D</div>
                    </div>
                    <div className="businessClass">
                        <p className="businessClassHeading">Standard Seats</p>
                        <div className="seat booked">A</div>
                        <div className="seat">B</div>
                        <div className="seatRow">4</div>
                        <div className="seat booked">C</div>
                        <div className="seat">D</div>
                        <div className="seat">A</div>
                        <div className="seat booked">B</div>
                        <div className="seatRow">5</div>
                        <div className="seat">C</div>
                        <div className="seat">D</div>
                        <div className="seat emergency">A</div>
                        <div className="seat">B</div>
                        <div className="seatRow">6</div>
                        <div className="seat">C</div>
                        <div className="seat emergency">D</div>
                        <div className="seat booked">A</div>
                        <div className="seat">B</div>
                        <div className="seatRow">7</div>
                        <div className="seat booked">C</div>
                        <div className="seat">D</div>
                        <div className="seat">A</div>
                        <div className="seat booked">B</div>
                        <div className="seatRow">8</div>
                        <div className="seat">C</div>
                        <div className="seat">D</div>
                        <div className="seat emergency">A</div>
                        <div className="seat">B</div>
                        <div className="seatRow">9</div>
                        <div className="seat">C</div>
                        <div className="seat emergency">D</div>
                        <div className="seat booked">A</div>
                        <div className="seat">B</div>
                        <div className="seatRow">10</div>
                        <div className="seat booked">C</div>
                        <div className="seat">D</div>
                        <div className="seat">A</div>
                        <div className="seat booked">B</div>
                        <div className="seatRow">11</div>
                        <div className="seat">C</div>
                        <div className="seat">D</div>
                        <div className="seat emergency">A</div>
                        <div className="seat">B</div>
                        <div className="seatRow">12</div>
                        <div className="seat">C</div>
                        <div className="seat emergency">D</div>
                        <div className="seat booked">A</div>
                        <div className="seat">B</div>
                        <div className="seatRow">13</div>
                        <div className="seat booked">C</div>
                        <div className="seat">D</div>
                        <div className="seat">A</div>
                        <div className="seat booked">B</div>
                        <div className="seatRow">14</div>
                        <div className="seat">C</div>
                        <div className="seat">D</div>
                        <div className="seat emergency">A</div>
                        <div className="seat">B</div>
                        <div className="seatRow">15</div>
                        <div className="seat">C</div>
                        <div className="seat emergency">D</div>
                        <div className="seat">A</div>
                        <div className="seat booked">B</div>
                        <div className="seatRow">16</div>
                        <div className="seat">C</div>
                        <div className="seat">D</div>
                        <div className="seat emergency">A</div>
                        <div className="seat">B</div>
                        <div className="seatRow">17</div>
                        <div className="seat">C</div>
                        <div className="seat emergency">D</div>
                    </div>
                    <div className="businessClass">
                        <p className="businessClassHeading">Premium Seats</p>
                        <div className="seat">A</div>
                        <div className="seat booked">B</div>
                        <div className="seatRow">18</div>
                        <div className="seat">C</div>
                        <div className="seat">D</div>
                        <div className="seat emergency">A</div>
                        <div className="seat">B</div>
                        <div className="seatRow">19</div>
                        <div className="seat">C</div>
                        <div className="seat emergency">D</div>
                    </div>
                </div>
                <div className="row2">
                    <div className="availableD">
                        <div className="available availableBox"/>
                        <p>Available</p>
                    </div>
                    <div className="emergencyD">
                        <div className=" emergency emergencyBox"/>
                        <p>Emergency Exit</p>
                    </div>
                    <div className="bookedD">
                        <div className="booked bookedBox"/>
                        <p>Not Available</p>
                    </div>
                </div>
                <div className="row3">
                    <div className="seatDetailsT">
                        <p>Seat: <span style={{color:"#ff0100"}}>Economy 4E</span></p>
                    </div>
                    <div className="fareDetailsT">
                        <p>Premium Fare: <span style={{color:"#ff0100"}}>INR 250</span></p>
                    </div>
                    <div className="fareDetailsT">
                        <p>Standard Fare: <span style={{color:"#ff0100"}}>INR 150</span></p>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default TruJetSeatMap;
