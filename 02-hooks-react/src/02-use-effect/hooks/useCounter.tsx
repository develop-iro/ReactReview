import { useState } from "react";

type Props = {
  initialValue?: number;
};

export const useCounter = ({ initialValue = 1 }: Props) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
};
