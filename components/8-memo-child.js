import React from "react";

const ChildMemo = () => {
  console.log("Child Memo");
  return <div>Child Memo Component</div>;
};

export default ChildMemo;
export const MemoizedChildMemo = React.memo(ChildMemo);
