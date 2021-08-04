import React from "react";
import Navbar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <div className="app__navbar">
        {/* <Navbar /> */}
      </div>
      <div className="app__sidebar">
        {/* <Sidebar /> */}
        <Login />
      </div>
    </div>
  );
}

export default App;
