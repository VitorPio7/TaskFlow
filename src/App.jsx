import React from "react";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import InfoProjects from "./pages/InfoProjects";
import CreateProject from "./pages/CreateProject";
import { Routes, Route } from "react-router";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="infoProject" element={<InfoProjects />} />
        <Route path="creatProject" element={<CreateProject />} />
      </Route>
    </Routes>
  );
}

export default App;
