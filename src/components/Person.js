const Person = ({person}) => {
  return(
    <div>

      <li>{person.name} {person.number}</li>
      <button onClick={() => console.log(person.name)} className="border-2 border-black">text</button>
    </div>

  )
}

export default Person