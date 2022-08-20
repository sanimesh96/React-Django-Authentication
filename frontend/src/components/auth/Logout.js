import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  let navigate = useNavigate();
  useEffect(() => {
    return () => {
      localStorage.removeItem("authenticated");
      localStorage.removeItem("token");
      navigate("/login");
    };
  }, [navigate]);
  return <div>Logout</div>;
};

export default Logout;
