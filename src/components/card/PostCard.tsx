import { BsThreeDots } from "react-icons/bs";
import "../../styles/components/postcard.scss";
import PostActions from "../ui/PostActions";

const PostCard = () => {
    return (
        <div className="post-card">
            <hr />
            <div className="card">
                <div className="head-container">
                    <div className="user-detail">
                        <img src="https://thispersondoesnotexist.com" alt="profile" className="profile-img" />
                        <div className="user-meta">
                            <span className="username">username</span>
                            <span className="date">date</span>
                        </div>
                    </div>
                    <div className="btns">
                        <button className="join-btn">Join</button>
                        <button className="three-dot-btn">
                            <BsThreeDots />
                        </button>
                    </div>
                </div>

                <div className="post-content">
                    <h1 className="post-heading">Heading</h1>
                    <p className="post-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae soluta dolor alias aliquam itaque? Illo quam unde fuga voluptatum, suscipit repudiandae ullam.
                    </p>
                </div>
                <br />
                <PostActions />
            </div>
        </div>
    );
};

export default PostCard;
