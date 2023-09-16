import { HashRouter, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import Home from "./pages/Home";
import ABQD from "./pages/ABQD";
import QDPP from "./pages/QDPP";
import QDTC from "./pages/QDTC";
import QDGT from "./pages/QDGT";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-Q36G4C2FEX");
  }, []);

  return (
    <HashRouter>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-Q36G4C2FEX"
      ></script>
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
