import logo from "./logo.svg";
import "./App.css";
// App.js
import { Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import Home from "./Home";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
