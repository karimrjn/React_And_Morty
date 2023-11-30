import React from "react";
import Header from "./globals/Header";
import { Outlet } from "react-router-dom";
// import Footer from "./globals/Footer";
// import HomePage from "./pages/HomePage";
// import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
