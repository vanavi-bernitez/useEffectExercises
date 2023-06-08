import React, { useState, useEffect } from "react";

const UserInput = () => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    document.title = inputValue;
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="userInput">
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <p>Input Value: {inputValue}</p>
    </div>
  );
};

export { UserInput };
