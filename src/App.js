import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Todo from "./pages/Todo";
import Contactos from "./pages/Contactos";
import HeaderNav from "./components/HeaderNav";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <HeaderNav></HeaderNav>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route
          path="/calendario"
          element={<div>CALENDARIO EN CONSTRUCCION</div>}
        />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
