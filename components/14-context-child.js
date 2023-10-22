import React, { useContext } from "react";
import {CountContext} from './14-context-parent'

export const ContextChildA = () => {
  console.log("Context Child A");
  return (
    <div>
      Child A
      <ContextChildB />
    </div>
  );
};

export const MemoizedContextChildA = React.memo(ContextChildA)            //video 15 only

export const ContextChildB = () => {
  console.log("Context Child B");
  return (
    <div>
      Child B
      <ContextChildC />
    </div>
  );
};
export const ContextChildC = () => {
  const count = useContext(CountContext);
  console.log("Context Child C");
  return <div>Child C {count}</div>;
};
