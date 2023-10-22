import React, { useState } from "react";

const initState = {
  fn: "Charvit",
  ln: "Zalavadiya",
};

const ObjectUseState = () => {
  const [person, setPerson] = useState(initState);
  const changeName = () => {
    const newPerson = { ...person };
    newPerson.fn = "Zalavadiya";
    newPerson.ln = "Charvit";
    setPerson(newPerson);
  };
  console.log("ObjectUseState")
  return (
    <div>
      <button onClick={changeName}>
        {person.fn} {person.ln}
      </button>
    </div>
  );
};

export default ObjectUseState;
