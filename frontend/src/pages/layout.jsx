import { Outlet, Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
          <Nav.Link as={Link} to="/" id="header-link">
            Login
          </Nav.Link>
        </Container>
      </Navbar>
      <Outlet />
      <footer>
        <Container>
          <Row>
            <Col>
              <img
                src="/images/logo.svg"
                className="footer-top-element"
                alt=""
              />
              <p className="footer-text">О нас</p>
              <p className="footer-text">Каталог</p>
              <p className="footer-text">Условия использования</p>
              <p className="footer-text">
                Политика обработки персональных данных
              </p>
              <p className="footer-text">Новости</p>
            </Col>
            <Col>
              <h2 className="footer-top-text footer-top-element">Компания</h2>
              <p className="footer-text">Кто мы</p>
              <p className="footer-text">Корпоративным клиентам</p>
              <p className="footer-text">Контакты</p>
              <p className="footer-text">Верификация</p>
              <p className="footer-text">Политика плагиата</p>
            </Col>
            <Col>
              <h2 className="footer-top-text footer-top-element">
                Пресс центр
              </h2>
              <p className="footer-text">История</p>
              <p className="footer-text">Миссия и ценности</p>
              <p className="footer-text">Пресс релизы</p>
              <p className="footer-text">СМИ о нас</p>
              <p className="footer-text">Контакты для прессы</p>
            </Col>
            <Col>
              <div className="phone">
                <p className="phone-number footer-top-text">
                  8 (000) 000-00-00
                </p>
                <p className="phone-text footer-text">Тех. поддержка</p>
              </div>
              <div className="phone">
                <p className="phone-number footer-top-text">
                  8 (000) 000-00-00
                </p>
                <p className="phone-text footer-text">Тех. поддержка</p>
              </div>
              <div className="phone">
                <p className="phone-number footer-top-text">
                  8 (000) 000-00-00
                </p>
                <p className="phone-text footer-text">Корпоративным клиентам</p>
              </div>
              <div className="socials">
                <img src="/images/social_1.svg" alt="" />
                <img src="/images/social_2.svg" alt="" />
                <img src="/images/social_3.svg" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Layout;
