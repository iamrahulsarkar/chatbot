import React,{useState} from 'react';
import reliance from '../assests/images/reliance.svg'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
const SecureYourTrip = () => {

  const [isOpen, setisOpen] = useState(true);
  const [isCheckedOne, setisCheckedOne] = useState(false);
  const [isCheckedTwo, setisCheckedTwo] = useState(false);
  return (
        <div className="Accordion">
          <div className="infobox secure">
            <div className="securerow">
                <h5 className="headertext">Secure your tips</h5>
                <img src={reliance}/>
            </div>
            
            <div className="inforow">
              <div className="infoCol1">
                  <p>COVID & Other Illness
                  Hospitalization</p>
              </div>
              
              <div className="infoCol2">
                  <a>upto</a>
                  <h2>₹1,00,000</h2>
              </div>
            </div>

            <div className="inforow">
              <div className="infoCol1">
                  <p>Trip Cancellation</p>
              </div>
              
              <div className="infoCol2">
                  <a>upto</a>
                  <h2>₹20,000</h2>
              </div>
            </div>
            <div className="inforow">
              <div className="infoCol1">
                  <p>Trip Delay</p>
              </div>
              
              <div className="infoCol2">
                  <a>upto</a>
                  <h2>₹10,000</h2>
              </div>
            </div>

            <hr/>

            <div className="inforow">
              <div className="infoCol1 textorange">
                  <p>+11 More</p>
              </div>
              <div className="infoCol2 addicon">
                { isOpen ?
                  <AddCircleIcon onClick={()=> setisOpen(!isOpen)} style={{ color: '#ff0100', height: '2rem', width: '2rem', cursor: 'pointer' }}/> : 
                  <RemoveCircleIcon onClick={()=> setisOpen(!isOpen)} style={{ color: '#ff0100', height: '2rem', width: '2rem', cursor: 'pointer' }}/> 
                }
              
                </div>
            </div>

            <hr/>

        <div className="terms">
                <div className="termsCol1">
                  { isCheckedOne ?  
                    <RadioButtonUncheckedIcon onClick={()=> setisCheckedOne(!isCheckedOne)}  style={{color : "#727271", size:"small", paddingLeft: "1vw"}}/> :
                    <RadioButtonCheckedIcon onClick={()=> setisCheckedOne(!isCheckedOne)} style={{color : "#727271", size:"small", paddingLeft: "1vw"}}/>
                  }
                  {/* <Radio style={{color : "#727271", size:"small", paddingLeft: "1vw"}}/> */}
                </div>

                <div className="termsCol2">
                    <p>Yes, secure my trip, I agree to the <span style={{ color: '#ff0100'}}>Terms & Conditions</span> &  <span style={{ color: '#ff0100'}}>Good Health terms</span>, and confirm all passengers are between 2 to 70 years of age</p>
                </div>

          </div>

          <div className="terms">
                <div className="termsCol1">
                { isCheckedTwo ?  
                  <RadioButtonUncheckedIcon onClick={()=> setisCheckedTwo(!isCheckedTwo)}  style={{color : "#727271", size:"small", paddingLeft: "1vw"}}/> :
                  <RadioButtonCheckedIcon onClick={()=> setisCheckedTwo(!isCheckedTwo)} style={{color : "#727271", size:"small", paddingLeft: "1vw"}}/>
                }
                </div>

                <div className="termsCol2">
                    <p >No, I do not wish to secure my trip</p>
                </div>
          </div>


        </div>
    </div>
  )
}

export default SecureYourTrip 