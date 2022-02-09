const Person = ({ person, actionClick }) => {
  return (
    <div className="bg-gradient-to-b from-cyan-100 to-blue-200 rounded-lg w-52 grid grid-cols-1 place-content-center h-full sm: mb-3">
      <div className="flex justify-center w-full h-full">
        <img
          src={person.profilePicture}
          className="rounded-full w-1/2 mt-2"
        ></img>
      </div>

      <li className="flex justify-center text-black">{person.name}</li>
      <li className="flex justify-center">{person.number}</li>
      <div className="flex justify-center h-fit">
        <button
          onClick={actionClick}
          className="mb-2 border-2 border-black w-1/3 bg-rose-800 rounded-lg hover:bg-rose-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Person;
