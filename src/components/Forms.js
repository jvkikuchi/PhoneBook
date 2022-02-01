const Forms = ({nameValue,nameChange, numberValue, numberChange, addPerson}) => {
  return(
    <div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={nameValue} onChange={nameChange}></input>
          <br></br>
          number: <input value={numberValue} onChange={numberChange}></input>
        </div>
        <button type="submit">add</button>
      </form>
    </div>
    
  )
}

export default Forms