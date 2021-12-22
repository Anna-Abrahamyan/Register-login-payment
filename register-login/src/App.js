import "./Pages/Form.css";
import React from "react";
import Register from "./Pages/Register.js";
import Login from "./Pages/Login.js";
import Start from "./Pages/Start";
import Main from "./Pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "materialize-css";
import ProductContextProvider from "./context/ProductContext";

function App() {
  return (
    <ProductContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </Router>
    </ProductContextProvider>
  );
}

export default App;
