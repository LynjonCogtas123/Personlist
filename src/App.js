import React, { useState } from "react";
import PersonList from "./PersonList";

function App() {
  const [people, setPeople] = useState([
    { id: 1, name:"John", age: 25 },
    { id: 2, name:"Jane", age: 30 },
    { id: 3, name:"Bob",  age: 40 }
  ]);

  const handleAddPerson = (updatedPeople) => {
    setPeople(updatedPeople);
  };


  return (
    <div>
      <h2>People List</h2>
      <PersonList people={people} onAddPerson={handleAddPerson} />
    </div>
  );
}

export default App;
