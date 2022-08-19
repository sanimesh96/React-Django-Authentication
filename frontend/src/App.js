import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import Profile from "./components/auth/Profile";
import Register from "./components/auth/Register";
import Home from "./components/Home";
import "./style.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/logout" exact element={<Logout />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/profile" exact element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
