import { useContext, useState, useEffect } from 'react'
import FiltersContext from '../store/filters-context'

function SearchResults({ results }) {
  const filtersCtx = useContext(FiltersContext)
  const [allResults, setAllResults] = useState([])

  useEffect(() => {
    const tempResults = []
    results.map((data) => {
      if (filtersCtx.currentFilters.length === 0) {
        return tempResults.push(data)
      }

      if (filtersCtx.currentFilters.indexOf(data.country) !== -1) {
        return tempResults.push(data)
      }

      return false
    })
    setAllResults(tempResults)
  }, [results, filtersCtx.currentFilters])

  return (
    <div>
      <h1>Search Results</h1>
      <ul>
        {allResults.map((result) => (
          <li key={result.id}>
            <span>{result.country}---- </span>
            <span>{result.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default SearchResults
