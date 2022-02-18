import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import ReleaseProjects from "./components/release-projects/ReleaseProjects";
import Users from "./components/users/Users";
import Login from "./components/login/Login";
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar  />
        <Sidebar  />
        
        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>
          <Route exact path="/users" element={<Users />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route
            exact
            path="/releaseProjects"
            element={<ReleaseProjects />}
            
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
