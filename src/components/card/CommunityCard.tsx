import "../../styles/components/CommunityCard.scss";

const communities = [
    {
        name: "r/AskMen",
        members: "6,746,736",
    },
    {
        name: "r/AskWomen",
        members: "5,555,673",
    },
    {
        name: "r/PS4",
        members: "5,533,527",
    },
    {
        name: "r/apple",
        members: "6,222,885",
    },
    {
        name: "r/NBA2k",
        members: "713,649",
    }
];
const more = [
    {
        name: "r/AskMen",
        members: "6,746,736",
    },
    {
        name: "r/AskWomen",
        members: "5,555,673",
    },
    {
        name: "r/PS4",
        members: "5,533,527",
    },
    {
        name: "r/apple",
        members: "6,222,885",
    },
    {
        name: "r/NBA2k",
        members: "713,649",
    }
];
import { useState } from "react";
const CommunityCard = () => {
    const [moreon, setMoreon] = useState(false);
    return (
        <div className="card-container">
            <h1>POPULAR COMMUNITIES</h1>
            {communities.map((community, index) => (
                <div className="group" key={index}>
                    <img src="https://thispersondoesnotexist.com/" alt={`${community.name} logo`} />
                    <div className="info">
                        <span className="name">{community.name}</span>
                        <span className="members">{community.members} members</span>
                    </div>
                </div>
            ))}
            {moreon && (more.map((commmunity, index) => (
                <div className="group" key={index}>
                    <img src="https://thispersondoesnotexist.com/" alt={`${commmunity.name} logo`} />
                    <div className="info">
                        <span className="name">{commmunity.name}</span>
                        <span className="members">{commmunity.members} members</span>
                    </div>
                </div>

            ))
            )}
            <button className="see-more" onClick={() => setMoreon(!moreon)}>See {moreon ? "less" : "more"}</button>


        </div>
    );
};

export default CommunityCard;
