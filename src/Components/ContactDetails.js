import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { LineWeight } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  column:{
    display: 'flex',
  },
  details: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '0vh',
    paddingBottom: '2vh'
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

const ContactDetails = () => {
  const classes = useStyles();
  const [isOpen, setisOpen] = useState(true);

  return (
<div className="">
    <div className={classes.root}>
      <Accordion  className={classes.accordion}>

          <AccordionSummary onClick={()=> setisOpen(!isOpen)}>
            <div className={classes.column}>
              <p  style={{paddingRight: "0vw", paddingTop: "0.5vh", fontWeight: "500", textIndent: "20px", direction: "rtl", textAlign: "left"}}>Add contact details  </p>
              <Typography className={{float: "right", right: "0"}}> 
                { isOpen ? 
                    <AddIcon className="accordionplus" onClick={()=> setisOpen(!isOpen)} /> 
                  : <RemoveIcon className="accordionplus" onClick={() => setisOpen(!isOpen)} /> 
                } 
              </Typography>
            </div>
          </AccordionSummary>

          <AccordionDetails className={classes.details} >
                <form>
                    <input  type="text" id="countrycode" name="countrycode" placeholder="Country Code" />
                    <input type="text" id="mobile" name="mobile" placeholder="Mobile Number" /> 
                    <input  type="email" id="email" name="email" placeholder="Email" />
                </form>
          </AccordionDetails>

      </Accordion>
    </div>
    </div>
  );
}

export default ContactDetails;