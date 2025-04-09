import { Button, FormControl, InputGroup, ListGroup } from "react-bootstrap";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import {
  AssignmentBeginningControls,
  AssignmentEndControls,
} from "./AssignmentControls.tsx";
import { MdArrowDropDown } from "react-icons/md";
import { IoEllipsisVertical } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAssignments, setCreating } from "./reducer.ts";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import * as coursesClient from "../client.ts";
function formatDate(isoString: string): string {
  const [year, month, day] = isoString.slice(0, 10).split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
}

export default function Assignments() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const createAssignment = () => {
    const id = uuidv4();
    dispatch(setCreating(true));
    navigate(`${id}`);
  };
  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(
      cid as string,
    );
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);
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
        {currentUser.role === "FACULTY" && (
          <div>
            <Button
              variant="secondary"
              className="me-1"
              id="wd-add-assignment-group"
            >
              <BsPlus className="fs-5" />
              Group
            </Button>
            <Button
              variant="danger"
              id="wd-add-assignment"
              onClick={createAssignment}
            >
              <BsPlus className="fs-5" />
              Assignment
            </Button>
          </div>
        )}
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
              {currentUser.role === "FACULTY" && <BsPlus className="fs-3" />}
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
        </ListGroup.Item>
        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <ListGroup.Item className="p-3 ps-1 wd-assignment d-flex justify-content-between align-items-center">
              <div className="wd-assignment-details d-flex align-items-center">
                {currentUser.role === "FACULTY" && (
                  <AssignmentBeginningControls />
                )}
                <div>
                  <div>
                    {currentUser.role === "FACULTY" ? (
                      <a
                        href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                        className="wd-assignment-link"
                        onClick={() => dispatch(setCreating(false))}
                      >
                        {assignment.title}
                      </a>
                    ) : (
                      <span className="wd-assignment-link">
                        {assignment.title}
                      </span>
                    )}
                  </div>
                  <div className="fs-6">
                    <span className="text-danger">Multiple Modules</span> |{" "}
                    <strong>Not available until</strong>{" "}
                    {formatDate(
                      new Date(assignment.availableFrom).toISOString(),
                    )}{" "}
                    at 12:00am |
                    <br />
                    <strong>Due</strong>{" "}
                    {formatDate(new Date(assignment.due).toISOString())} at
                    11:59pm | {assignment.points} pts
                  </div>
                </div>
              </div>
              {currentUser.role === "FACULTY" && (
                <AssignmentEndControls assignmentId={assignment._id} />
              )}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}
