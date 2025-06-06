import PostCard from "../components/card/PostCard";
import CommunityCard from "../components/card/CommunityCard";
import ScrollCard from "../components/card/ScroolCard";
import "../styles/pages/popular.scss";
import { useState, useEffect } from "react";
import { fetchNewsArticles } from "../Service/reddit"; 
import type Article from "../models/iPost";

const Popular = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 761);
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 761);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        async function loadArticles() {
            setLoading(true);
            try {
                const fetchedArticles = await fetchNewsArticles("technology");
                setArticles(fetchedArticles.slice(0, 5));
            } catch (error) {
                console.error("Failed to fetch articles", error);
            } finally {
                setLoading(false);
            }
        }
        loadArticles();
    }, []);

    if (loading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <h2>Loading articles, please wait...</h2>
            </div>
        );
    }

    if (articles.length === 0) {
        return (
            <div className="no-articles-container">
                <h2>Oops! No articles found.</h2>
                <p>Try refreshing the page or check back later.</p>
            </div>
        );
    }

    return (
        <main className="popular-container">
            <div className="carousel">
                <ScrollCard />
            </div>
            <div className="container">
                <div className="posts">
                    {articles.map((article, idx) => (
                        <PostCard key={idx} article={article} />
                    ))}
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

export default Popular;
