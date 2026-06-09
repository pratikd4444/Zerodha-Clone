// frontend/src/landing_page/signup/Logout.js
import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3002/logout", 
          {}, 
          { withCredentials: true } // Crucial for clearing cookies cross-origin
        );

        if (response.data.success) {
          alert("Logged out successfully");
          navigate("/login"); // Redirect to login page after clear
        }
      } catch (error) {
        console.error("Logout failed:", error);
      }
    };

    handleLogout();
  }, [navigate]);

  // Visual feedback while the logout request processes
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Logging you out...</h2>
    </div>
  );
};

export default Logout;