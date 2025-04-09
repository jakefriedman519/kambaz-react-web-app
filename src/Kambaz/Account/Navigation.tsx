import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const active = (path: string) =>
    pathname.includes(path) ? "active" : "text-danger";
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          to={`/Kambaz/Account/${link}`}
          className={`list-group-item border border-0 ${pathname.includes(link) ? "active" : "text-danger"}`}
        >
          {link}
        </Link>
      ))}
      {currentUser && currentUser.role === "ADMIN" && (
        <Link
          to={`/Kambaz/Account/Users`}
          className={`list-group-item border border-0 ${active("Users")}`}
        >
          {" "}
          Users{" "}
        </Link>
      )}
    </div>
  );
}
