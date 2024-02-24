import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
      <div className="d-flex">
        <div className="flex-fill">
          <div className="wd-modules-button-group">
            <button className="btn btn-secondary wd-modules-buttons">Collapse All</button>
            <button className="btn btn-secondary wd-modules-buttons">View Progress</button>
            <select className="wd-modules-buttons">
              <option value="">Publish All</option>
            </select>
            <button className="btn btn-danger wd-modules-buttons">Module</button>
          </div>
          <ul className="list-group wd-modules">
            {modulesList.map((module, index) => (
              <li key={index}
                className="list-group-item"
                onClick={() => setSelectedModule(module)}>
                <div>
                  <FaEllipsisV className="me-2" />
                  {module.name}
                  <span className="float-end">
                    <FaCheckCircle className="text-success" />
                    <FaPlusCircle className="ms-2" />
                    <FaEllipsisV className="ms-2" />
                  </span>
                </div>
                {selectedModule._id === module._id && (
                  <ul className="list-group">
                    {module.lessons?.map((lesson, index) => (
                      <li className="list-group-item" key={index}>
                        <FaEllipsisV className="me-2" />
                        {lesson.name}
                        <span className="float-end">
                          <FaCheckCircle className="text-success" />
                          <FaEllipsisV className="ms-2" />
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default ModuleList;