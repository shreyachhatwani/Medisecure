import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  
  const styles = {
    loginContainer: {
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
      gap: "10px"
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
    }
  };

  return (
    <div style={styles.loginContainer}>
      <div style={styles.header}>
        <h1>MEDISECURE</h1>
        <img src="https://www.creativefabrica.com/wp-content/uploads/2021/01/29/Valentine-Kawaii-Stethoscope-Vector-Graphics-8184507-1.png" alt="Logo" style={styles.logo} />
      </div>
      <form
        style={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/home");
        }}
      >
        <input type="email" placeholder="Email" required style={styles.input} /><br />
        <input type="password" placeholder="Password" required style={styles.input} /><br />
        <select style={styles.input}>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select><br />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}

export default Login;
