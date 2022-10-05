import { useState } from "react";

const UseMailState = () => {
  const [mailstate, setMailState] = useState(false);
  return { mailstate, setMailState };
};

export default UseMailState;
