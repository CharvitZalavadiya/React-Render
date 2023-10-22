import React from "react";

const ChildIncMemo = ({ children, name }) => {
  console.log("Child Incorrect Memo");
  return (
    <div>
      Child Incorrect Memo Component {children} {name}
    </div>
  );
};

export default ChildIncMemo;
export const MemoizedChildIncMemo = React.memo(ChildIncMemo);
