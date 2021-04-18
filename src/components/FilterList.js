import { useEffect, useState } from 'react'
import Filter from './Filter'

function FilterList() {
  const [loadedFilters, setLoadedFilters] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    fetch(
      'https://6074ca42066e7e0017e7a576.mockapi.io/api/AllCities?sortBy=country'
    )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setIsLoading(false)
        setLoadedFilters(data)
      })
  }, [])

  if (isLoading) {
    return (
      <section>
        <p>Loading....</p>
      </section>
    )
  }

  return (
    <div>
      <h1>Filter List</h1>
      <ul>
        {loadedFilters.map(({ id, country }) => (
          <Filter key={id} country={country} />
        ))}
      </ul>
    </div>
  )
}
export default FilterList
