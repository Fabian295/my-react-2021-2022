// import React, {useEffect } from 'react'
import './searchresults.css'

function Searchresults(props) {
  // useEffect(() => {
  //   console.log('Initial render ONLY of films')
  // }, [])

  // useEffect(() => {
  //   console.log('Initial AND re-render of films')
  // }, [props.results])

  return (
    <ul className='results'>
      Searchresults

    {props.results.map(item => (
      <li key={item.episode_id}>{item.title}</li>
    ))}
    </ul>
  )
}

export default Searchresults