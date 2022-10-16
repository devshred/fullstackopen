import Country from './Country'

const Countries = ({countries, filter, showHandler}) => {
  const filteredCountries = 
    countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
  if(filteredCountries.length > 10){
    return <div>Too many matches, specify another filter</div>
  } else if (filteredCountries.length == 1) {
    return <Country country={filteredCountries[0]} full='true'/>
  } else {
    return (
      <div>
        {filteredCountries.map(country => 
          <div>
            <Country country={country} />&nbsp;
            <button value={country.name.common} onClick={showHandler}>show</button>
          </div>
        )}
      </div>
    )
  }
}
  
export default Countries