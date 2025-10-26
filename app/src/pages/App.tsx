import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/css/App.css";
import Navbar from "../components/Navbar";
import About from "./About";
import Statistics from "./Statistics";
import History from "./History";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<About />} />
          <Route path="/bmi/statistics" element={<Statistics />} />
          <Route path="/bmi/history" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
