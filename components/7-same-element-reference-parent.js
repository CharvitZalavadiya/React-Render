import React, {useState} from "react";

const ParentOptimize = ({children}) => {
  const [count, setCount] = useState(0);
  console.log("Parent Optimize");
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        Parent : {count}
      </button>
        {children}
    </div>
  );
};

export default ParentOptimize;
