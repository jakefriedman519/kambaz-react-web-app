import CourseStatus from "./Status";
import Modules from "../Modules";
import { useSelector } from "react-redux";
export default function Home() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div className="d-flex" id="wd-home">
      <div className="flex-fill">
        <Modules />
      </div>
      {currentUser.role === "FACULTY" && (
        <div className="d-none d-xl-block me-3">
          <CourseStatus />
        </div>
      )}
    </div>
  );
}
