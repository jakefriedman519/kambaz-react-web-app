import { Route, Routes } from "react-router";
import CourseNavigation from "./Navigation.tsx";
import { Navigate } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor.tsx";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table.tsx";
import NavigationCollapsible from "./NavigationCollapsible.tsx";

export default function Courses() {
  return (
    <div id="wd-courses">
      <div className="mt-3 d-none d-md-block">
        <h2 className="text-danger">
          <FaAlignJustify className=" fs-4 me-4" />
          Course 1234
          <hr />
        </h2>
      </div>
      <div className="d-md-none sticky-top">
        <NavigationCollapsible />
      </div>
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="Quizzes" element={<h2>Quizzes</h2>} />
            <Route path="Grades" element={<h2>Grades</h2>} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
