import { FaBell, FaBullseye, FaChartBar, FaChartPie, FaDownload, FaFileImport, FaMicrophone } from "react-icons/fa";
import ModuleList from "../Modules/List";
import "./index.css"

function Home() {

  const buttons = [
    {label: "Import Existing Content", icon: <FaDownload className="fs-2"/>},
    {label: "Import From Commons", icon: <FaFileImport className="fs-2"/>},
    {label: "Choose Homepage", icon: <FaBullseye className="fs-2"/>},
    {label: "View Course Stream", icon: <FaChartBar className="fs-2"/>},
    {label: "New Announcement", icon: <FaMicrophone className="fs-2"/>},
    {label: "New Analytics", icon: <FaChartPie className="fs-2"/>},
    {label: "New Course Notifications", icon: <FaBell className="fs-2"/>}
  ]

  return (
    <div className="row">
      <div className="col col-lg-9">
        <ModuleList/>
      </div>
      <div className="col d-none d-lg-block fa-2x">
        <ul className="button-list">
        {buttons.map(b => (
          <li>
            <button className="btn btn-light status-button">{b.icon} {b.label}</button>
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Home;