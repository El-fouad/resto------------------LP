import { useState } from "react";
import "./App.css";
import NavBar from "./component/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Features" element={<h1>Features</h1>} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/AbouUs" element={<About />} />
          <Route path="/*" element={<h1>error 404</h1>} />
        </Routes>
    </>
  );
}

export default App;
