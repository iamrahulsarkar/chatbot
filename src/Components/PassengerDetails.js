import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { LineWeight } from '@material-ui/icons';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  column:{
    display: "flex",
  },
  details: {
    // width: "100%",
    alignItems: 'center',
    paddingTop: '0vh',
    paddingBottom: '1vh',
    justifyContent: 'center',

  },

  details: {
    '@media (min-width: 480px) and (max-width: 760px)': {
    width: "100%",
    alignItems: 'center',
    paddingTop: '0vh',
    paddingBottom: '1vh',
    justifyContent: 'center',
    },
  },
  
  accordion:
  {
    backgroundColor: "#fff",
    boxShadow: "0px 0px 15px #00000026",
    borderRadius: "25px !important",
    width: "100%",
    overflow: "hidden",
  }
  
}));

const PassengerDetails = () => {
  const classes = useStyles();
  const [isOpen, setisOpen] = useState(true);
  const [select,setSelect]=useState("Female");
  const [isExpanded, setisExpanded] = useState(true);

  return (

    <div className={classes.root}>
      <Accordion  className={classes.accordion}>

      <AccordionSummary onClick={()=> setisOpen(!isOpen)}>
          <div className={classes.column}>
           <p style={{ paddingRight: "0vw", paddingTop: "0.5vh", fontWeight: "500"}}>Add passenger details</p>
            <Typography className={{float: "right"}}>
              { isOpen ? <AddIcon className="accordionplus" onClick={()=> setisOpen(!isOpen)}/> 
              : <RemoveIcon className="accordionplus" onClick={() => setisOpen(!isOpen)}/>} 
            </Typography> 
          </div>
       </AccordionSummary> 

        <AccordionDetails className={classes.details} >
              <form style={{}}>
                <input  type="text" id="countrycode" name="countrycode" placeholder="First Name" />
                <input  type="text" id="countrycode" name="countrycode" placeholder="Last Name" />
                <div className="selectGender">
                      <div className="genderOption" style={select === "Male" ? {background:"#ff0100",borderRadius:"25px",color:"white",width:"100%",height:"100%"}:{}} 
                      onClick={()=>{
                          setSelect("Male")
                      }}>
                          <p style={select === "Male" ? {justifySelf:"center",alignSelf:"center"}:{}}>Male</p>
                      </div>

                      <div className="genderOption" style={select === "Female" ? {background:"#ff0100",borderRadius:"25px",color:"white",width:"100%",height:"100%"}:{}} 
                      onClick={()=>{
                          setSelect("Female")
                      }}>
                          <p style={select === "Female" ? {justifySelf:"center",alignSelf:"center"}:{}}>Female</p>
                      </div>
                </div>
                <input type="number" id="mobile" name="mobile" placeholder="Frequent Flyer No." /> 
                
                <hr style={{ marginTop: "1.5vh",
                    border:"none",
                    borderTop: "2px dashed #bebebea1",
                    height: "1px",
                    width:"100%",
                    opacity: "0.5" }}
                />

                <div className="addPassenger">
                    <div className="addCol1 addtext">
                        <p>Add Passenger</p>
                    </div>

                    <div className="addCol2 addicon">
                      { isExpanded ?
                        <AddCircleIcon onClick={()=> setisExpanded(!isExpanded)} style={{ color: '#ff0100', height: '2rem', width: '2rem', cursor: 'pointer' }}/> : 
                        <RemoveCircleIcon onClick={()=> setisExpanded(!isExpanded)} style={{ color: '#ff0100', height: '2rem', width: '2rem', cursor: 'pointer' }}/> 
                      }
                    </div>
                 </div>
              </form>
        </AccordionDetails>

      </Accordion>
    </div>
    
  );
}

export default PassengerDetails;