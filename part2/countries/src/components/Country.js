import Languages from './Languages'

const Country = ({ country, full }) => {
    if (full === 'true'){
      return (
        <div>
          <h2>{country.name.common}</h2>
          <div>capital {country.capital}</div>
          <div>area {country.area}</div>
          <h3>languages</h3>
          <Languages languages={country.languages}/>
          <img src={country.flags.png} />
        </div>
      )
    } else {
      return (
        <div>{country.name.common}</div>
      )
    }
  }

export default Country