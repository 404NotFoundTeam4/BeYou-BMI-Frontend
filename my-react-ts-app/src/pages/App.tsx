import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "./About";
import BMIForm from "./BMIform";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<About />} />
        <Route path="/form" element={<BMIForm />} />
      </Route>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
