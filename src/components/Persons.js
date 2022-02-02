import Person from "./Person"

const Persons = ({person}) => {
  return(
    <div>
     <ul>

        {person.map((person, i) => <Person key={i} person={person}/>)}
       
     </ul>
    </div>
  )
}

export default Persons