import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const styles = {
    homeContainer: {
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
      top: "0",
      left: "0",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "left",
      padding: "10px 20px",
      boxSizing: "border-box",
    },
    blueStrip: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "80px", // Increased height for visibility
      backgroundColor: "blue",
      zIndex: "0"
    },
    logo: {
      width: "50px",
      height: "auto",
      marginLeft: "10px"
    },
    home: {
      textAlign: "center",
      marginTop: "150px", // Adjusted to give more space at the top
      display: "flex",
      flexDirection: "column",
      gap: "50px", // Increased gap between buttons
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      padding: "20px 40px", // Larger padding for bigger buttons
      fontSize: "24px", // Larger font size for better readability
      cursor: "pointer",
      border: "none",
      borderRadius: "12px", // Rounder corners for a modern look
      backgroundColor: "#007BFF",
      color: "white",
      transition: "background-color 0.3s ease",
      fontWeight: "bold",
      width: "300px", // Increased width
      textAlign: "center",
    }
  };

  return (
    <div style={styles.homeContainer}>
      {/* Blue Strip */}
      <div style={styles.blueStrip}></div>

      {/* Header Section */}
      <div style={styles.header}>
        <h1 style={{ color: "white", position: "relative", zIndex: "1" }}>MEDISECURE</h1>
        <img 
          src="https://www.creativefabrica.com/wp-content/uploads/2021/01/29/Valentine-Kawaii-Stethoscope-Vector-Graphics-8184507-1.png" 
          alt="Logo" 
          style={styles.logo} 
        />
      </div>

      {/* Navigation Buttons */}
      <div style={styles.home}>
        <Link to="/generate-qr"><button style={styles.button}>Generate QR</button></Link>
        <Link to="/fetch-records"><button style={styles.button}>Fetch Records</button></Link>
        <Link to="/generate-link"><button style={styles.button}>Generate Link</button></Link>
      </div>
    </div>
  );
}

export default Home;
