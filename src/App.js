import "./App.css";
import Header from "./components/Header";
import Newcomponent from "./components/Newcomponent";

function App() {
  console.log("Cargando APP");
  return (
    <div className="App">
      <Header mensaje="HOLA MUNDO"></Header>
      <Newcomponent></Newcomponent>
    </div>
  );
}

export default App;
