import React,{useState} from 'react';
import '../App.css';

function SeatMap() {
    return(
        <div className="bookingDetails">
            <div className="seatMapPage">
                <div className="row1">
                    <div className="businessClass">
                        <p className="businessClassHeading">Business Class</p>
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
                        <div className="seat">A</div>
                        <div className="seat">B</div>
                        <div className="seatRow">4</div>
                        <div className="seat">C</div>
                        <div className="seat">D</div>
                    </div>
                    <div className="premiumEconomyClass">
                        <p className="premiumEconomyClassHeading">Premium Economy Class</p>
                        <div className="seat booked">A</div>
                        <div className="seat">B</div>
                        <div className="seat booked">C</div>
                        <div className="seatRow">1</div>
                        <div className="seat">D</div>
                        <div className="seat">E</div>
                        <div className="seat booked">F</div>
                        <div className="seat">A</div>
                        <div className="seat booked">B</div>
                        <div className="seat booked">C</div>
                        <div className="seatRow">2</div>
                        <div className="seat booked">D</div>
                        <div className="seat booked">E</div>
                        <div className="seat">F</div>
                        <div className="seat emergency">A</div>
                        <div className="seat">B</div>
                        <div className="seat">C</div>
                        <div className="seatRow">3</div>
                        <div className="seat">D</div>
                        <div className="seat">E</div>
                        <div className="seat emergency">F</div>
                        <div className="seat">A</div>
                        <div className="seat booked">B</div>
                        <div className="seat booked">C</div>
                        <div className="seatRow">4</div>
                        <div className="seat">D</div>
                        <div className="seat booked">E</div>
                        <div className="seat booked">F</div>
                        <div className="seat">A</div>
                        <div className="seat booked">B</div>
                        <div className="seat booked">C</div>
                        <div className="seatRow">5</div>
                        <div className="seat booked">D</div>
                        <div className="seat booked">E</div>
                        <div className="seat booked">F</div>
                        <div className="seat emergency">A</div>
                        <div className="seat">B</div>
                        <div className="seat">C</div>
                        <div className="seatRow">6</div>
                        <div className="seat">D</div>
                        <div className="seat">E</div>
                        <div className="seat emergency">F</div>
                        <div className="seat">A</div>
                        <div className="seat">B</div>
                        <div className="seat">C</div>
                        <div className="seatRow">7</div>
                        <div className="seat">D</div>
                        <div className="seat">E</div>
                        <div className="seat">F</div>
                    </div>
                    <div className="premiumEconomyClass">
                        <p className="premiumEconomyClassHeading">Economy Class</p>
                        <div className="seat booked">A</div>
                        <div className="seat">B</div>
                        <div className="seat booked">C</div>
                        <div className="seatRow">1</div>
                        <div className="seat">D</div>
                        <div className="seat">E</div>
                        <div className="seat booked">F</div>
                        <div className="seat">A</div>
                        <div className="seat booked">B</div>
                        <div className="seat booked">C</div>
                        <div className="seatRow">2</div>
                        <div className="seat booked">D</div>
                        <div className="seat booked">E</div>
                        <div className="seat">F</div>
                        <div className="seat emergency">A</div>
                        <div className="seat">B</div>
                        <div className="seat">C</div>
                        <div className="seatRow">3</div>
                        <div className="seat">D</div>
                        <div className="seat">E</div>
                        <div className="seat emergency">F</div>
                        <div className="seat">A</div>
                        <div className="seat booked">B</div>
                        <div className="seat booked">C</div>
                        <div className="seatRow">4</div>
                        <div className="seat">D</div>
                        <div className="seat booked">E</div>
                        <div className="seat booked">F</div>
                        <div className="seat">A</div>
                        <div className="seat booked">B</div>
                        <div className="seat booked">C</div>
                        <div className="seatRow">5</div>
                        <div className="seat booked">D</div>
                        <div className="seat booked">E</div>
                        <div className="seat booked">F</div>
                        <div className="seat emergency">A</div>
                        <div className="seat">B</div>
                        <div className="seat">C</div>
                        <div className="seatRow">6</div>
                        <div className="seat">D</div>
                        <div className="seat">E</div>
                        <div className="seat emergency">F</div>
                        <div className="seat">A</div>
                        <div className="seat">B</div>
                        <div className="seat">C</div>
                        <div className="seatRow">7</div>
                        <div className="seat">D</div>
                        <div className="seat">E</div>
                        <div className="seat">F</div>
                        <div className="seat">A</div>
                        <div className="seat">B</div>
                        <div className="seat">C</div>
                        <div className="seatRow">8</div>
                        <div className="seat">D</div>
                        <div className="seat">E</div>
                        <div className="seat">F</div>
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
                        <p>Fare: <span style={{color:"#ff0100"}}>INR 400</span></p>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default SeatMap;
