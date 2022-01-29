import React from "react";
import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";
function Navbars() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link href="/">
          <p className="light font-weight-bolder">DTC</p>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link href="/">
              <p className="nav-link text-warning">Home</p>
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link href="/getbus">
              <p className="nav-link text-warning">Get All Buses</p>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link href="/searchbus">
              <p className="nav-link text-warning">Search Bus</p>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link href="/Searchstations">
              <p className="nav-link text-warning">Search Station</p>
            </Link>
          </Nav.Link>

          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
        </Nav>
        {/* <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav> */}
      </Navbar.Collapse>

      <style jsx>
        {`
          .light {
            color: orangered;
            animation: light 5s infinite;
          }
          @keyframes light {
            33% {
              color: green;
            }
            66% {
              color: maroon;
            }
            99% {
              color: orangered;
            }
          }
        `}
      </style>
    </Navbar>
  );
}

export default Navbars;
