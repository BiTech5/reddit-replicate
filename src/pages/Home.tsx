import "../styles/pages/homes.scss";
import PostCard from "../components/card/PostCard";
import CommunityCard from "../components/card/CommunityCard";
import { useState, useEffect } from "react";

const Home = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 761);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 761);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main>
      <div className="container">
        <div className="posts">
          <PostCard />
        </div>
        {isDesktop && (
          <div className="community">
            <CommunityCard />
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
