import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import "./welcome.css";

function getWelcomeText(username) {
  console.log(username);
  if (username === undefined) {
    return <h2 className="welcome-text">Добро пожаловать</h2>;
  } else {
    return <h2 className="welcome-text">Добрый вечер, {username.username}</h2>;
  }
}

export default function Welcome() {
  //   const welcomeText = getWelcomeText(username);
  return (
    <div className="welcome-frame">
      <Container>
        <h2 className="welcome-text">Добро пожаловать</h2>;
        <div className="welcome-news">
          <div className="welcome-continue">
            <h3 className="welcome-headtext">Продолжить чтение</h3>
            <Card id="card">
              <Card.Img variant="top" src="/images/cover.png" id="card-img" />
              <Card.Body id="welcome-card-body">
                <Card.Title>Тестовое длинное название произведения</Card.Title>
                <Card.Text>Псевдоним автора</Card.Text>
                <Card.Text>
                  <b>Глава 3:</b> Страница 6
                </Card.Text>
                <Button id="card-button">Читать</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="welcome-updates">
            <h3 className="welcome-headtext welcome-update-headtext">
              Обновления в отслеживаемом
            </h3>
            <div className="cards-row">
              <Card id="card" style={{ width: "250px" }}>
                <Card.Body id="welcome-card-body">
                  <Card.Title>
                    Тестовое длинное название произведения
                  </Card.Title>
                  <Card.Text>Псевдоним автора</Card.Text>
                  <Button id="card-button">Читать</Button>
                </Card.Body>
              </Card>
              <Card id="card" style={{ width: "250px" }}>
                <Card.Body id="welcome-card-body">
                  <Card.Title>
                    Тестовое длинное название произведения
                  </Card.Title>
                  <Card.Text>Псевдоним автора</Card.Text>
                  <Button id="card-button">Читать</Button>
                </Card.Body>
              </Card>
              <Card id="card" style={{ width: "250px" }}>
                <Card.Body id="welcome-card-body">
                  <Card.Title>
                    Тестовое длинное название произведения
                  </Card.Title>
                  <Card.Text>Псевдоним автора</Card.Text>
                  <Button id="card-button">Читать</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
