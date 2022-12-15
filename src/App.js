import Chat from "./components/Chat/Chat";

function App() {
  return (
    <div className="container">
      <Chat 
        avatar="user-1"
        name="Александр"
      />
      <Chat 
        avatar="user-2"
        name="Евгений"
      />
    </div>
  );
}

export default App;
