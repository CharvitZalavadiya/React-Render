import React from "react";

const UseMemoCallbackChild = ({ name }) => {
  console.log("Use Memo Callback Child");
  return (
    <div>
      Hello {name}
    </div>
  );
};

export default UseMemoCallbackChild;
export const MemoizedUseMemoCallbackChild = React.memo(UseMemoCallbackChild);
