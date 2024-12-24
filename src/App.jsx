import React from "react";
import CreatProject from "./pages/CreatProject";
import ProjectDetail from "./pages/ProjectDetail";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CreatProject />} />
        <Route path=":id" element={<ProjectDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
