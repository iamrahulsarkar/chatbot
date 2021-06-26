import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import XMLParser from 'react-xml-parser';
 
function SearchTab() {
  const [inputValue, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);
  const [name,setName] = useState(null);
 
  // handle input change event
  const handleInputChange = value => {
    setValue(value);
  };
 
  // handle selection
  const handleChange = value => {
    setSelectedValue(value);
    var i= value.id.indexOf("(");
    var name = value.id.slice(0,i);
    setName(name);
  }
 
  // load options using API call
  const loadOptions = (inputValue) => {
    return fetch(`http://35.200.211.13/GlobezeMobileAPI/API/JSMobileAPI.asmx/GetAirports2?req={"Containing":"${inputValue}"}`)
                .then(response => response.text())
                .then((data) => {
                    var res =new XMLParser().parseFromString(data);
                    var  jsonRes = res && JSON.parse(res.value);
                    var arr = jsonRes.Airports.map((obj,i)=>{return({id:obj.Key, title: obj.Value})})
                    return arr
                }
                )
  };
 
  return (<>
    <div className="menuList" style={selectedValue?{padding: '1rem'}:{padding: '1rem', height: '6rem'}}>
      <AsyncSelect
        cacheOptions
        defaultOptions
        value={selectedValue}
        getOptionLabel={e => e.id}
        getOptionValue={e => e.title}
        loadOptions={loadOptions}
        onInputChange={handleInputChange}
        onChange={handleChange}
      />
      {/* <pre>Selected Value: {JSON.stringify(selectedValue || {}, null, 2)}</pre> */}
      {name && (<div style={{borderRadius: '5rem', border: '0.2rem solid black', padding: '0.5rem', marginTop: '1rem'}}>
            {name}
      </div>)}
    </div>
    <button className="goBackButton" style={{width:"calc(70.46667*0.230rem)"}}>Confirm</button>
    </>
  );
}
 
export default SearchTab