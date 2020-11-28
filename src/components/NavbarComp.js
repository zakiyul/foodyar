import { Navbar, Nav } from "react-bootstrap";
import Logo from "../assets/icons/logo.png";

function NavbarComp() {
  return (
    <Navbar bg="white" expand="lg" className="pt-3">
      <div className="container-fluid mx-5">
        <Navbar.Brand href="#home" className="font-weight-bold">
          <img
            src={Logo}
            alt="logo"
            width="28"
            height="28"
            className="d-inline-block align-top mr-2"
          />
          Foodyar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" className="active">
              Home
            </Nav.Link>
            <Nav.Link href="#link">Beferage</Nav.Link>
            <Nav.Link href="#link">Chef</Nav.Link>
            <Nav.Link href="#link">Ingredient</Nav.Link>
            <Nav.Link href="#link">Stories</Nav.Link>
            <button
              className="btn btn-info"
              style={{ borderRadius: "20px 20px 10px 10px" }}
            >
              My Kitchen
            </button>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavbarComp;
