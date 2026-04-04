import RoomList from "../components/roomList";
import NavBar from "../components/navBar";
import '../css/roomPage.css'

const Rooms = () => {
    return (
        <div>
            <div className="header-roomPg">
                <NavBar />
                <h1 className="roomPg-title">Rooms</h1>
            </div>
            <div className='Room-ct'>
                <h1 className='Room-tl2'> Where Comfort <br />Meets Elegance</h1>
                <p>Relax in our elegantly designed rooms, where every detail is crafted for your comfort. Enjoy breathtaking views, plush bedding, and personalized service that turns every stay into an unforgettable experience</p>
            </div>
            <RoomList />
        </div>
    );
};

export default Rooms;
