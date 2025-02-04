import {
  Container,
  ListGroup,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import CourseNavigation from "./Navigation.tsx";
import { Link } from "react-router-dom";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";

export default function NavigationCollapsible() {
  return (
    <Navbar expand="lg" className="p-0 w-100 bg-black mb-3">
      <Container fluid className="p-0">
        <Navbar.Toggle className="bg-white ms-2" />
        <Navbar.Brand>
          <h1 className="text-white">Course 1234</h1>
        </Navbar.Brand>
        <NavDropdown title="" className="text-white me-3" align="end">
          <Nav>
            <CourseNavigation />
          </Nav>
        </NavDropdown>

        <Navbar.Collapse className="bg-secondary border-0">
          <ListGroup className="rounded-0 wd">
            <Link
              to="/Kambaz/Account"
              className="list-group-item text-danger border-0 d-flex align-items-center"
            >
              <FaRegCircleUser className=" text me-2" />
              Account
            </Link>
            <Link
              to="/Kambaz/Dashboard"
              className="list-group-item text-danger border-0 d-flex align-items-center"
            >
              <AiOutlineDashboard className=" text me-2" />
              Dashboard
            </Link>
            <Link
              to="/Kambaz/Dashboard"
              className="list-group-item text-danger border-0 d-flex align-items-center"
            >
              <LiaBookSolid className=" text me-2" />
              Courses
            </Link>
            <Link
              to="/Kambaz/Calendar"
              className="list-group-item text-danger border-0 d-flex align-items-center"
            >
              <IoCalendarOutline className=" text me-2" />
              Calendar
            </Link>
            <Link
              to="/Kambaz/Inbox"
              className="list-group-item text-danger border-0 d-flex align-items-center"
            >
              <FaInbox className=" text me-2" />
              Inbox
            </Link>
            <Link
              to="/Labs"
              className="list-group-item text-danger border-0 d-flex align-items-center"
            >
              <LiaCogSolid className=" text me-2" />
              Labs
            </Link>
          </ListGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
