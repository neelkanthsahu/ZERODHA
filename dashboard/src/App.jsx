import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/*" element={<Home />} />

      {/* Dashboard with nested routes
      <Route path="/dashboard/*" element={<Dashboard />} /> */}
    </Routes>
  );
}
