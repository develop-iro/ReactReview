// Out constants and variables prevents re-declaration in the component.
const nameProfile = "Iro Developer";
const listOfSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
];
const animalObject = { name: "Fluffy", species: "Cat", age: 3 };

function MyAwesomeApp() {
  return (
    <>
      <h1>My Awesome App</h1>
      <p>{nameProfile}</p>
      <ul>
        {listOfSkills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <p style={{ fontWeight: "bold" }}>
        {animalObject.name} is a {animalObject.age}-year-old{" "}
        {animalObject.species}.
      </p>
    </>
  );
}

export default MyAwesomeApp;
