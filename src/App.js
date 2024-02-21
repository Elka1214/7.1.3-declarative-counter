import React, { useState, useEffect } from "react";

function App() {
  let [counter, changeCounter] = useState(1);

  useEffect(() => {
    window.changeCounter = changeCounter;

    return () => {
      window.changeCounter = undefined;
    };
  }, [changeCounter]);

  return (
    <div>
      <h1>{counter}</h1>
      <h4>{counter}</h4>
    </div>
  );
}

export default App;
