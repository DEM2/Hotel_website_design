import { useContext } from 'react';
import Room from './roomCard';
import { RoomContext } from '../context/roomContext';
import "../css/roomCard.css"

const ListRooms = () => {
    const { roomType } = useContext(RoomContext);

    return (
        <div>
            <div className='Card-wrap'>
                {roomType.map((room) => (
                    <Room room={room} key={room.id} />
                ))}
            </div>
        </div>
    );
};
export default ListRooms;