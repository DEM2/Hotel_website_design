import "../css/amenity.css"
import { TbAirConditioning, TbToolsKitchen3 } from "react-icons/tb";
import { FaWifi } from "react-icons/fa6";
import { FaHotTub } from "react-icons/fa";
import { IoIosTv, IoIosCafe } from "react-icons/io";
import { MdOutlinePool, MdLiving, MdLocalBar, MdRoomService } from "react-icons/md";

const amenity = ({ amenity }) => {
    const icons = {
        "Wifi": <FaWifi />,
        "TV": <IoIosTv />,
        "Kitchen": <TbToolsKitchen3 />,
        "Living Room": <MdLiving />,
        "Jacuzzi": <FaHotTub />,
        "Room Service": <MdRoomService />,
        "Mini Bar": <MdLocalBar />,
        "Private Pool": <MdOutlinePool />,
        "Air Conditioning": <TbAirConditioning />,
        "Coffee Maker": <IoIosCafe />,

    }
    return (

        <div className="amenity-container">
            {icons[amenity]}
        </div>
    )
}
export default amenity