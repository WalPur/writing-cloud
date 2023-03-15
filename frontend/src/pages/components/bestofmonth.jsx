import Container from "react-bootstrap/Container";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./best.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
export default function BestOfMonth() {
  return (
    <div className="best-frame">
      <Container>
        <h2 className="best-headtext">Лучшее за месяц</h2>
        <Carousel responsive={responsive}>
          <div className="best-card">
            <img src="/images/best_1.png" alt="" />
            <div className="best-info">
              <div className="best-title">
                Тестовое длинное название произведения
              </div>
              <div className="best-author">Псевдоним автора</div>
              <div className="best-desc">
                Текст аннотации. Реалистичный текст небольшого аннотационного
                аннотационного описания к книге. Данное описание является
                муляжом текстового блока с реалистичной длиной описания.
              </div>
            </div>
          </div>
          <div className="best-card">
            <img src="/images/best_2.png" alt="" />
            <div className="best-info">
              <div className="best-title">
                Тестовое длинное название произведения
              </div>
              <div className="best-author">Псевдоним автора</div>
              <div className="best-desc">
                Текст аннотации. Реалистичный текст небольшого аннотационного
                аннотационного описания к книге. Данное описание является
                муляжом текстового блока с реалистичной длиной описания.
              </div>
            </div>
          </div>
          <div className="best-card">
            <img src="/images/best_3.png" alt="" />
            <div className="best-info">
              <div className="best-title">
                Тестовое длинное название произведения
              </div>
              <div className="best-author">Псевдоним автора</div>
              <div className="best-desc">
                Текст аннотации. Реалистичный текст небольшого аннотационного
                аннотационного описания к книге. Данное описание является
                муляжом текстового блока с реалистичной длиной описания.
              </div>
            </div>
          </div>
          <div className="best-card">
            <img src="/images/best_4.png" alt="" />
            <div className="best-info">
              <div className="best-title">
                Тестовое длинное название произведения
              </div>
              <div className="best-author">Псевдоним автора</div>
              <div className="best-desc">
                Текст аннотации. Реалистичный текст небольшого аннотационного
                аннотационного описания к книге. Данное описание является
                муляжом текстового блока с реалистичной длиной описания.
              </div>
            </div>
          </div>
        </Carousel>
      </Container>
    </div>
  );
}
