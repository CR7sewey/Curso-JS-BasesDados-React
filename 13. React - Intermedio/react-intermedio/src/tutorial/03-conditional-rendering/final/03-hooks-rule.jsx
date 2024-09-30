import { useState, useEffect } from "react";

const Example = () => {
  const [condition, setCondition] = useState(true);
  // if (condition) {
  //   // nao funciona
  //   const [state, setState] = useState(false);
  // }

  if (condition) {
    return <h2>Hello There</h2>;
  }
  // tambem vai falhar
  useEffect(() => {
    console.log("hello there");
  }, []);
  return <h2>example</h2>;
};

export default Example;
