import Container from "react-bootstrap/Container";

import "./thematic.css";

export default function Thematic() {
  return (
    <div className="thematic-frame">
      <Container>
        <h2 className="thematic-header">Тематические посты</h2>
        <div className="thematic-row">
          <img src="/images/1.png" alt="" className="thematic-image" />
          <img src="/images/2.png" alt="" className="thematic-image" />
          <img src="/images/3.png" alt="" className="thematic-image" />
          <img src="/images/4.png" alt="" className="thematic-image" />
        </div>
      </Container>
    </div>
  );
}
