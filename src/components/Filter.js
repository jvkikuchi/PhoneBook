const Filter = ({searchValue, searchChange, persons}) => {

   return(
      <div>
         filter shown with <input value={searchValue} onChange={searchChange}></input>
      </div>
  )
}

export default Filter