import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const Question = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className='ContactMain'>
      <header className='ContactHeader'>
        <h4 onClick={() => setExpanded(!expanded)} className=''>
          {title}
        </h4>
        <button className='btn accordionplus' onClick={() => setExpanded(!expanded)}>
          {expanded ? <RemoveIcon /> : <AddIcon />}
        </button>
      </header>
      {expanded && <h1>{info}</h1>}
    </article>
  )
}

export default Question;