import React, { useState } from "react";
import ParentOptimize from "./7-same-element-reference-parent";
import ChildOptimize from "./7-same-element-reference-child";

const GrandParent = () => {
  const [newCount, setNewCount] = useState(0);
  console.log("Grand Parent")
  return (
    <div>
      <button onClick={() => setNewCount((nc) => nc + 1)}>
        GrandParent : {newCount}
      </button>
      <ParentOptimize>
        <ChildOptimize/>
      </ParentOptimize>
    </div>
  );
};

export default GrandParent;
