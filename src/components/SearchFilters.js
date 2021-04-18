import { useContext } from 'react'
import FiltersContext from '../store/filters-context'

function SearchFilters() {
  const { currentFilters } = useContext(FiltersContext)

  return (
    <div>
      {currentFilters.length > 0 && <h4>Current Filters:</h4>}

      <ul>
        {currentFilters.map((filter, i) => (
          <li key={i}>{filter}</li>
        ))}
      </ul>
    </div>
  )
}
export default SearchFilters
