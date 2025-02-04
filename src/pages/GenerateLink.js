import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function GenerateLink() {
  const navigate = useNavigate();
  const [generatedLink, setGeneratedLink] = useState("");

  const generateUniqueLink = () => {
    const uniqueId = Math.random().toString(36).substr(2, 9);
    const link = `https://medisecure.com/access/${uniqueId}`;
    setGeneratedLink(link);
  };

  const shareLink = () => {
    if (navigator.share) {
      navigator.share({
        title: "Medisecure Link",
        text: "Access your secure link here:",
        url: generatedLink
      }).catch((error) => console.log("Error sharing", error));
    } else {
      navigator.clipboard.writeText(generatedLink);
      alert("Link copied to clipboard!");
    }
  };

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
      zIndex: "0" // Fix: Puts the blue strip behind other elements
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
      gap: "15px",
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
      marginTop: "15px"
    },
    linkContainer: {
      marginTop: "20px",
      fontSize: "18px",
      color: "#007BFF",
      wordBreak: "break-word",
      textAlign: "center"
    }
  };

  return (
    <div style={styles.container}>
      {/* Blue Strip */}
      <div style={styles.blueStrip}></div>

      <div style={styles.header}>
        <h1 style={{ color: "white", position: "relative", zIndex: "1" }}>MEDISECURE</h1>
        <img 
          src="https://www.creativefabrica.com/wp-content/uploads/2021/01/29/Valentine-Kawaii-Stethoscope-Vector-Graphics-8184507-1.png" 
          alt="Logo" 
          style={styles.logo} 
        />
      </div>
      <form style={styles.form} onSubmit={(e) => { e.preventDefault(); generateUniqueLink(); }}>
        <input type="text" placeholder="Recipient's Name" required style={styles.input} /><br />
        <input type="text" placeholder="Doctor's Name" required style={styles.input} /><br />
        <input type="email" placeholder="Recipient's Email" required style={styles.input} /><br />
        <button type="submit" style={styles.button}>Generate Link</button>
      </form>
      {generatedLink && (
        <div style={styles.linkContainer}>
          <p>Generated Link: <a href={generatedLink} target="_blank" rel="noopener noreferrer">{generatedLink}</a></p>
          <button style={styles.button} onClick={shareLink}>Share Link</button>
        </div>
      )}
      <button style={styles.button} onClick={() => navigate("/home")}>Back</button>
    </div>
  );
}

export default GenerateLink;
