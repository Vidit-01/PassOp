import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register"
import Home from "./pages/Home";
function App() {
  return (
    <>
    <div class="absolute top-0 -z-10 h-full w-full bg-white"><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px]  rounded-full bg-[#4CAF5080] opacity-50 blur-[80px] -translate-x-[50%] translate-y-[20%]"></div></div>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
      <NavBar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/home" element={<Home/>}  />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
