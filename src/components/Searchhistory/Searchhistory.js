import React from 'react'
import './searchhistory.css'


function Searchhistory(props) {
  return (
    <ul className='searchList'>
      Searchhistory
    {props.terms.map(term => (
      <li key={term}>{term}</li>
    ))}
    </ul>
  )
}

export default Searchhistory