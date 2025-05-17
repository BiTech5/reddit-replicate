import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { MdOutlineHome, MdMovieCreation } from "react-icons/md";
import { BsArrowUpRightCircleFill, BsBarChartLine } from "react-icons/bs";
import { PiMaskHappyFill } from "react-icons/pi";
import { BiSolidJoystick } from "react-icons/bi";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { TbCpu, TbMicrophone2 } from "react-icons/tb";
import { FaRegStar, FaRegQuestionCircle, FaBookOpen } from "react-icons/fa";
import { RiRedditLine } from "react-icons/ri";
import { HiSpeakerWave } from "react-icons/hi2";
import { FiTool } from "react-icons/fi";
import { CgSandClock } from "react-icons/cg";
import "../../styles/components/sidebar.scss";
interface SidebarProps {
  navOpen: boolean;
}

import { NavLink, Link } from "react-router-dom";
const Sidebar:React.FC<SidebarProps> = ({navOpen}) => {
  const [isTopicsOpen, setIsTopicsOpen] = useState(true);
  const [isResourcesOpen, setIsResourcesOpen] = useState(true);


  const topics = [
    { icon: <PiMaskHappyFill />, name: "Internet Culture (Viral)" },
    { icon: <BiSolidJoystick />, name: "Games" },
    { icon: <LuMessageCircleQuestion />, name: "Q&As" },
    { icon: <TbCpu />, name: "Technology" },
    { icon: <FaRegStar />, name: "Pop Culture" },
    { icon: <MdMovieCreation />, name: "Movies & TV" }
  ];

  const resources = [
    { icon: <RiRedditLine />, name: "About Reddit", url: "https://redditinc.com/" },
    { icon: <HiSpeakerWave />, name: "Advertise", url: "https://ads.reddit.com/register?utm_source=web3x_consumer&utm_name=left_nav_cta" },
    { icon: <BsBarChartLine />, name: "Reddit Pro", url: "https://www.reddit.com/reddit-pro?utm_source=reddit&utm_medium=left_nav_resources" },
    { icon: <FaRegQuestionCircle />, name: "Help", url: "https://support.reddithelp.com/hc/en-us?utm_campaign=evergreen&utm_medium=footer&utm_source=reddit" },
    { icon: <FaBookOpen />, name: "Blog", url: "https://redditinc.com/blog" },
    { icon: <FiTool />, name: "Careers", url: "https://redditinc.com/careers" },
    { icon: <TbMicrophone2 />, name: "Press", url: "https://redditinc.com/press" }
  ];

  return (
    <aside className={`sidebar ${navOpen ? 'open' : 'collapsed'}`}>
      {navOpen && (
        <ul>
          <li><NavLink to="/">
            <MdOutlineHome /> {navOpen && 'Home'}
          </NavLink></li>
          <li>
            <NavLink to="/popular">
              <BsArrowUpRightCircleFill /> {navOpen && 'Popular'}
            </NavLink></li>

          <li className="section-title" onClick={() => setIsTopicsOpen(!isTopicsOpen)}>
            <span>{navOpen && 'Topics'}</span>
            {navOpen && (isTopicsOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />)}
          </li>
          {isTopicsOpen && navOpen && (
            <ul className="nested-list">
              {topics.map((topic, index) => (
                <li key={index}>
                  <NavLink to={`/${topic.name}`}> {topic.icon} {topic.name}</NavLink>
                </li>
              ))}
            </ul>
          )}

          <li className="section-title" onClick={() => setIsResourcesOpen(!isResourcesOpen)}>
            <span>{navOpen && 'Resources'}</span>
            {navOpen && (isResourcesOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />)}
          </li>
          {isResourcesOpen && navOpen && (
            <ul className="nested-list">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link to={`${resource.url}`}>
                    {resource.icon} {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}



          <li><Link to={"https://www.reddit.com/best/communities/1/"}>
            <FaRegStar /> Communities
          </Link></li>
          <li><Link to={"https://www.reddit.com/posts/2025/global/"}>
            <CgSandClock /> Best of Reddit
          </Link></li>

        </ul>
      )}

    </aside>
  );
};

export default Sidebar;
