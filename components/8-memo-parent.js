import React, { useState } from "react";
import MemoizedChildMemo from "./8-memo-child";

const ParentMemo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Charvit");

  console.log("Parent Memo");
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        ParentMemo : {count}
      </button>
      <button onClick={() => setName("Zalavadiya")}>Change Name</button>
      <MemoizedChildMemo name={name}/>
    </div>
  );
};

export default ParentMemo;
