import { HashRouter, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import Home from "./pages/Home";
import ABQD from "./pages/QD/ABQD";
import QDPP from "./pages/QD/QDPP";
import QDTC from "./pages/QD/QDTC";
import QDGT from "./pages/QD/QDGT";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/QuickDraw" element={<ABQD />} />
        <Route path="/QuickDraw/get" element={<QDGT />} />
        <Route path="/QuickDraw/PP" element={<QDPP />} />
        <Route path="/QuickDraw/TC" element={<QDTC />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
