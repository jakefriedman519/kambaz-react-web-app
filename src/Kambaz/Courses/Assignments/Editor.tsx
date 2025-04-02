import {
  Button,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
} from "react-bootstrap";
import FormCheckLabel from "react-bootstrap/FormCheckLabel";
import FormCheckInput from "react-bootstrap/FormCheckInput";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer.ts";
import * as coursesClient from "../client.ts";
import * as assignmentsClient from "./client.ts";

export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const [assignment, setAssignment] = useState<any>({});
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const dispatch = useDispatch();
  const { creating } = useSelector((state: any) => state.assignmentReducer);
  const fetchAssignment = () => {
    const assignment = assignments.find((a: any) => a._id === aid);
    if (!assignment) {
      setAssignment({
        _id: aid,
        course: cid,
        availableFrom: "2025-01-01",
        availableUntil: "2025-01-01",
        due: "2025-01-01",
      });
    } else {
      setAssignment(assignment);
    }
  };

  const saveAssignment = async () => {
    if (creating) {
      const newAssignment = await coursesClient.createAssignmentForCourse(
        cid as string,
        assignment,
      );
      dispatch(addAssignment(newAssignment));
    } else {
      await assignmentsClient.updateAssignment(assignment);
      dispatch(updateAssignment(assignment));
    }
  };
  useEffect(() => fetchAssignment(), []);
  return (
    <div id="wd-assignments-editor" className="me-3 ms-3">
      <div className="row mb-3">
        <FormGroup>
          <FormLabel htmlFor="wd-name">Assignment Name </FormLabel>
          <FormControl
            id="wd-name"
            defaultValue={assignment && assignment.title}
            onChange={(e) =>
              setAssignment({ ...assignment, title: e.target.value })
            }
          />
        </FormGroup>
      </div>
      <div className="row mb-3">
        <div>
          <FormControl
            as="textarea"
            id="wd-description"
            defaultValue={assignment.description}
            onChange={(e) =>
              setAssignment({ ...assignment, description: e.target.value })
            }
          >
            {assignment && assignment.description}
          </FormControl>
        </div>
      </div>
      <FormGroup controlId="wd-assignment-editor-points" className="row mb-3">
        <FormLabel className="wd-assignment-editor-label col-4 col-form-label">
          Points
        </FormLabel>
        <div className="col-8">
          <FormControl
            defaultValue={assignment && assignment.points}
            onChange={(e) =>
              setAssignment({ ...assignment, points: e.target.value })
            }
          />
        </div>
      </FormGroup>
      <FormGroup className="row mb-3" controlId="wd-group">
        <FormLabel className="wd-assignment-editor-label col-4 col-form-label">
          Assignment Group
        </FormLabel>
        <div className="col-8">
          <FormSelect>
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          </FormSelect>
        </div>
      </FormGroup>
      <FormGroup className="row mb-3" controlId="wd-display-grade-as">
        <FormLabel className="wd-assignment-editor-label col-4 col-form-label">
          Display grade as
        </FormLabel>
        <div className="col-8">
          <FormSelect>
            <option value="PERCENTAGE">Percentage</option>
          </FormSelect>
        </div>
      </FormGroup>
      <div className="row mb-3">
        <FormLabel
          htmlFor="wd-submission-type"
          className="col-4 wd-assignment-editor-label col-form-label"
        >
          Submission Type
        </FormLabel>
        <div className="col-8">
          <div className="border-1 border rounded-2 p-2">
            <div className="mb-3">
              <FormSelect id="wd-submission-type">
                <option value="ONLINE">Online</option>
              </FormSelect>
            </div>
            <FormGroup controlId="online-entry-options" className="mb-3">
              <FormLabel className="fw-bold mb-1">
                Online Entry Options
              </FormLabel>
              <FormCheck className="mb-3">
                <FormCheckLabel htmlFor="wd-text-entry">
                  Text Entry
                </FormCheckLabel>
                <FormCheckInput
                  id="wd-text-entry"
                  name="online-entry-options"
                />
              </FormCheck>
              <FormCheck className="mb-3">
                <FormCheckLabel htmlFor="wd-website-url">
                  Website URL
                </FormCheckLabel>
                <FormCheckInput
                  id="wd-website-url"
                  name="online-entry-options"
                />
              </FormCheck>
              <FormCheck className="mb-3">
                <FormCheckLabel htmlFor="wd-media-recordings">
                  Media Recordings
                </FormCheckLabel>
                <FormCheckInput
                  id="wd-media-recordings"
                  name="online-entry-options"
                />
              </FormCheck>
              <FormCheck className="mb-3">
                <FormCheckLabel htmlFor="wd-student-annotation">
                  Student Annotation
                </FormCheckLabel>
                <FormCheckInput
                  id="wd-student-annotation"
                  name="online-entry-options"
                />
              </FormCheck>
              <FormCheck className="mb-3">
                <FormCheckLabel htmlFor="wd-file-upload">
                  File Uploads
                </FormCheckLabel>
                <FormCheckInput
                  id="wd-file-upload"
                  name="online-entry-options"
                />
              </FormCheck>
            </FormGroup>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <FormLabel className="wd-assignment-editor-label col-4 col-form-label">
          Assign
        </FormLabel>
        <div className="col-8">
          <div className="border border-1 rounded-2 p-2">
            <FormGroup controlId="wd-assign-to" className="mb-3">
              <FormLabel className="fw-bold mb-1">Assign To</FormLabel>
              <FormControl defaultValue="Everyone" />
            </FormGroup>
            <FormGroup controlId="wd-due-date" className="mb-3">
              <FormLabel className="fw-bold mb-1">Due</FormLabel>
              <FormControl
                type="date"
                defaultValue={assignment ? assignment.due : "2025-01-01"}
                onChange={(e) =>
                  setAssignment({ ...assignment, due: e.target.value })
                }
              />
            </FormGroup>
            <div className="row">
              <div className="col-6">
                <FormGroup controlId="wd-available-from">
                  <FormLabel className="fw-bold mb-1">Available From</FormLabel>
                  <FormControl
                    type="date"
                    defaultValue={
                      assignment ? assignment.availableFrom : "2025-01-01"
                    }
                    onChange={(e) =>
                      setAssignment({
                        ...assignment,
                        availableFrom: e.target.value,
                      })
                    }
                  />
                </FormGroup>
              </div>
              <div className="col-6">
                <FormGroup controlId="wd-available-until">
                  <FormLabel className="fw-bold mb-1">
                    Available Until
                  </FormLabel>
                  <FormControl
                    type="date"
                    defaultValue={
                      assignment ? assignment.availableUntil : "2025-01-01"
                    }
                    onChange={(e) =>
                      setAssignment({
                        ...assignment,
                        availableUntil: e.target.value,
                      })
                    }
                  />
                </FormGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="float-end mb-3">
        <div className="d-flex">
          <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
            <Button variant="secondary" className="me-1">
              Cancel
            </Button>
          </Link>
          <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
            <Button variant="danger" onClick={saveAssignment}>
              Save
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
