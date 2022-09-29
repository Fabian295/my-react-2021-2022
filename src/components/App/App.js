// import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import Searchbar from '../Searchbar/Searchbar';
import Searchhistory from '../Searchhistory/Searchhistory';
import { useState, useEffect } from 'react'
import Searchresults from '../Searchresults/Searchresults'


export default function App() {
  const name = 'This Company Name';
  const [terms, setTerms] = useState(['']);
  const [results, setResults] = useState([]);
  const [dataType, setDataType] = useState('films');

  function addTerm(term) {
    let newTerms = new Set([term, ...terms])
    setTerms(Array.from(newTerms))
    //First WAY passing a value to the search keyword, the term var
    // fetchData(term)
  }

  useEffect(() => {
    console.log('initial render complete!')
    fetchData(terms[0])
  }, [terms]);

  useEffect(() => {
    console.log('initial render complete!')
    fetchData(terms[0])
  }, []);

  async function fetchData(keyword) {
    let url = `https://swapi.dev/api/${dataType}`;

    if(keyword) {
      url += `/?search=${keyword}`;
    }
    let resp = await fetch(url)
    if(!resp.ok) throw new Error(resp.statusText)
    let data =  await resp.json()
    setResults(data.results)
  }

  // async function fetchData(type) {
  //   let url = `https://swapi.dev/api/${type}`;
  //   await fetch(url)
  //     .then( response =>  response.json())
  //     .then(data => setFilms(data.results)).catch(error => console.log(error.message))

      
  // }
  

  return (
    <div className="App">
      <Header company={name} />
      <Searchbar term={terms[0]} addTerm={addTerm} />
      <main className='content'>
        <Searchhistory terms={terms} />
        <Searchresults results={results}
        //  addFilms={addFilms}
         />
      </main>
    </div>
  );
}

