import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import Message from "./components/Message";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="custom/:route_id" element={<Message />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
