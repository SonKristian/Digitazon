import logo from "./logo.svg";
import "./App.css";
// App.js
import { Routes, Route } from "react-router-dom";
import PostMain from "./components/PostMain";
import NavBar from "./components/navbar";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route path="/post/:id" component={NumberPost} /> */}
        <Route path="/Post/:id" component={PostMain} />
      </Routes>
      <PostMain />
    </>
  );
}

export default App;
