import React from "react";

const ChildIncMemoThree = ({ name }) => {
  console.log("Child Incorrect Memo Three");
  return (
    <div>
      Hello {name}
    </div>
  );
};

export default ChildIncMemoThree;
export const MemoizedChildIncMemoThree = React.memo(ChildIncMemoThree);
