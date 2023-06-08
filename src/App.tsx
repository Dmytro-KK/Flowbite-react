import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Footer from "./components/layout/Footer";
import Article from "./components/article";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/home" Component={Landing} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/article" Component={Article} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
