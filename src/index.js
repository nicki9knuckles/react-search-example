import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { FiltersContextProvider } from './store/filters-context'

ReactDOM.render(
  <FiltersContextProvider>
    <App />
  </FiltersContextProvider>,
  document.getElementById('root')
)
