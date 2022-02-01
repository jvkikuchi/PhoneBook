import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Forms from './components/Forms'
import Filter from './components/Filter'
import axios from 'axios'
import phoneService from './services/phone'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  
  useEffect(() => {
    phoneService
      .getAll()
      .then(initialContacts =>{
        setPersons(initialContacts)
      })
  }, [])


  const handleName = (event) => {
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName, 
      number: newNumber, 
      id: persons.length + 1
    }
    
    let personExists = false;

    persons.map((person) => {
      if(person.name === newName){
        personExists = true;
        alert(`${newName} already exists on the agenda`)
      }
    })
    
    if(!personExists){
      phoneService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const handleSearch = (event) => {
    setNewSearch(event.target.value)
    console.log(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchValue={newSearch} searchChange={handleSearch} persons={persons}/>
      <Forms nameValue={newName} nameChange={handleName}
             numberValue={newNumber} numberChange={handleNumber}
             addPerson={addPerson}/>
      <h2>Numbers</h2>
      <Persons person={persons} />
    </div>
  )
}

export default App