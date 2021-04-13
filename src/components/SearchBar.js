import { useRef } from 'react'
import SearchFilters from './SearchFilters'

function SearchBar(props) {
  const searchTermRef = useRef()

  function searchHandler(e) {
    e.preventDefault()

    fetch(
      'https://6074ca42066e7e0017e7a576.mockapi.io/api/reactSearchExample?sortBy=country&country=' +
        searchTermRef.current.value
    )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        props.onSearch(data)
      })
  }

  return (
    <div>
      <form onSubmit={searchHandler}>
        <input type='text' placeholder='search...' ref={searchTermRef} />
        <button>Search</button>
      </form>
      <SearchFilters />
    </div>
  )
}

export default SearchBar
