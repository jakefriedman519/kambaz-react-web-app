import Nav from "react-bootstrap/Nav";
import { useLocation } from "react-router";
export default function TOC() {
  const { pathname } = useLocation();
  return (
    <div>
      <h1>Jacob Friedman</h1>
      <Nav variant="pills">
        <Nav.Item>
          <Nav.Link href="#/Labs">Labs</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="#/Labs/Lab1"
            className={`${pathname.includes("Lab1") ? "active" : ""}`}
          >
            Lab 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="#/Labs/Lab2"
            className={`${pathname.includes("Lab2") ? "active" : ""}`}
          >
            Lab 2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="#/Labs/Lab3"
            className={`${pathname.includes("Lab3") ? "active" : ""}`}
          >
            Lab 3
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="#/Labs/Lab4"
            className={`${pathname.includes("Lab4") ? "active" : ""}`}
          >
            Lab 4
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="#/Labs/Lab5"
            className={`${pathname.includes("Lab5") ? "active" : ""}`}
          >
            Lab 5
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#/Kambaz">Kambaz</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://github.com/jakefriedman519">
            My GitHub
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://github.com/jakefriedman519/kambaz-react-web-app">
            Kambaz Repo
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
