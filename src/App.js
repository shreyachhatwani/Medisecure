// App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import DownloadQR from "./pages/DownloadQR";
import FetchRecords from "./pages/FetchRecords";
import GenerateLink from "./pages/GenerateLink";
import GenerateQR from "./pages/GenerateQR";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/generate-qr" element={<GenerateQR />} />
          <Route path="/download-qr" element={<DownloadQR />} />
          <Route path="/fetch-records" element={<FetchRecords />} />
          <Route path="/generate-link" element={<GenerateLink />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
