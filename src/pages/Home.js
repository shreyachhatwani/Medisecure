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
    home: {
      textAlign: "center",
      marginTop: "100px",
      display: "flex",
      flexDirection: "column",
      gap: "30px"
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
      width: "250px"
    }
  };

  return (
    <div style={styles.homeContainer}>
      <div style={styles.header}>
        <h1>MEDISECURE</h1>
        <img src="https://www.creativefabrica.com/wp-content/uploads/2021/01/29/Valentine-Kawaii-Stethoscope-Vector-Graphics-8184507-1.png" alt="Logo" style={styles.logo} />
      </div>
      <div style={styles.home}>
        <Link to="/generate-qr"><button style={styles.button}>Generate ID</button></Link>
        <Link to="/download-qr"><button style={styles.button}>Download ID</button></Link>
        <Link to="/fetch-records"><button style={styles.button}>Fetch Records</button></Link>
        <Link to="/generate-link"><button style={styles.button}>Generate Link</button></Link>
      </div>
    </div>
  );
}

export default Home;
