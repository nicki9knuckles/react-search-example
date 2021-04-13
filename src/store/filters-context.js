import { createContext, useState } from 'react'

const FiltersContext = createContext({
  currentFilters: [],
  hasFilter: (filter) => {},
  addFilter: (newFilter) => {},
  removeFilter: (filterToDelete) => {},
})
export function FiltersContextProvider(props) {
  const [currentFilters, setFilters] = useState([])

  function addFilterHandler(newFilter) {
    setFilters((prevFilters) => {
      return prevFilters.concat(newFilter)
    })
  }

  function removeFilterHandler(filterToDelete) {
    setFilters((prevFilters) => {
      return prevFilters.filter((filter) => filter !== filterToDelete)
    })
  }

  function hasFilterHandler(newFilter) {
    return currentFilters.some((filter) => newFilter === filter)
  }

  const context = {
    currentFilters: currentFilters,
    hasFilter: hasFilterHandler,
    addFilter: addFilterHandler,
    removeFilter: removeFilterHandler,
  }

  return (
    <FiltersContext.Provider value={context}>
      {props.children}
    </FiltersContext.Provider>
  )
}

export default FiltersContext
