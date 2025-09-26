import { useUserCounter } from "../hooks/userCounter";
import type { CSSProperties } from "react";

// Create a simple item counter component in React.
// The component should display a number and have two buttons: "Increment" and "Decrement".
// Clicking "Increment" should increase the number by 1, and clicking "Decrement" should decrease the number by 1.
// Ensure that the number does not go below 0.
const styles: { [key: string]: CSSProperties } = {
  counter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    margin: "0 8px",
    padding: "8px 16px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#1976d2",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.2s",
  },
};

/**
 * 
In TypeScript, both interface and type can describe the shape of props for React components, but there are some differences:

interface
Can be extended (inheritance) and merged (declaration merging).
Preferred for object shapes and public APIs.
Syntax is more familiar for OOP developers.
type
Can describe primitives, unions, intersections, and objects.
Cannot be merged, but can be composed with & (intersection).
More flexible for complex types.
Summary:

Use interface for objects and when you want to extend or merge types.
Use type for unions, intersections, or when you need more flexibility.
For React props, both work, but interface is often preferred for consistency and extendability.
 */

type ItemCounterProps = {
  initialCount: number;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ItemCounterPropsTS {
  initialCount: number;
  optionalProp?: string;
  onCountChange?: (newCount: number) => void;
  style?: React.CSSProperties;
}

const ItemCounter = (props: ItemCounterProps) => {
  const { count, increment, decrement, reset } = useUserCounter(
    props.initialCount
  );

  return (
    <div>
      <h2>Item Counter</h2>
      <p>Count: {count}</p>

      <button style={styles.button} onClick={decrement}>
        Decrement
      </button>
      <button style={styles.button} onClick={increment}>
        Increment
      </button>
      <button style={styles.button} onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default ItemCounter;
