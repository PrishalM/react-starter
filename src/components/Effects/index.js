import React, { useState, useEffect } from "react";

const Effects = () => {
  const [val, setVal] = useState(0);

  useEffect(() => {
    console.log("I run once");
  }, [val]); // Empty brackets - run on first appearance only

  function handleClick() {
    setVal((prev) => prev + 1);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("I have 3 seconds!");
    }, 3000);

    return () => {
      console.log("I am finished");
    };
  }, []);
  return (
    <div>
      <h1>Val: {val}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Effects;
