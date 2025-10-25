import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/css/App.css";
import Navbar from "../components/Navbar";
import About from "./About";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route element={<Navbar />}>
          <Route path="/" element={<About />} />
          
          </Route>
          {/* เส้นทาง Login แบบไม่ต้องมี Navbar */}
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
