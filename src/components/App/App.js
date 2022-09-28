// import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import Searchbar from '../Searchbar/Searchbar';
import Searchhistory from '../Searchhistory/Searchhistory';
import { useState } from 'react'

export default function App() {
  const [terms, setTerms] = useState([''])

  function addTerm(term) {
    setTerms([term, ...terms ])
    terms[0] = ''
  }

  return (
    <div className="App">
      <Header />
      <Searchbar term={terms[0]} addTerm={addTerm} />
      <main className='main'>
        <Searchhistory terms={terms} />
      </main>
    </div>
  );
}

