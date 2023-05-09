import Carousel from "react-multi-carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import "./foryou.css";

export default function ForYou() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="foryou-frame">
      <Container>
        <h2>Для вас</h2>
        <Carousel responsive={responsive}>
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
        </Carousel>
      </Container>
    </div>
  );
}
