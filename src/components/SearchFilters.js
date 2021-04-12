import { useContext } from 'react'
import FiltersContext from '../store/filters-context'

function SearchFilters(props) {
  const filtersCtx = useContext(FiltersContext)

  return (
    <div>
      <h1>Your Current Filters</h1>
      <ul>
        {filtersCtx.currentFilters.map((filter, i) => (
          <li id={i}>{filter}</li>
        ))}
      </ul>
    </div>
  )
}
export default SearchFilters
