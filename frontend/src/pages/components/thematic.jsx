import Container from "react-bootstrap/Container";
import Carousel from "react-multi-carousel";

import "./thematic.css";

export default function Thematic() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="thematic-frame">
      <Container>
        <h2 className="thematic-header">Тематические посты</h2>
        <Carousel responsive={responsive}>
          <img src="/images/1.png" alt="" className="thematic-image" />
          <img src="/images/2.png" alt="" className="thematic-image" />
          <img src="/images/3.png" alt="" className="thematic-image" />
          <img src="/images/4.png" alt="" className="thematic-image" />
          </Carousel>
      </Container>
    </div>
  );
}
