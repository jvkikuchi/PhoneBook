const Forms = ({nameValue,nameChange, numberValue, numberChange, addPerson}) => {
  return(
    <div>
      <h2 className="bg-blue-200">Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={nameValue} onChange={nameChange} className="border-2 solid"></input>
          <br></br>
          Number: <input value={numberValue} onChange={numberChange} className="border-2 solid"></input>
        </div>
        <button type="submit" className="border-2 solid border-slate-700">add</button>
      </form>
    </div>
    
  )
}

export default Forms