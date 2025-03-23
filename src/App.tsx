import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './styles/App.css'

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/leads" element={<Leads />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<NotFound />} /> Página 404 */}
    </Routes>
  </Router>
  );
}

export default App
