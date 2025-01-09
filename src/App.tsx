import Labs from "./Labs";
import { HashRouter, Navigate, Routes } from "react-router-dom";
import { Route } from "react-router";
import Kambaz from "./Kambaz";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Kambaz" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kambaz/*" element={<Kambaz />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
