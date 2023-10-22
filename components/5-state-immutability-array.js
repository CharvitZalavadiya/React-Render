import React, {useState} from "react";

const initState = ["Charvit", "Zalavadiya"];

const ArrayUseState = () => {
  const [person, setPerson] = useState(initState);

  const addName = () => {
    const newPerson = [...person];
    newPerson.push("Zalavadiya");
    newPerson.push("Charvit");
    setPerson(newPerson);
  };

  console.log("ObjectUseState");

  return (
    <div>
      <button onClick={addName}>Add Name</button>
      {person.map((p) => (
        <div key={p}>{p}</div>
      ))}
    </div>
  );
};

export default ArrayUseState;
