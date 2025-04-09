import { Link } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import * as userClient from "../Account/client.ts";
import * as courseClient from "../Courses/client.ts";
import {
  addCourse,
  deleteCourse,
  updateCourse,
  setCourses,
} from "../Courses/reducer.ts";
export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { courses } = useSelector((state: any) => state.courseReducer);
  const [enrolling, setEnrolling] = useState(false);
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
    const newCourse = await courseClient.createCourse(course);
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
    setEnrolling((prev) => !prev);
  };

  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    if (enrolled) {
      await userClient.enrollIntoCourse(currentUser._id, courseId);
    } else {
      await userClient.unenrollFromCourse(currentUser._id, courseId);
    }
    dispatch(
      setCourses(
        courses.map((course: any) => {
          if (course._id === courseId) {
            return { ...course, enrolled: enrolled };
          } else {
            return course;
          }
        }),
      ),
    );
  };

  const fetchCourses = async () => {
    try {
      const allCourses = await courseClient.fetchAllCourses();
      const enrolledCourses = await userClient.findCoursesForUser(
        currentUser._id,
      );
      const courses = allCourses.map((course: any) => {
        if (enrolledCourses.find((c: any) => c._id === course._id)) {
          return { ...course, enrolled: true };
        } else {
          return course;
        }
      });
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  };

  const findCoursesForUser = async () => {
    try {
      const courses = await userClient.findCoursesForUser(currentUser._id);
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (enrolling) {
      fetchCourses();
    } else {
      findCoursesForUser();
    }
  }, [currentUser, enrolling]);

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
                      {currentUser.role === "STUDENT" && enrolling && (
                        <div>
                          {course.enrolled ? (
                            <Button
                              variant="danger"
                              onClick={(event) => {
                                event.preventDefault();
                                updateEnrollment(course._id, !course.enrolled);
                              }}
                            >
                              Unenroll
                            </Button>
                          ) : (
                            <Button
                              variant="success"
                              onClick={(event) => {
                                event.preventDefault();
                                updateEnrollment(course._id, !course.enrolled);
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
