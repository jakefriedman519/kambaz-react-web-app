import { Link } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
export default function Dashboard() {
  return (
    <div id="wd-dashboard" className="pt-3">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/reactlogo.png"
                  width="100%"
                  height={160}
                />
                <Card.Body>
                  <Card.Title>
                    CS1234 React JS
                    <br />
                    <br />
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-title">
                    Full Stack software developer
                    <br />
                  </Card.Text>
                  <Button variant="primary"> Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/racketlogo.png"
                  width="100%"
                  height={160}
                />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    CS2500 Fundamentals of Computer Science 1{" "}
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-title">
                    Racket!
                  </Card.Text>
                  <Button variant="primary"> Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/binarytree.png"
                  width="100%"
                  height={160}
                />
                <Card.Body>
                  <Card.Title> CS3000 Algorithms and Data </Card.Title>
                  <Card.Text className="wd-dashboard-course-title">
                    Can you reverse a linked list?
                  </Card.Text>
                  <Button variant="primary"> Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/solid.png"
                  width="100%"
                  height={160}
                />
                <Card.Body>
                  <Card.Title> CS3500 Object-Oriented Design </Card.Title>
                  <Card.Text className="wd-dashboard-course-title">
                    Model, View, Controller
                  </Card.Text>
                  <Button variant="primary"> Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/brain.jpg"
                  width="100%"
                  height={160}
                />
                <Card.Body>
                  <Card.Title> CS4100 Artificial Intelligence </Card.Title>
                  <Card.Text className="wd-dashboard-course-title">
                    Prompt Engineering
                  </Card.Text>
                  <Button variant="primary"> Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/bellcurve.jpg"
                  width="100%"
                  height={160}
                />
                <Card.Body>
                  <Card.Title> MATH3081 Probability and Statistics </Card.Title>
                  <Card.Text className="wd-dashboard-course-title">
                    This thing may or may not happen
                  </Card.Text>
                  <Button variant="primary"> Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/writing.jpg"
                  width="100%"
                  height={160}
                />
                <Card.Body>
                  <Card.Title> ENGW1111 First Year Writing </Card.Title>
                  <Card.Text className="wd-dashboard-course-title">
                    Ugh!
                  </Card.Text>
                  <Button variant="primary"> Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
