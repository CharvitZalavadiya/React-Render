import React, { useState } from "react";
import ChildIncMemo from "./10-incorrect-memo-child";

const ParentIncMemo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Charvit");

  console.log("Parent Incorrect Memo");
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        Parent Incorrect Memo : {count}
      </button>
      <button onClick={() => setName("Zalavadiya")}>Change Name</button>
      <ChildIncMemo name={name}>
        <strong>Hello</strong>
      </ChildIncMemo>
    </div>
  );
};

export default ParentIncMemo;
