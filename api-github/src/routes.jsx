import React from "react";
import { Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";

import MainPage from "./pages/Main";
import RepositoriesPage from "./pages/RepositoriesPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/:login/repositories" element={<RepositoriesPage />}/>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
