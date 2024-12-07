import Home from "./Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import QuickDraw from "./QD/QuickDraw";
import QuickDrawTermsAndConditions from "./QD/QuickDrawTermsAndConditions";
import QuickDrawPrivacyPolicy from "./QD/QuickDrawPrivacyPolicy";
import AutotokPrivacyPolicy from "./Autotok/AutotokPrivacyPolicy";
import AutotokTermsOfService from "./Autotok/AutotokTermsOfService";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/qd" element={<QuickDraw />} />
        <Route path="/qd/pp" element={<QuickDrawPrivacyPolicy />} />
        <Route path="/qd/tc" element={<QuickDrawTermsAndConditions />} />

        <Route path="/autotok/pp" element={<AutotokPrivacyPolicy />} />
        <Route path="/autotok/tos" element={<AutotokTermsOfService />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
