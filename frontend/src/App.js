import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import Profile from "./components/auth/Profile";
import Register from "./components/auth/Register";
import NavBar from "./components/NavBar";
import "./style.css";
import { Routes, Route } from "react-router-dom";
import {Row} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Row className="justify-content-center mt-5">
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/logout" exact element={<Logout />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/profile" exact element={<Profile />} />
        </Routes>
      </Row>
    </div>
  );
}

export default App;
