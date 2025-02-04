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

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="me-3 ms-3">
      <div className="row mb-3">
        <FormGroup>
          <FormLabel htmlFor="wd-name">Assignment Name </FormLabel>
          <FormControl id="wd-name" defaultValue="A1 - ENV + HTML" />
        </FormGroup>
      </div>
      <div className="row mb-3">
        <div>
          <FormControl as="textarea" id="wd-description">
            The assignment is available online. Submit a link to the landing
            page of your Kambaz application running on Netlify.
          </FormControl>
        </div>
      </div>
      <FormGroup controlId="wd-assignment-editor-points" className="row mb-3">
        <FormLabel className="wd-assignment-editor-label col-4 col-form-label">
          Points
        </FormLabel>
        <div className="col-8">
          <FormControl defaultValue={100} />
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
              <FormControl type="date" defaultValue="2024-05-13" />
            </FormGroup>
            <div className="row">
              <div className="col-6">
                <FormGroup controlId="wd-available-from">
                  <FormLabel className="fw-bold mb-1">Available From</FormLabel>
                  <FormControl type="date" defaultValue="2024-05-06" />
                </FormGroup>
              </div>
              <div className="col-6">
                <FormGroup controlId="wd-available-until">
                  <FormLabel className="fw-bold mb-1">
                    Available Until
                  </FormLabel>
                  <FormControl type="date" defaultValue="2024-05-13" />
                </FormGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="float-end mb-3">
        <div className="d-flex">
          <Button variant="secondary" className="me-1">
            Cancel
          </Button>
          <Button variant="danger">Save</Button>
        </div>
      </div>
    </div>
  );
}
