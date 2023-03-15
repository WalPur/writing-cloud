import { Outlet, Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { Search } from "react-bootstrap-icons";

import "./styles/layout.css";

const Layout = () => {
  return (
    <>
      <Navbar expand="lg" className="header">
        <Container>
          <div className="header-left">
            <Navbar.Brand href="#">
              <img src="/images/logo.svg" alt="" />
            </Navbar.Brand>
          </div>
          <div className="header-center">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" id="header-link">
                  Лента
                </Nav.Link>
                <Nav.Link as={Link} to="/" id="header-link">
                  Отслеживаемое
                </Nav.Link>
                <Nav.Link as={Link} to="/" id="header-link">
                  Сообщество
                </Nav.Link>
                <Nav.Link as={Link} to="/" id="header-link">
                  Рейтинги
                </Nav.Link>
                <Nav.Link as={Link} to="/" id="header-link">
                  <Search />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
          <Nav.Link as={Link} to="/login" id="header-link">
            Login
          </Nav.Link>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Layout;
