import { useState, useEffect } from 'react'
import Countries from './components/Countries'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  const initialDataLoadHook = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }
  
  useEffect(initialDataLoadHook, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <Filter value={filter} handler={handleFilterChange} />
      <Countries countries={countries} filter={filter} showHandler={handleFilterChange} />
    </div>
  )
}

export default App
