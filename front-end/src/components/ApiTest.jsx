// src/components/ApiTest.jsx
import React, { useEffect } from "react";
import { testConnection } from "../api/api"; // path to your api.js

function ApiTest() {
  useEffect(() => {
    testConnection()
      .then(res => console.log("API response:", res.data))
      .catch(err => console.error("API error:", err));

    // get()
  }, []);

  // async function get() {
    
  //   const res = await fetch("https://agile-backend-ddva.onrender.com/projects")
  //   const json = await res.json()
  //   console.log(json)
  // }

  return (
    <div className="p-2 border rounded text-green-700 mb-4">
      API Test Running – check console for results
    </div>
  );
}

export default ApiTest;