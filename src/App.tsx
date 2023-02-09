import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import ExtraPage from "./pages/ExtraPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<ExtraPage />} />
    </Routes>
  );
}

export default App;
