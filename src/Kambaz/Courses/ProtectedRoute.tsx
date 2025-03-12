import { Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
export default function ProtectedRoute({ children }: { children: any }) {
  const { cid } = useParams();
  const { enrolledCourseIds } = useSelector(
    (state: any) => state.enrollmentReducer,
  );

  if (enrolledCourseIds.includes(cid)) {
    return children;
  } else {
    return <Navigate to="/Kambaz/Dashboard" />;
  }
}
