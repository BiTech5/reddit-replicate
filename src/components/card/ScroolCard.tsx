import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef, useEffect, useState } from "react";
import "../../styles/components/Carousel.scss";

const ScrollCard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setShowControls(window.innerWidth > 768);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const items = Array(7).fill("https://thispersondoesnotexist.com");

  return (
    <div className="carousel-container">
      {showControls && (
        <IoIosArrowBack className="arrow-btn left" onClick={scrollLeft} />
      )}
      <div className="carousel-items-container" ref={scrollRef}>
        {items.map((item, index) => (
          <div
            key={index}
            className="item"
            style={{ backgroundImage: `url(${item})` }}
          >
            <div className="detail">
              <h1>Heading</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <div className="user-detail">
                <img src="https://thispersondoesnotexist.com" alt="profile-img" />
                <span className="username">Username</span> <span className="more">and more</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showControls && (
        <IoIosArrowForward className="arrow-btn right" onClick={scrollRight} />
      )}
    </div>
  );
};

export default ScrollCard;
