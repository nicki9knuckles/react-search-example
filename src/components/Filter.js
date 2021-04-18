import { useContext } from 'react'
import FiltersContext from '../store/filters-context'

function Filter({ country }) {
  const { hasFilter, removeFilter, addFilter } = useContext(FiltersContext)

  function toggleFilterHandler() {
    if (hasFilter(country)) {
      removeFilter(country)
    } else {
      addFilter(country)
    }
  }

  return <button onClick={toggleFilterHandler}>{country}</button>
}
export default Filter
