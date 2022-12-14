import React from 'react'
import './searchbar.css'

function Searchbar(props) {

  function submitted(ev) {
    ev.preventDefault()
    console.log('Submitted!:', ev.target )
    props.addTerm(ev.target['keyword'].value)
  }

  // function focused(ev) {

  //   console.log('Focused!')
  // }

  // function changed(ev) {
    
  //   console.log('onInput!', ev.target.value)
  // }

  // function clicked(ev) {
  //   // ev.preventDefault()

  //   console.log('Clicked!')
  // }
  
  return (
    <section className='searchBar'>
      <form  onSubmit={submitted}>
        <input autoComplete='off'
          // onChange={changed} 
          // onFocus={focused}
          className='searchText'  
          type="text" 
          name='keyword' 
          placeholder='keyword' 
        />
        <button 
          // onClick={clicked} 
          type='submit' 
          className='searchBtn' 
          name='searchBtn'
        >
          Search
        </button>
      </form>
      { props.term && <p>You searched for: {props.term} </p> }
    </section>
  )
}

//{props.term ? <p>You searched for {props.term} </p> : ''}

export default Searchbar