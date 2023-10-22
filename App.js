import React from "react";
import './App.css';
// import UseState from "./components/3-usestate";
// import UseReducer from "./components/4-usereducer";
// import ObjectUseState from "./components/5-state-immutability-object";
// import ArrayUseState from "./components/5-state-immutability-array";
// import Parent from "./components/6-parent";
// import ParentOptimize from "./components/7-same-element-reference-parent";
// import ChildOptimize from "./components/7-same-element-reference-child";
// import GrandParent from "./components/7-same-element-reference-grand-parent";
// import ParentMemo from "./components/8-memo-parent";
// import ParentIncMemo from "./components/9-incorrect-memo-parent";
// import ParentIncMemoTwo from "./components/11-incorrect-memo-with-impure-comp-parent";
// import ParentIncMemoThree from "./components/12-incorrect-memo-with-props-reference-parent";
// import UseMemoCallbackParent from "./components/13-usememo-usecallback-parent";
import ContextParent from "./components/14-context-parent";             // 14, 15, 16
import { ContextChildA } from "./components/14-context-child";          // 16 only

function App() {
  return (
    <div className="App">
      Hello World !
      {/* <UseState/> */}
      {/* <UseReducer/> */}
      {/* <ObjectUseState/>
      <ArrayUseState/> */}
      {/* <Parent/> */}
      {/* <ParentOptimize>
        <ChildOptimize/>
      </ParentOptimize> */}
      {/* <GrandParent/> */}
      {/* <ParentMemo/> */}
      {/* <ParentIncMemo/> */}
      {/* <ParentIncMemoTwo/> */}
      {/* <ParentIncMemoThree/> */}
      {/* <UseMemoCallbackParent/> */}
      {/* <ContextParent/> */}
      {/* 16 */}
      <ContextParent>
        <ContextChildA/>
      </ContextParent>
    </div>
  );
}

export default App;
