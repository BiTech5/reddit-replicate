import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef, useEffect, useState } from "react";
import "../../styles/components/Carousel.scss";
import { fetchNewsArticles } from "../../Service/reddit";
import type Article from "../../models/iPost";

const ScrollCard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showControls, setShowControls] = useState(true);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setShowControls(window.innerWidth > 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    async function loadArticles() {
      setLoading(true);
      try {
        const fetchedArticles = await fetchNewsArticles("technology");
        setArticles(fetchedArticles.slice(0, 10));
      } catch (error) {
        console.error("Error loading articles for carousel", error);
      } finally {
        setLoading(false);
      }
    }

    loadArticles();
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="carousel-container">
      {showControls && <IoIosArrowBack className="arrow-btn left" onClick={scrollLeft} />}
      <div className="carousel-items-container" ref={scrollRef}>
        {loading ? (
          <div className="item">Loading...</div>
        ) : articles.length > 0 ? (
          articles.map((article, index) => (
            <div
              key={index}
              className="item"
              style={{ backgroundImage: `url(${article.urlToImage || "https://via.placeholder.com/300"})` }}
            >
              <div className="detail">
                <h1>{article.title}</h1>
                <p>{article.description || "No description available."}</p>
                <div className="user-detail">
                  <img src={article.urlToImage || "https://via.placeholder.com/50"} alt="profile-img" />
                  <span className="username">{article.author || "Unknown Author"}</span>{" "}
                  <span className="more">and more</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="item">No articles found</div>
        )}
      </div>
      {showControls && <IoIosArrowForward className="arrow-btn right" onClick={scrollRight} />}
    </div>
  );
};

export default ScrollCard;
