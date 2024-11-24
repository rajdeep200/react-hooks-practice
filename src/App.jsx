import React from "react";
import Memo from "./components/useMemoDemo";
import UseCallbackDemo from "./components/useCallbackDemo";
import "./App.css";
import UseLayoutEffectDemo from "./components/useLayoutEffectDemo";

const App = () => {
  return (
    <div>
      {/* <Memo /> */}
      {/* <UseCallbackDemo /> */}
      <UseLayoutEffectDemo />
    </div>
  );
};

export default App;
