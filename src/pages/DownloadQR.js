import React from "react";
import { useNavigate } from "react-router-dom";

function DownloadQR() {
  const navigate = useNavigate();
  return (
    <div className="download-qr">
      <h1>MEDISECURE</h1>
      <button>Download QR Code</button>
      <button onClick={() => navigate("/home")}>Back</button>
    </div>
  );
}

export default DownloadQR;
