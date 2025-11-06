import { useState } from "react";

export const useCounter = (initialValue = 1) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : prev));

  return { count, increment, decrement };
};
