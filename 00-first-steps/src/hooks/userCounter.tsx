import { useState } from "react";

export function useUserCounter(initialCount: number = 0) {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);
  const reset = () => setCount(0);

  return { count, increment, decrement, reset };
}
