import { Link } from "react-router-dom";
import "../css/roomCard.css"
import Amenity from "./amenity";
import { FaUser } from "react-icons/fa";

const RoomCard = ({ room }) => {
    const { id, name, image, description, basePrice, facilities, capacity } = room;

    return (
        <div className="card-container">
            <div className="header-card">
                <img src={image} />
            </div>
            <div>
                <div className="card-body">
                    <div className="card-info">
                        <h1>{name}</h1>
                        <span><FaUser /> {capacity} Guests</span>
                        <p>{description}</p>
                    </div>
                    <div className="facilities">
                        <div className="group" >
                            {facilities.map((amenity) => (
                                <Amenity key={amenity} amenity={amenity} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-right">
                <h2 className="top-right">${basePrice}<span>/Night</span></h2>
                <Link to={`/room/${id}`} className="card-btn">
                    Book Now
                </Link>
            </div>

        </div>
    );
};

export default RoomCard;
