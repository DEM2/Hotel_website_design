import { createContext, useState } from 'react';
import { roomData } from '../data';

export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
    const [rooms, setRooms] = useState(roomData.roomTypes);
    const [tipo, setTipo] = useState('Ordinario');

    const handleClick = (e) => {
        e.preventDefault();

        // Filtrar las habitaciones por tipo
        const newRooms = roomData.roomTypes.filter((room) => {
            return tipo.toLowerCase() === room.category.toLowerCase();
        });

        setRooms(newRooms);
    };

    return (
        <RoomContext.Provider value={{ rooms, tipo, setTipo, handleClick }}>
            {children}
        </RoomContext.Provider>
    );
};

export default RoomProvider;