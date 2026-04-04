import { useContext } from 'react';
import Room from './roomCard';
import { RoomContext } from '../context/roomContext';
import "../css/roomCard.css"

const ListRooms = () => {
    const { rooms } = useContext(RoomContext);

    return (
        <div>
            <div className='Card-wrap'>
                {rooms.map((room) => (
                    <Room room={room} key={room.id} />
                ))}
            </div>
        </div>
    );
};
export default ListRooms;