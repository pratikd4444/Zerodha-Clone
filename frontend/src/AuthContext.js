// // frontend/src/AuthContext.js
// import React, { createContext, useState, useEffect } from "react";

// // 1. Create the Context (The storage warehouse)
// export const AuthContext = React.createContext();

// // 2. Create the Provider (The component that wraps your app and shares data)
// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // When the user opens the tab, check if they were already logged in previously
//   useEffect(() => {
//     const userSession = localStorage.getItem("isLoggedIn");
//     if (userSession === "true") {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   // Function to call when someone signs up or logs in successfully
//   const loginGlobal = () => {
//     setIsLoggedIn(true);
//     localStorage.setItem("isLoggedIn", "true");
//   };

//   // Function to call when someone clicks logout
//   const logoutGlobal = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem("isLoggedIn");
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, loginGlobal, logoutGlobal }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };