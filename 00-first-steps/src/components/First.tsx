import ItemCounter from "./ItemCounter";
// In React, <> and </> are called fragments. They let you group multiple elements without adding extra nodes to the DOM.

// Purpose:
// A fragment allows you to return several elements from a component without wrapping them in a parent <div> or other HTML tag.

// Example:
const listOfCounters = [1, 2, 3];

function First() {
  return (
    <>
      <h1>My First Component</h1>
      <p>This is a simple component.</p>

      {listOfCounters.map((counter) => (
        <ItemCounter key={counter} initialCount={counter} />
      ))}
    </>
  );
}

export default First;
