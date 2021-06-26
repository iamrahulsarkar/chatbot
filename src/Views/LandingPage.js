import React from 'react';
import '../App.css';
import BG1 from '../assests/images/BG1.svg';
import logo from '../assests/images/landLOGO.svg';
import { useHistory } from "react-router-dom";

function LandingPage() {
  const history = useHistory();
  return (
    <div className="container">
        <div className="landBG">
            <img src={BG1} style={{width:"100vw"}}/>
        </div>
        <div className="landOPAC"/>
        <div className="landContentBox">
            <img className="landLOGO" src={logo}/>
            <button className="landSIGNUP" onClick={() => { history.push("/sign/up"); }}>Sign Up</button>
            <button className="landSIGNIN" onClick={() => { history.push("/sign/in"); }}>Sign In</button>
        </div>
    </div>
  );
}

export default LandingPage;
