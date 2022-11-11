import LoginForm from "../pages/LoginForm";
import RegisterForm from "../pages/RegisterForm";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/RegisterForm" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
