import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; // Import UUID function

function GenerateQR() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [patientId, setPatientId] = useState("");

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
    header: {
      position: "absolute",
      top: "10px",
      left: "10px",
      display: "flex",
      alignItems: "center"
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
    generatedId: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "blue",
      marginTop: "10px"
    }
  };

  const handleGenerateId = (e) => {
    e.preventDefault(); // Prevent page reload
    // Generate a short unique Patient ID
    const uniqueId = "PAT-" + uuidv4().slice(0, 8);
    setPatientId(uniqueId);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>MEDISECURE</h1>
        <img src="https://www.creativefabrica.com/wp-content/uploads/2021/01/29/Valentine-Kawaii-Stethoscope-Vector-Graphics-8184507-1.png" alt="Logo" style={styles.logo} />
      </div>
      <form style={styles.form} onSubmit={handleGenerateId}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required style={styles.input} /><br />
        <input type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} required style={styles.input} /><br />
        <input type="tel" placeholder="Phone No." value={phone} onChange={(e) => setPhone(e.target.value)} required style={styles.input} /><br />
        <textarea placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required style={styles.input}></textarea><br />
        <button type="submit" style={styles.button}>Generate Patient ID</button>
      </form>

      {/* Display the Generated ID */}
      {patientId && (
        <div>
          <h3>Generated Patient ID:</h3>
          <p style={styles.generatedId}>{patientId}</p>
        </div>
      )}

      <button onClick={() => navigate("/home")} style={styles.button}>Back</button>
    </div>
  );
}

export default GenerateQR;
