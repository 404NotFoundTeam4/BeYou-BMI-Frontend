import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/css/App.css";
import Navbar from "../components/Navbar";
import About from "./About";
import Login from "./Login";
import ProtectedRoute from "../middlewares/ProtectedRoute"
import Statistics from "./Statistics";
import Navbar from "../components/Navbar";
import About from "./About";
import BMIForm from "./BMIform";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element = {<ProtectedRoute/>}> */}
        <Route element={<Navbar />}>
          <Route path="/about" element={<About />} />
          </Route>
        {/* </Route> */}
          {/* เส้นทาง Login แบบไม่ต้องมี Navbar */}
        <Route path="/login" element={<Login />} />
         <Route path="/" element={<Login />} />
        <Route element={<Navbar />}>
          <Route path="/" element={<About />} />
          <Route path="/bmi/statistics" element={<Statistics />} />
          
        </Route>
      </Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<About />} />
        <Route path="/form" element={<BMIForm />} />
      </Route>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
