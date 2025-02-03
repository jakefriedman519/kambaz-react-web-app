import Nav from "react-bootstrap/Nav";

export default function TOC() {
  return (
    <div>
      <h1>Jacob Friedman</h1>
      <Nav variant="pills">
        <Nav.Item>
          <Nav.Link href="#/Labs">Labs</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#/Labs/Lab1">Lab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#/Labs/Lab2">Lab 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#/Labs/Lab3">Lab 3</Nav.Link>
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
