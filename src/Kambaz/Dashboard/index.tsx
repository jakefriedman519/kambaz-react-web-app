import { Link } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import * as userClient from "../Account/client.ts";
import * as courseClient from "../Courses/client.ts";
import * as enrollmentClient from "../Courses/Enrollments/client.ts";
import {
  addCourse,
  deleteCourse,
  updateCourse,
  setCourses,
} from "../Courses/reducer.ts";
import {
  enroll,
  loadEnrollments,
  setEnrollments,
  unenroll,
} from "../Courses/Enrollments/reducer.ts";
export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrolledCourseIds } = useSelector(
    (state: any) => state.enrollmentReducer,
  );
  const { courses } = useSelector((state: any) => state.courseReducer);
  const [filterEnrollments, setFilterEnrollments] = useState(true);
  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });
  const dispatch = useDispatch();
  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    dispatch(addCourse({ ...newCourse, _id: uuidv4() }));
  };
  const handleDeleteCourse = async (courseId: any) => {
    await courseClient.deleteCourse(courseId);
    dispatch(deleteCourse(courseId));
  };
  const handleUpdateCourse = async () => {
    await courseClient.updateCourse(course);
    dispatch(updateCourse(course));
  };

  const toggleFilterEnrollments = () => {
    setFilterEnrollments((prev) => !prev);
  };

  const handleEnroll = async (id: string) => {
    await enrollmentClient.enrollInCourse(currentUser._id, id);
    dispatch(enroll({ userId: currentUser._id, courseId: id }));
  };

  const handleUnenroll = async (id: string) => {
    await enrollmentClient.unenrollInCourse(currentUser._id, id);
    dispatch(unenroll({ userId: currentUser._id, courseId: id }));
  };

  const fetchCourses = async (filterEnrollments: boolean) => {
    try {
      let courses;
      if (filterEnrollments) {
        courses = await userClient.findMyCourses();
      } else {
        courses = await courseClient.fetchAllCourses();
      }
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchEnrollments = async () => {
    try {
      const enrollments: any[] = await enrollmentClient.getEnrollmentsForUser(
        currentUser._id,
      );
      dispatch(setEnrollments(enrollments));
      dispatch(loadEnrollments(currentUser._id));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourses(filterEnrollments);
  }, [currentUser, filterEnrollments]);

  useEffect(() => {
    fetchEnrollments();
  }, [currentUser]);

  return (
    <div id="wd-dashboard" className="pt-3">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      {currentUser.role === "FACULTY" && (
        <>
          <h5>
            New Course ...
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              {" "}
              Add{" "}
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={handleUpdateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />{" "}
          <hr />
        </>
      )}
      <div className="d-flex justify-content-between">
        <h2 id="wd-dashboard-published">
          Published Courses ({courses.length})
        </h2>
        {currentUser.role === "STUDENT" && (
          <Button
            variant="primary"
            className="me-2"
            onClick={toggleFilterEnrollments}
          >
            Enrollments
          </Button>
        )}
      </div>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course: any) => (
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link
                  to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img
                    variant="top"
                    src="/images/reactlogo.png"
                    width="100%"
                    height={160}
                  />
                  <Card.Body>
                    <Card.Title style={{ height: 70 }}>
                      {course.name}
                      <br />
                      <br />
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-title overflow-y-hidden"
                      style={{ maxHeight: 100, height: 100 }}
                    >
                      {course.description}
                      <br />
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                      <Button variant="primary">Go</Button>
                      {currentUser.role === "FACULTY" && (
                        <div>
                          <Button
                            variant="warning"
                            className="me-2"
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            onClick={(event) => {
                              event.preventDefault();
                              handleDeleteCourse(course._id);
                            }}
                            id="wd-delete-course-click"
                          >
                            Delete
                          </Button>
                        </div>
                      )}
                      {currentUser.role === "STUDENT" && !filterEnrollments && (
                        <div>
                          {enrolledCourseIds.includes(course._id) ? (
                            <Button
                              variant="danger"
                              onClick={(e) => {
                                e.preventDefault();
                                handleUnenroll(course._id);
                              }}
                            >
                              Unenroll
                            </Button>
                          ) : (
                            <Button
                              variant="success"
                              onClick={(e) => {
                                e.preventDefault();
                                handleEnroll(course._id);
                              }}
                            >
                              Enroll
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
