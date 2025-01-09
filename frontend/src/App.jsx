import "./App.css";

function App() {
  return (
    <>
      <Text display="hello1" />
      <Text display="hello" />
    </>
  );
}
function Text({ display }) {
  return (
    <div>
      <p>{display}</p>
    </div>
  );
}

export default App;
