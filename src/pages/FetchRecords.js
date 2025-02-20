import React from "react";
import { useNavigate } from "react-router-dom";

function FetchRecords() {
  const navigate = useNavigate();

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      border: "5px solid blue",
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
      zIndex: "0" // Fix: Ensures blue strip is behind everything
    },
    header: {
      position: "absolute",
      top: "20px",
      left: "10px",
      display: "flex",
      alignItems: "center",
      zIndex: "2" // Keeps MEDISECURE text above the strip
    },
    logo: {
      width: "50px",
      height: "auto",
      marginLeft: "10px"
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      alignItems: "center",
      marginTop: "50px"
    },
    input: {
      padding: "12px",
      fontSize: "18px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      width: "250px",
      textAlign: "center"
    },
    button: {
      padding: "16px 32px",
      fontSize: "20px",
      cursor: "pointer",
      border: "none",
      borderRadius: "8px",
      backgroundColor: "#007BFF",
      color: "white",
      transition: "background-color 0.3s ease",
      fontWeight: "bold",
      width: "250px",
      marginTop: "20px"
    }
  };

  return (
    <div style={styles.container}>
      {/* Blue Strip */}
      <div style={styles.blueStrip}></div>

      <div style={styles.header}>
        <h1 style={{ color: "white", position: "relative", zIndex: "2" }}>MEDISECURE</h1>
        <img 
          src="https://www.creativefabrica.com/wp-content/uploads/2021/01/29/Valentine-Kawaii-Stethoscope-Vector-Graphics-8184507-1.png" 
          alt="Logo" 
          style={styles.logo} 
        />
      </div>
      <form style={styles.form}>
        <input type="text" placeholder="Patient ID" required style={styles.input} /><br />
        <button style={styles.button}>Fetch Records</button>
      </form>
      <button style={styles.button} onClick={() => navigate("/home")}>Back</button>
    </div>
  );
}

export default FetchRecords;
