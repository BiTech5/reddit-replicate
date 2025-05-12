import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import {
  MdOutlineHome,
  MdMovieCreation
} from "react-icons/md";
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

const Sidebar = () => {
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
    <aside>
      <div className="sidebar">
        <ul>
          <li><MdOutlineHome /> Home</li>
          <li><BsArrowUpRightCircleFill /> Popular</li>

          <li className="section-title" onClick={() => setIsTopicsOpen(!isTopicsOpen)}>
            <span>Topics</span>
            {isTopicsOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </li>
          {isTopicsOpen && (
            <ul className="nested-list">
              {topics.map((topic, index) => (
                <li key={index}>
                  {topic.icon} {topic.name}
                </li>
              ))}
            </ul>
          )}

          <li className="section-title" onClick={() => setIsResourcesOpen(!isResourcesOpen)}>
            <span>Resources</span>
            {isResourcesOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </li>
          {isResourcesOpen && (
            <ul className="nested-list">
              {resources.map((resource, index) => (
                <li key={index}>
                  {resource.icon} {resource.name}
                </li>
              ))}
            </ul>
          )}

          <li><FaRegStar /> Communities</li>
          <li><CgSandClock /> Best of Reddit</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
