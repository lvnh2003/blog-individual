
import GhIcon from "./Ghicon";
import LkdIcon from "./Lkdicon";
import FbIcon from "./fbicon";

export default function ListIcon() {
    return (
        <div className="flex flex-row justify-evenly items-center">
            <FbIcon/>
            <GhIcon/>
            <LkdIcon/>
        </div>
    )
}