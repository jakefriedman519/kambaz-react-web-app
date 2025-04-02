import { useState } from "react";
import { FormControl } from "react-bootstrap";
import FormCheckInput from "react-bootstrap/FormCheckInput";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [module, setModule] = useState({
    id: 1,
    name: "NodeJS Module",
    description: "Intro to NodeJS",
    course: "Web Development",
  });
  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary me-2"
        href={`${REMOTE_SERVER}/lab5/assignment`}
      >
        Get Assignment
      </a>
      <a
        id="wd-retrieve-modules"
        className="btn btn-primary"
        href={`${MODULE_API_URL}`}
      >
        Get Module
      </a>
      <hr />
      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary me-2"
        href={`${REMOTE_SERVER}/lab5/assignment/title`}
      >
        Get Assignment Title
      </a>
      <a
        id="wd-retrieve-module-name"
        className="btn btn-primary "
        href={`${MODULE_API_URL}/name`}
      >
        Get Module Name
      </a>
      <hr />
      <h4>Modifying Properties</h4>
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Assignment Title
      </a>
      <FormControl
        className="w-75"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <br />
      <a
        id="wd-update-assignment-score"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update Assignment Score
      </a>
      <FormControl
        className="w-75"
        id="wd-assignment-score"
        defaultValue={assignment.score}
        type="number"
        onChange={(e) =>
          setAssignment({ ...assignment, score: parseInt(e.target.value) })
        }
      />
      <br />
      <a
        id="wd-update-assignment-completed"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
      >
        Update Assignment Completion
      </a>

      <FormCheckInput
        id="wd-assignment-completed"
        className="border-3 border-black me-1"
        onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.checked })
        }
      />
      <label htmlFor="wd-assignment-completed">Completed</label>
      <br />
      <br />
      <a
        id="wd-update-module-name"
        className="btn btn-primary float-end"
        href={`${MODULE_API_URL}/name/${module.name}`}
      >
        Update Module Name
      </a>
      <FormControl
        className="w-75"
        id="wd-module-name"
        defaultValue={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <br />
      <a
        id="wd-update-module-description"
        className="btn btn-primary float-end"
        href={`${MODULE_API_URL}/description/${module.description}`}
      >
        Update Module Description
      </a>
      <FormControl
        className="w-75"
        id="wd-module-description"
        defaultValue={module.description}
        onChange={(e) => setModule({ ...module, description: e.target.value })}
      />
      <hr />
    </div>
  );
}
