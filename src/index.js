import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  About,
  Notes,
  VideoUpload,
  Home
} from "./components"

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/vid_upload" element={<VideoUpload />} />
      <Route path="/notes" element={<Notes />} />
    </Routes>
  </Router>,
  rootElement
);
