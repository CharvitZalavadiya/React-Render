import React, { useState } from "react";
import { MemoizedChildIncMemoThree } from "./12-incorrect-memo-with-props-reference-child";

const ParentIncMemoThree = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Charvit");

  // const person={
  //   fn: "c",
  //   ln: "z",
  // }

  const clickHandler = () => {}

  console.log("Parent Incorrect Memo Three");
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        Parent Incorrect Memo Three : {count}
      </button>
      <button onClick={() => setName("Zalavadiya")}>Change Name</button>
      <MemoizedChildIncMemoThree name={name} clickHandler={clickHandler}/>
    </div>
  );
};

export default ParentIncMemoThree;
