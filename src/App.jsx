import React from "react";
import CreatProject from "./pages/CreatProject";
import { Routes, Route } from "react-router";
function App() {
  return (
    <Routes>
      <Route path="/" element={<CreatProject />} />
    </Routes>
  );
}

export default App;
