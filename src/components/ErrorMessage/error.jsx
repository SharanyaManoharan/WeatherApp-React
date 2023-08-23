import React from "react";
import "./error.css";

const ErrorMessage = ({ data }) => {
return <p className="error font-bold text-2xl text-red-500 mb-4">{data}</p>;
  };
  

export default ErrorMessage; 