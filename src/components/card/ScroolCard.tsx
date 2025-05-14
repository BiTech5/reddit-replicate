import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";
import "../../styles/components/Carousel.scss";

const ScrollCard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  const items = Array(7).fill("https://thispersondoesnotexist.com");

  return (
    <div className="carousel-container">
      <IoIosArrowBack className="arrow-btn" onClick={scrollLeft} />
      <div className="carousel-items-container" ref={scrollRef}>
        {items.map((item, index) => (
          <div
            key={index}
            className="item"
            style={{ backgroundImage: `url(${item})` }}
          />
        ))}
      </div>
      <IoIosArrowForward className="arrow-btn" onClick={scrollRight} />
    </div>
  );
};

export default ScrollCard;
