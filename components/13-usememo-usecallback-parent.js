import React, { useState, useCallback } from "react";
// import {useMemo} from 'react'
import UseMemoCallbackChild from "./13-usememo-usecallback-child";

const UseMemoCallbackParent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Charvit");

//   const person = {
//     fn: "c",
//     ln: "z",
//   };

//   const memoizedPerson = useMemo(() => person, []);

    const clickHandler = () => {};

    const memoizedClickHandler=useCallback(clickHandler, [])

  console.log("Use Memo Callback Parent");
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        Count : {count}
      </button>
      <button onClick={() => setName("Zalavadiya")}>Change Name</button>
      {/* <UseMemoCallbackChild name={name} person={memoizedPerson} /> */}
      <UseMemoCallbackChild  name={name} clickHandler={memoizedClickHandler}/>
    </div>
  );
};

export default UseMemoCallbackParent;
