import { useContext } from 'react'
import FiltersContext from '../store/filters-context'

function SearchFilters(props) {
  const filtersCtx = useContext(FiltersContext)

  return (
    <div>
      {filtersCtx.currentFilters.length > 0 && <h4>Current Filters:</h4>}

      <ul>
        {filtersCtx.currentFilters.map((filter, i) => (
          <li key={i}>{filter}</li>
        ))}
      </ul>
    </div>
  )
}
export default SearchFilters
