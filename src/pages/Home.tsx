import "../styles/pages/homes.scss";
import PostCard from "../components/card/PostCard";
import CommunityCard from "../components/card/CommunityCard";

const Home = () => {
  return (
    <main>
      <div className="container">
        <div className="posts">
        
          <PostCard />
        </div>
        <div className="community">
          <CommunityCard />
        </div>
      </div>
    </main>
  );
};

export default Home;
