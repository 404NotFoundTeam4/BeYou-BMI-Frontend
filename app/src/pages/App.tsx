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
      
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
      <Route element ={<ProtectedRoute/>}>
        <Route element={<Navbar />}>
          <Route path="/bmi/statistics" element={<Statistics />} />
          <Route path="/bmi/form" element={<BMIForm />} />
          <Route path="/bmi/history" element={<History />} />
        </Route>
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
