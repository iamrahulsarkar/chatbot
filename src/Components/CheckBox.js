import React, {useState} from 'react';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const CheckBox = () => {
    const [isChecked, setisChecked] = useState(false);
    return (
            <div className="Accordion">
                <div className="checkbox grid">
                    <div className="checkboxCol1">
                       { isChecked ? <CheckBoxIcon onClick={()=> setisChecked(!isChecked)}/> : <CheckBoxOutlineBlankIcon  onClick={()=> setisChecked(!isChecked)}/> } 
                    </div>
                    <div className="checkboxCol2">
                        <h5 className="headertext">Thank You for Donating ₹ 10 for COVID-19 Relief and Other Charity Initiatives</h5>
                    </div>
                </div>
            </div>
    )
}

export default CheckBox;