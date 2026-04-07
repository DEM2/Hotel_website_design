import { createContext, useState } from 'react';
import { roomData } from '../data';

export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
    const [roomType, setRooms] = useState(roomData.roomTypes);


    return (
        <RoomContext.Provider value={{ roomType }}>
            {children}
        </RoomContext.Provider>
    );
};

export default RoomProvider;