import './App.css'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import { useState } from 'react'
import FilterList from './components/FilterList'

function App() {
  const [loadedSearchResults, setSearchResults] = useState([])

  return (
    <div className='App'>
      <div className='search-bar'>
        <SearchBar onSearch={setSearchResults} />
      </div>

      <div className='filter-list'>
        <FilterList />
      </div>

      <div className='search-results'>
        <SearchResults results={loadedSearchResults}></SearchResults>
      </div>
    </div>
  )
}

export default App
