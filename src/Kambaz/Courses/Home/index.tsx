import CourseStatus from "./Status";
import Modules from "../Modules";

export default function Home() {
  return (
    <div className="d-flex" id="wd-home">
      <div className="flex-fill">
        <Modules />
      </div>
      <div className="d-none d-xl-block me-3">
        <CourseStatus />
      </div>
    </div>
  );
}
