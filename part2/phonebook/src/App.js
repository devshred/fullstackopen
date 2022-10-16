import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setNewFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const initialDataLoadHook = () => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }
  
  useEffect(initialDataLoadHook, [])

  const addPerson = (event) => {
    event.preventDefault()

    const equalRecords = persons.filter(person => person.name === newName).length
    if(equalRecords > 0){
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        id: persons.length + 1,
        name: newName,
        number: newNumber
      }

      personService.
        create(personObject)
        .then(createdPerson => {
          setPersons(persons.concat(createdPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} handler={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm 
        submitHandler={addPerson} 
        name={newName} nameHandler={handleNameChange} 
        number={newNumber} numberHandler={handleNumberChange} 
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  )
}

export default App
