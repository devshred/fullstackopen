import Person from './Person'

const Persons = props => {
    return (
      <div>
        {props.persons
        .filter(person => 
          person.name.toLowerCase().includes(props.filter.toLowerCase()))
        .map(person => 
          <div>
            <Person key={person.id} person={person} />&nbsp;
            <button value={person.id} onClick={props.removeHandler}>delete</button>
          </div>
        )}
      </div>
    )
  }
  
  export default Persons