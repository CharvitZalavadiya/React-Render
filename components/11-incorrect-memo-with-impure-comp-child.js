import React from "react";

const ChildIncMemoTwo = ({ children, name }) => {
  const date = new Date();
  console.log("Child Incorrect Memo Two");
  return (
    <div>
      Hello {name}. Time is {date.getHours()} : {date.getMinutes()} :{" "}
      {date.getSeconds()}
    </div>
  );
};

export default ChildIncMemoTwo;
export const MemoizedChildIncMemoTwo = React.memo(ChildIncMemoTwo);
