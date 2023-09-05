import { HashRouter, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import Home from "./pages/Home";
import ABQD from "./pages/ABQD";
import QDPP from "./pages/QDPP";
import QDTC from "./pages/QDTC";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/QuickDraw" element={<ABQD />} />
        <Route path="/QuickDraw/PP" element={<QDPP />} />
        <Route path="/QuickDraw/TC" element={<QDTC />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
