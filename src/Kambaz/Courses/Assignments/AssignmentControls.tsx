import { BsGripVertical } from "react-icons/bs";
import { RiFileEditLine } from "react-icons/ri";
import GreenCheckmark from "../Modules/GreenCheckmark.tsx";
import { IoEllipsisVertical } from "react-icons/io5";

export function AssignmentBeginningControls() {
  return (
    <span>
      <BsGripVertical className="me-1 fs-3" />
      <RiFileEditLine className="text-success fs-4 me-3" />
    </span>
  );
}

export function AssignmentEndControls() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
