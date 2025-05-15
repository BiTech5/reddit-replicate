import PostCard from "../components/card/PostCard";
import CommunityCard from "../components/card/CommunityCard";
import ScrollCard from "../components/card/ScroolCard";
import "../styles/pages/popular.scss"
const Popular = () => {
    return (
        <>
            <main className="popular-container">
                <div className="carousel">

                    <ScrollCard />
                </div>
                <div className="container">
                    <div className="posts">

                        <PostCard />
                    </div>
                    <div className="community">
                        <CommunityCard />
                    </div>
                </div>
            </main>
        </>
    )
}
export default Popular;