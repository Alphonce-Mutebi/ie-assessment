import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' 
import Nav from './components/Nav';
import SearchInput from './components/SearchInput';
import SearchList from './components/SearchList';

function App() {

  const [search ,setSearch] = useState('');
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <div className='container'>
        <div className='row justify-content-center mt-4 mb-4'>
          <Nav header='OMDB' className="nav-title"/>
        </div>
        <div className='row justify-content-center'>
          <SearchInput  search={search} setSearch={setSearch}/>
        </div>
        <div className='row'>
          <SearchList  search={search}/>
        </div>
      </div>
    </QueryClientProvider>

  );
}

export default App;
