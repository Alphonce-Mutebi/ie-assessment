import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' 
import Nav from './components/Nav';
import SearchInput from './components/SearchInput';
import SearchList from './components/SearchList';

function App() {
  const [movies, setMovies] = useState([]);
  const [search ,setSearch] = useState('');

  const fetchMovies= async(search:string)=>{
    const url = `http://www.omdbapi.com/?s=${search}&apikey=53243c5c`

    const response = await fetch(url);
    const resultJson = await response.json()

    if (resultJson?.Search){
      setMovies(resultJson?.Search)
    }

  }

  useEffect(()=>{
    fetchMovies(search)
  },[search])

  return (
    <div className='container'>
      <div className='row justify-content-center mt-4 mb-4'>
        <Nav header='OMDB' className="ali"/>
      </div>
      <div className='row justify-content-center'>
        <SearchInput  search={search} setSearch={setSearch}/>
      </div>
      <div className='row'>
        <SearchList movies={movies} />
      </div>
    </div>
  );
}

export default App;
