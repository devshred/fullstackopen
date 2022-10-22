import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setNewFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [notification, setNotification] = useState(null)
  const [notificationType, setNotificationType] = useState("info")

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

    const equalRecords = persons.filter(person => person.name === newName)
    if(equalRecords.length > 0){
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one`)) {
        const person = equalRecords[0]
        const personToChange = { ...person, number: newNumber}
        personService
          .update(person.id, personToChange)
          .then(changedPerson => {
            setPersons(persons.map(p => p.id !== person.id ? p : changedPerson))
            setNewName('')
            setNewNumber('')
            setNotification(
              `Changed number of ${person.name}`
            )
            setNotificationType("info")
            setTimeout(() => {
              setNotification(null)
            }, 5000)
          })
      }
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
          setNotification(
            `Added ${createdPerson.name}`
          )
          setNotificationType("info")
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
    }
  }

  const removeHandler = (event) => {
    const pId = parseInt(event.target.value)
    const person = persons.find(p => p.id === pId)
    if(window.confirm(`Delete ${person.name} ?`)){
      personService
        .remove(person.id)
        .then( () => {
          setPersons(persons.filter(p => p.id != person.id))
        })
        .catch(() => {
          setNotification(
            `Information of ${person.name} has already been removed from server`
          )
          setNotificationType("error")
          setTimeout(() => {
            setNotification(null)
          }, 5000)
          setPersons(persons.filter(p => p.id != person.id))
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
      <Notification message={notification} type={notificationType}/>
      <Filter value={filter} handler={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm 
        submitHandler={addPerson} 
        name={newName} nameHandler={handleNameChange} 
        number={newNumber} numberHandler={handleNumberChange} 
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} removeHandler={removeHandler} />
    </div>
  )
}

export default App
