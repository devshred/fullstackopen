import Person from './Person'

const Persons = props => {
    return (
        <ul>
        {props.persons
        .filter(person => 
          person.name.toLowerCase().includes(props.filter.toLowerCase()))
        .map(person => 
          <Person key={person.id} person={person} />
        )}
      </ul>
    )
  }
  
  export default Persons