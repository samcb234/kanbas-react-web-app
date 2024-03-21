import { useLocation, useParams } from "react-router"

function CourseBreadCrumb(){
    const {courseId} = useParams()
    const l = useLocation()
    const coursePage = l.pathname.split('/')[4]
    return(
        <div className="d-none d-md-block">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                <a href="#">{courseId}</a>
              </li>
              <li className="breadcrumb-item">
                {coursePage}
              </li>
            </ol>
            <hr />
          </div>
    )
}

export default CourseBreadCrumb;