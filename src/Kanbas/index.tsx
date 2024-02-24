import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./index.css";

function Kanbas() {
  return (
    <>
    <div className="wd-modules-menu-bar d-block d-sm-none fa-2x">
      
    </div>
    <div className="d-flex">
      <div className="d-none d-sm-block fa-2x">
        <KanbasNavigation/>
      </div>
      <div style={{ flexGrow: 1 }}>
      <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/*" element={<h1>Courses</h1>} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>

      </div>
    </div>
    </>
);}
export default Kanbas;