import { useContext } from 'react'
import FiltersContext from '../store/filters-context'

function Filter(props) {
  const filtersCtx = useContext(FiltersContext)

  function toggleFilterHandler() {
    if (filtersCtx.hasFilter(props.country)) {
      filtersCtx.removeFilter(props.country)
    } else {
      filtersCtx.addFilter(props.country)
    }
  }

  return <button onClick={toggleFilterHandler}>{props.country}</button>
}
export default Filter
