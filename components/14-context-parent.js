import React, { useState } from "react";
// import { ContextChildA } from "./14-context-child";                //14
// import {MemoizedContextChildA} from './14-context-child'          //15
export const CountContext = React.createContext();
const CountProvider = CountContext.Provider;

// const ContextParent = () => {
const ContextParent = ({children}) => {             // 16
  const [count, setCount] = useState(0);
  console.log("Context Parent");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count : {count}</button>
      {/* 14 */}
      {/* <CountProvider value={count}>
        <ContextChildA/>
      </CountProvider> */}

      {/* 15 */}
      {/* <CountProvider value={count}>
        <MemoizedContextChildA/>
      </CountProvider> */}

      {/* 16 */}
      <CountProvider value={count}>
        {children}
      </CountProvider>
    </div>
  );
};

export default ContextParent;
