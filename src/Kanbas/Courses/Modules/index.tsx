import ModuleList from "./List";
function Modules() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <ModuleList />
        </div>
        <div className="col col-lg-3">
          <div className="flex-grow-0 me-2 d-none d-lg-block" style={{ width: "250px" }}>
            <h3>Course Status</h3>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <button className="btn btn-light">Unpublish</button>
              <button className="btn btn-success">Published</button>
            </div>
            <h3>Comming Up</h3>
            <a href="#">View Calendar</a>
            <ul className="list-group">
              <li className="list-group-item">
                <a href="#">lecture 1</a>
              </li>
              <li className="list-group-item">
                <a href="#">lecture 2</a>
              </li>
              <li className="list-group-item">
                <a href="#">lecture 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modules;