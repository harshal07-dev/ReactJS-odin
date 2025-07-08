function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  const listAnimal = animals.map((animal) => <li key={animal}>{animal}</li>);
  return (
    <div>
      <h1>New animals List</h1>
      <ul>{listAnimal}</ul>
    </div>
  );
}

export default App;
