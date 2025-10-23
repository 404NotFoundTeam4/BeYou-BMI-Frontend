import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/css/App.css";
import Navbar from "../components/Navbar";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route element={<Navbar />}>
          <Route path="/" element={<About />} />
          
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
