import { useContext } from 'react'
import FiltersContext from '../store/filters-context'

function FilterList(props) {
  const filtersCtx = useContext(FiltersContext)

  function toggleFilterHandler(params) {
    if (filtersCtx.hasFilter(params)) {
      filtersCtx.removeFilter(params)
    } else {
      filtersCtx.addFilter(params)
    }
  }
  return (
    <div>
      <h1>Filter List</h1>
      <ul>
        <li>
          <button onClick={() => toggleFilterHandler('burger')}>burger</button>
        </li>
        <li>
          <button onClick={() => toggleFilterHandler('fries')}>fries</button>
        </li>
        <li>
          <button onClick={() => toggleFilterHandler('coke')}>coke</button>
        </li>
        <li>
          <button onClick={() => toggleFilterHandler('shake')}>shake</button>
        </li>
      </ul>
    </div>
  )
}
export default FilterList
