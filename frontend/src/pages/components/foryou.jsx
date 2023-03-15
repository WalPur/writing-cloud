import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import "./foryou.css";

export default function ForYou() {
  return (
    <div className="foryou-frame">
      <Container>
        <h2>Для вас</h2>
        <div className="foryou-cards-row">
          <Card id="foryour-card" style={{ minWidth: "250px" }}>
            <div id="foryou-card-body">
              <Card.Title>Тестовое длинное название произведения</Card.Title>
              <Card.Text>Псевдоним автора</Card.Text>
            </div>
          </Card>
          <Card id="foryour-card" style={{ minWidth: "250px" }}>
            <div id="foryou-card-body">
              <Card.Title>Тестовое длинное название произведения</Card.Title>
              <Card.Text>Псевдоним автора</Card.Text>
            </div>
          </Card>
          <Card id="foryour-card" style={{ minWidth: "250px" }}>
            <div id="foryou-card-body">
              <Card.Title>Тестовое длинное название произведения</Card.Title>
              <Card.Text>Псевдоним автора</Card.Text>
            </div>
          </Card>
          <Card id="foryour-card" style={{ minWidth: "250px" }}>
            <div id="foryou-card-body">
              <Card.Title>Тестовое длинное название произведения</Card.Title>
              <Card.Text>Псевдоним автора</Card.Text>
            </div>
          </Card>
          <Card id="foryour-card" style={{ minWidth: "250px" }}>
            <div id="foryou-card-body">
              <Card.Title>Тестовое длинное название произведения</Card.Title>
              <Card.Text>Псевдоним автора</Card.Text>
            </div>
          </Card>
          <Card id="foryour-card" style={{ minWidth: "250px" }}>
            <div id="foryou-card-body">
              <Card.Title>Тестовое длинное название произведения</Card.Title>
              <Card.Text>Псевдоним автора</Card.Text>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
