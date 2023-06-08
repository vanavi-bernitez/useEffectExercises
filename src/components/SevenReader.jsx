import React, { useState, useEffect } from "react";

const SevenReader = () => {
  const [counter, setCounter] = useState(0);
  const [isSeven, setIsSeven] = useState(false);

  useEffect(() => {
    if (counter % 10 === 7) {
      setIsSeven(true);
    } else {
      setIsSeven(false);
    }
  }, [counter]);

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={handleIncrement}>Increment</button>
      {isSeven && <p>It's seven</p>}
    </div>
  );
};

export { SevenReader };
