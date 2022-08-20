import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ user }) => {
  let navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    let authenticated = false;
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      authenticated = true;
    }
    if (!authenticated) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <p className="text-success">Welcome your login token is : {token}</p>
    </div>
  );
};

export default Profile;
