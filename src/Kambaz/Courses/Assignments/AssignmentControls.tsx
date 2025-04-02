import { BsGripVertical } from "react-icons/bs";
import { RiFileEditLine } from "react-icons/ri";
import GreenCheckmark from "../Modules/GreenCheckmark.tsx";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer.ts";
import { useState } from "react";
import DeleteAssignmentModal from "./DeleteAssignmentModal.tsx";
import * as assignmentsClient from "./client.ts";
export function AssignmentBeginningControls() {
  return (
    <span>
      <BsGripVertical className="me-1 fs-3" />
      <RiFileEditLine className="text-success fs-4 me-3" />
    </span>
  );
}

export function AssignmentEndControls({
  assignmentId,
}: {
  assignmentId: string;
}) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = async (id: string) => {
    await assignmentsClient.deleteAssignment(id);
    dispatch(deleteAssignment(id));
  };
  return (
    <div className="float-end">
      <FaTrash
        className="text-danger me-2 mb-1"
        onClick={() => setShow(true)}
      />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      <DeleteAssignmentModal
        show={show}
        handleClose={() => setShow(false)}
        deleteAssignment={() => handleDelete(assignmentId)}
      />
    </div>
  );
}
