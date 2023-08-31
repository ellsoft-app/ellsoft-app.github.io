import { HashRouter, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import Home from "./pages/Home";
import ABQD from "./pages/ABQD";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/QuickDraw" element={<ABQD />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
