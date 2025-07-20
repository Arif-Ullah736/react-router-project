import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  return (
    <div className="w-full min-h-[100vh] bg-black">
      <NavBar isLoggedIn={isLoggedIn} setIsloggedIn={setIsloggedIn}></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login setIsLoggedIn={setIsloggedIn} />} />
        <Route
          path="signup"
          element={<Signup setIsLoggedIn={setIsloggedIn} />}
        />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
