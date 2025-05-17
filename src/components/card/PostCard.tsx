import { BsThreeDots } from "react-icons/bs";
import "../../styles/components/postcard.scss";
import PostActions from "../ui/PostActions";
import { useState } from "react";
import ReportBtn from "../ui/Report";
import type Article from "../../models/iPost";

interface PostCardProps {
  article: Article;
}

const PostCard = ({ article }: PostCardProps) => {
  const [isReportOpen, setReportOpen] = useState(false);

  return (
    <div className="post-card">
      <hr />
      <div className="card">
        <div className="head-container">
          <div className="user-detail">
            <img src={article.urlToImage || "https://via.placeholder.com/150"} alt="profile" className="profile-img" />
            <div className="user-meta">
              <span className="username">{article.author || "Unknown Author"}</span>
              <span className="date">{new Date(article.publishedAt).toLocaleDateString()}</span>
            </div>
          </div>
          <div className="btns">
            <button className="join-btn">Join</button>
            <button className="three-dot-btn" onClick={() => setReportOpen(!isReportOpen)}>
              <BsThreeDots />
            </button>
          </div>
        </div>
        {isReportOpen && <ReportBtn />}
        <div className="post-content">
          <h1 className="post-heading">{article.title}</h1>
          {article.description && <p className="post-text">{article.description}</p>}
          <a href={article.url} target="_blank" rel="noreferrer">Read Full Article</a>
        </div>
        <br />
        <PostActions />
      </div>
    </div>
  );
};

export default PostCard;
