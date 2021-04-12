import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import { useState } from 'react'
import FilterList from './components/FilterList'

function App() {
  const [loadedSearchResults, setSearchResults] = useState([])

  function onSearchHandler(searchResults) {
    setSearchResults(searchResults)
  }
  return (
    <div className='App'>
      <SearchBar onSearch={onSearchHandler} />

      <FilterList />
      <SearchResults results={loadedSearchResults}></SearchResults>
    </div>
  )
}

export default App
