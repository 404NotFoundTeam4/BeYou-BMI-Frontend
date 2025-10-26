import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/css/App.css";
import Navbar from "../components/Navbar";
import About from "./About";
import Login from "./Login";
import ProtectedRoute from "../middlewares/ProtectedRoute";
import Statistics from "./Statistics";
import BMIForm from "./BMIform";
import History from "./History";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route element={<Navbar />}>
          <Route path="/" element={<About />} />
          <Route path="/bmi/statistics" element={<Statistics />} />
          <Route path="/form" element={<BMIForm />} />
          <Route path="/bmi/history" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
