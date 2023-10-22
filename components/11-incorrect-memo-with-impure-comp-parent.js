import React, { useState } from "react";
import { MemoizedChildIncMemoTwo } from "./11-incorrect-memo-with-impure-comp-child";

const ParentIncMemoTwo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Charvit");

  console.log("Parent Incorrect Memo Two");
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        Parent Incorrect Memo Two : {count}
      </button>
      <button onClick={() => setName("Zalavadiya")}>Change Name</button>
      <MemoizedChildIncMemoTwo name={name}/>
    </div>
  );
};

export default ParentIncMemoTwo;
