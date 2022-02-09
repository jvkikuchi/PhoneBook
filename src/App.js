import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import Forms from './components/Forms'
import Filter from './components/Filter'
import phoneService from './services/phone'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [error, setError] = useState(null)
  const [color, setColor] = useState('')

  
  const style = {
    backgroundColor: '#8BC6EC',
    backgroundImage: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)'
  }

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

    persons.map((person) => person.name === newName ? personExists = true : personExists)

    personExists ? 
      errorHandler(`${newName} already exist`)
      :
      phoneService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewNumber('')
          setNewName('')
          errorHandler(`${newName} ADDED`)
          setColor('bg-green-400')
        })
        
  }

  const handleSearch = (event) => {
    setNewSearch(event.target.value)
    console.log(event.target.value)
  }

  const errorHandler = (message) =>{
    setError(message)
    setColor('bg-red-400')

    setTimeout(() => {
      setError(null)
      
    }, 5000)
  }

  const remove = (id) =>{
    console.log(id, 'clicked')
  }

  return (
    <div>
      <h2 >Phonebook</h2>
      <p className={color}>{error}</p>
      <Filter searchValue={newSearch} searchChange={handleSearch} persons={persons}/>
      <Forms nameValue={newName} nameChange={handleName}
             numberValue={newNumber} numberChange={handleNumber}
             addPerson={addPerson}/>
      <h2>Numbers</h2>
      
      <div style={{backgroundColor: '#8BC6EC', backgroundImage: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)'}}  className="flex flex-col items-center sm:mt-4 w-full h-screen">
        <ul className="sm:grid gap-2 grid-cols-3 mt-2">
            {persons.map((person,i) => 
                <Person key={i} person={person} actionClick={() => {}} />
            )}
        </ul>
      </div>
    </div>
  )
}

export default App