import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactlogo.png" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/racketlogo.png" width={200} />
            <div>
              <h5> CS2500 Fundamentals of Computer Science 1 </h5>
              <p className="wd-dashboard-course-title">Racket!</p>
              <button> Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/binarytree.png" width={200} />
            <div>
              <h5> CS3000 Algorithms and Data </h5>
              <p className="wd-dashboard-course-title">
                Can you reverse a linked list?
              </p>
              <button> Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/solid.png" width={200} />
            <div>
              <h5> CS3500 Object-Oriented Design </h5>
              <p className="wd-dashboard-course-title">
                Model, View, Controller
              </p>
              <button> Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/brain.jpg" width={200} />
            <div>
              <h5> CS4100 Artificial Intelligence </h5>
              <p className="wd-dashboard-course-title">Prompt Engineering</p>
              <button> Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/bellcurve.jpg" width={200} />
            <div>
              <h5> MATH3081 Probability and Statistics </h5>
              <p className="wd-dashboard-course-title">
                This thing may or may not happen
              </p>
              <button> Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          {" "}
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/writing.jpg" width={200} />
            <div>
              <h5> ENGW1111 First Year Writing </h5>
              <p className="wd-dashboard-course-title">Ugh!</p>
              <button> Go</button>
            </div>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}
