import { Button, FormControl, InputGroup, ListGroup } from "react-bootstrap";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import {
  AssignmentBeginningControls,
  AssignmentEndControls,
} from "./AssignmentControls.tsx";
import { MdArrowDropDown } from "react-icons/md";
import { IoEllipsisVertical } from "react-icons/io5";
import { assignments } from "../../Database";
import { useParams } from "react-router-dom";

function formatDate(isoString: string): string {
  const [year, month, day] = isoString.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
}

export default function Assignments() {
  const { cid } = useParams();
  return (
    <div id="wd-assignments" className="pe-5">
      <div className="mb-3 d-flex justify-content-between">
        <div className="d-flex w-50">
          <InputGroup id="wd-search-assignment">
            <InputGroup.Text>
              <FaMagnifyingGlass />
            </InputGroup.Text>
            <FormControl placeholder="Search for assignments" />
          </InputGroup>
        </div>
        <div>
          <Button
            variant="secondary"
            className="me-1"
            id="wd-add-assignment-group"
          >
            <BsPlus className="fs-5" />
            Group
          </Button>
          <Button variant="danger" id="wd-add-assignment">
            <BsPlus className="fs-5" />
            Assignment
          </Button>
        </div>
      </div>

      <ListGroup className="rounded-0 fs-5">
        <ListGroup.Item id="wd-assignments-title" className="p-0 border-gray">
          <div className="d-flex align-items-center justify-content-between wd-title p-3 ps-2 bg-secondary">
            <span>
              <BsGripVertical className="fs-3" />
              <MdArrowDropDown className="me-2" />
              ASSIGNMENTS
            </span>
            <div className="d-flex align-items-center">
              <div className="border rounded-4 ps-2 pe-2 border-dark border-1 border-opacity-50">
                <span className="fs-6">40% of total</span>
              </div>
              <BsPlus className="fs-3" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
        </ListGroup.Item>
        {assignments
          .filter((assignment) => assignment.course === cid)
          .map((assignment) => (
            <ListGroup.Item className="p-3 ps-1 wd-assignment d-flex justify-content-between align-items-center">
              <div className="wd-assignment-details d-flex align-items-center">
                <AssignmentBeginningControls />
                <div>
                  <div>
                    <a
                      href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                      className="wd-assignment-link"
                    >
                      {assignment.title}
                    </a>
                  </div>
                  <div className="fs-6">
                    <span className="text-danger">Multiple Modules</span> |{" "}
                    <strong>Not available until</strong>{" "}
                    {formatDate(assignment.availableFrom)} at 12:00am |
                    <br />
                    <strong>Due</strong> {formatDate(assignment.due)} at 11:59pm
                    | 100 pts
                  </div>
                </div>
              </div>
              <AssignmentEndControls />
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}
