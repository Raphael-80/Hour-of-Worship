import Home from "./pages/Home";
import Register from "./pages/register";
import { Routes, Route } from "react-router-dom";
import Success from "./pages/success";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
};

export default App;
