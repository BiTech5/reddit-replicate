import PostCard from "../components/card/PostCard";
import CommunityCard from "../components/card/CommunityCard";
import ScrollCard from "../components/card/ScroolCard";
import "../styles/pages/popular.scss";
import { useState, useEffect } from "react";

const Popular = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 761);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 761);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
                    {isDesktop && (
                        <div className="community">
                            <CommunityCard />
                        </div>
                    )}
                </div>
            </main>
        </>
    )
}

export default Popular;
