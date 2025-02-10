import { Link } from "react-router-dom";
import { useLocation } from "react-router";
export default function AccountNavigation() {
  const links = ["Signin", "Signup", "Profile"];
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
    </div>
  );
}
