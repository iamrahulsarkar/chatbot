import React, {useState} from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const ProceedToPay = () => {
    const [isExpanded, setisExpanded] = useState(false);
    return (
            <div className="Accordion">
                <div className="proceedbox proceedboxGrid">
                    <div className="proceedboxCol1">
                        <h5 className="headertext">Proceed to Pay</h5>
                    </div>
                    <div className="proceedboxCol2">
                        { isExpanded ? <ExpandLessIcon onClick={()=> setisExpanded(!isExpanded)}/> : <ExpandMoreIcon onClick={()=> setisExpanded(!isExpanded)}/>} 
                    </div>
                </div> 
            </div>
    )
}

export default ProceedToPay;