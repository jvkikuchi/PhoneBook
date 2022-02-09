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
      profilePicture: `https://picsum.photos/200/200`
    }
    
    let personExists = false;

    persons.map((person) => person.name === newName ? personExists = true : personExists) 

    if(personExists){
      if((window.confirm(`${newName} already exist, replace old number?`))){
        console.log(personExists);
        const personToUpdate = persons.find(person => person.name === newPerson.name)
        console.log(personToUpdate)
        const personUpdated = {...personToUpdate, number: newNumber}
        console.log(personUpdated)

        phoneService
          .update(personUpdated.id, personUpdated)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== personUpdated.id ? person : returnedPerson))
            setNewNumber('')
            setNewName('')
          })
      }
    } else{
      console.log(personExists);
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
    const personToDelete = persons.find(person => person.id === id)
    
    if(window.confirm(`Delete ${personToDelete.name}?`)){
      phoneService.remove(personToDelete.id)
      setPersons(persons.filter(person => person.id !== personToDelete.id))

    }
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
      
      <div  className="flex flex-col items-center sm:mt-4 w-full h-fit">
        <ul  className=" sm:grid gap-2 grid-cols-3 mt-2">
            {persons.map((person,i) => 
                <Person key={i} person={person} actionClick={() => {remove(person.id)}} />
            )}
        </ul>
      </div>
    </div>
  )
}

export default App