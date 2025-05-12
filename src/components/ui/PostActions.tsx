import '../../styles/components/PostActions.scss'
import { FaRegComment } from "react-icons/fa";
import { TiArrowUpOutline, TiArrowDownOutline } from "react-icons/ti";
import { PiShareFat } from "react-icons/pi";
import { TbAward } from "react-icons/tb";
export default function PostActions() {
    return (
        <div className="post-actions">
            <div className="votes">
                <TiArrowUpOutline />
                <span>123</span>
                <TiArrowDownOutline className='downvote' />
            </div>

            <button className="action-button">
                <FaRegComment />
                <span>19</span>
            </button>

            <button className="action-button">
                <TbAward />
            </button>
            <button className="action-button">
                <PiShareFat />
                <span>Share</span>
            </button>



        </div>
    );
}
