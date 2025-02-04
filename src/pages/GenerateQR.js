import { QRCodeCanvas } from "qrcode.react";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; // Import UUID function

function GenerateQR() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [generated, setGenerated] = useState(false);
  const qrRef = useRef(); // Reference for QR Code

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      border: "5px solid blue",
      position: "relative",
      padding: "20px",
      boxSizing: "border-box",
      width: "100vw",
      backgroundColor: "white",
      color: "black"
    },
    blueStrip: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100vw",
      height: "80px",
      backgroundColor: "blue",
      zIndex: "0"
    },
    header: {
      position: "absolute",
      top: "20px",
      left: "10px",
      display: "flex",
      alignItems: "center",
      zIndex: "1"
    },
    logo: {
      width: "50px",
      height: "auto",
      marginLeft: "10px"
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "5px"
    },
    input: {
      padding: "10px",
      fontSize: "16px",
      width: "250px",
      border: "1px solid gray",
      borderRadius: "5px"
    },
    button: {
      margin: "10px",
      padding: "12px 24px",
      fontSize: "18px",
      cursor: "pointer",
      border: "none",
      borderRadius: "8px",
      backgroundColor: "#007BFF",
      color: "white",
      transition: "background-color 0.3s ease",
      fontWeight: "bold"
    },
    qrContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      marginTop: "20px"
    },
    generatedQR: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "blue",
      marginTop: "10px"
    }
  };

  const handleGenerateQR = (e) => {
    e.preventDefault(); // Prevent page reload
    const uniqueQR = `QR-${uuidv4()}`;
    setQrValue(uniqueQR);
    setGenerated(true);
  };

  const handleDownloadQR = () => {
    const canvas = qrRef.current.querySelector("canvas"); // Get the QR code canvas
    const url = canvas.toDataURL("image/png"); // Convert to PNG format
    const a = document.createElement("a");
    a.href = url;
    a.download = "QR_Code.png"; // Download as QR_Code.png
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div style={styles.container}>
      {/* Blue Strip */}
      <div style={styles.blueStrip}></div>

      {/* Header Section */}
      <div style={styles.header}>
        <h1 style={{ color: "white", position: "relative", zIndex: "2" }}>MEDISECURE</h1>
        <img src="https://www.creativefabrica.com/wp-content/uploads/2021/01/29/Valentine-Kawaii-Stethoscope-Vector-Graphics-8184507-1.png" alt="Logo" style={styles.logo} />
      </div>

      {/* Form Section */}
      <form style={styles.form} onSubmit={handleGenerateQR}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required style={styles.input} /><br />
        <input type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} required style={styles.input} /><br />
        <input type="tel" placeholder="Phone No." value={phone} onChange={(e) => setPhone(e.target.value)} required style={styles.input} /><br />
        <textarea placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required style={styles.input}></textarea><br />
        <button type="submit" style={styles.button}>Generate QR Code</button>
      </form>

      {/* Display and Download QR Code */}
      {generated && (
        <div style={styles.qrContainer} ref={qrRef}>
          <h3>Generated QR Code:</h3>
          <QRCodeCanvas value={qrValue} size={200} />
          <p style={styles.generatedQR}>{qrValue}</p>
          <button onClick={handleDownloadQR} style={styles.button}>Download QR</button>
        </div>
      )}

      <button onClick={() => navigate("/home")} style={styles.button}>Back</button>
    </div>
  );
}

export default GenerateQR;
