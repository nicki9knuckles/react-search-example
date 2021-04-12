function SearchResults(props) {
  const allResults = []
  props.results.map((data) => {
    allResults.push(data)
  })

  return (
    <div>
      <h1>Search Results</h1>
      <ul>
        {allResults.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  )
}
export default SearchResults
