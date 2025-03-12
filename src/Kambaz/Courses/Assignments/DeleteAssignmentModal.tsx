import { Modal, Button } from "react-bootstrap";
export default function DeleteAssignmentModal({
  show,
  handleClose,
  deleteAssignment,
}: {
  show: boolean;
  handleClose: () => void;
  deleteAssignment: () => void;
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Assignment</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this assignment?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {" "}
          Cancel{" "}
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            deleteAssignment();
            handleClose();
          }}
        >
          {" "}
          Delete Assignment{" "}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
