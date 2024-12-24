import React from "react";
import CreatProject from "./pages/CreatProject";
import { Routes, Route } from "react-router";
import Sidebar from "./components/Sidebar";
import ProjectDetail from "./pages/ProjectDetail";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route index element={<CreatProject />} />
        <Route path="/:id" element={<ProjectDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
