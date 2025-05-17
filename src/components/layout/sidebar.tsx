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
import { NavLink } from "react-router-dom";

interface SidebarProps {
  navOpen: boolean;
}

const Sidebar = ({ navOpen }: SidebarProps) => {
  const [isTopicsOpen, setIsTopicsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const topics = [
    { icon: <PiMaskHappyFill />, name: "Internet Culture (Viral)" },
    { icon: <BiSolidJoystick />, name: "Games" },
    { icon: <LuMessageCircleQuestion />, name: "Q&As" },
    { icon: <TbCpu />, name: "Technology" },
    { icon: <FaRegStar />, name: "Pop Culture" },
    { icon: <MdMovieCreation />, name: "Movies & TV" }
  ];

  const resources = [
    { icon: <RiRedditLine />, name: "About Reddit" },
    { icon: <HiSpeakerWave />, name: "Advertise" },
    { icon: <BsBarChartLine />, name: "Reddit Pro" },
    { icon: <FaRegQuestionCircle />, name: "Help" },
    { icon: <FaBookOpen />, name: "Blog" },
    { icon: <FiTool />, name: "Careers" },
    { icon: <TbMicrophone2 />, name: "Press" }
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
                  <NavLink to={`/${resource.name}`}>
                    {resource.icon} {resource.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}

          <li><FaRegStar /> {navOpen && 'Communities'}</li>
          <li><CgSandClock /> {navOpen && 'Best of Reddit'}</li>
        </ul>
      )}

    </aside>
  );
};

export default Sidebar;
