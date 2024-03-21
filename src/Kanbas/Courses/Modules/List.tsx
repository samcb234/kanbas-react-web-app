import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();

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
            {moduleList.filter((module: any) => module.course == courseId)
              .map((module, index) => (
                <li key={index}
                  className="list-group-item">
                  <div>
                    <FaEllipsisV className="me-2" />
                    {module.name}
                    {module.description}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaPlusCircle className="ms-2" />
                      <FaEllipsisV className="ms-2" />
                      <button className="btn btn-success"
                        onClick={() => dispatch(setModule(module))}>
                        Edit
                      </button>

                      <button className="btn btn-danger delete-button"
                        onClick={() => dispatch(deleteModule(module._id))}>
                        Delete
                      </button>
                    </span>


                  </div>
                  <ul className="list-group">
                      {module.lessons?.map((lesson: any, index: number) => (
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
                </li>
              ))}
          </ul>
          <div>
            <div className="row">
              <div className="col-3">
                <input value={module.name}
                  onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))} />
              </div>
              <div className="col-3">
                <button className="btn btn-success" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
                <button className="btn btn-primary" onClick={() => dispatch(updateModule(module))}>
                  Update
                </button>

              </div>
            </div>
            <textarea value={module.description}
              onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))} />
          </div>

        </div>
      </div>
    </>
  );
}
export default ModuleList;