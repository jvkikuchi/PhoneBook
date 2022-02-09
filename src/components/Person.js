const Person = ({person, actionClick}) => {
  return(

    <div className="bg-white rounded-lg w-52 grid grid-cols-1 place-content-center h-full sm: mb-3">
      <div className="flex justify-center w-full h-full">

        <img src='https://www.pinpng.com/pngs/m/53-531620_png-file-person-icon-png-free-transparent-png.png' className="rounded-full w-1/2"></img>
      </div>
      
      <li className="flex justify-center text-black">{person.name}</li>
      <li className="flex justify-center">{person.number}</li>
      <div className="flex justify-center h-fit">
        <button onClick={actionClick} className="border-2 border-black w-1/3 bg-red-200 rounded-lg">Delete</button>
      </div>
    

    
    </div>

  )
}

export default Person