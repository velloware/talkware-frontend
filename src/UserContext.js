import { createContext, useCallback, useState } from 'react';

export const UserContext = createContext();

export const RoomData = ({ children }) => {
  const [room, setRoom] = useState('Global');
  const [user, setUser] = useState(null);
  
  const getRoomStorage = () => {
    const rooms = window.localStorage.getItem('rooms');
    return JSON.parse(rooms);
  }
  
  const [rooms, setRooms] = useState(getRoomStorage() || []);
  
  const setRoomStorage = useCallback((roomName) => {
    if (!roomName) return;
    
    let salas = rooms;
    salas.push({ id: roomName, name: roomName });
    salas = JSON.stringify(salas);
    window.localStorage.setItem('rooms', salas);
    
    setRooms(JSON.parse(salas));
  }, [rooms]);
  
  if (rooms.length === 0) setRoomStorage('Global');

  return (
    <UserContext.Provider value={{
      setRooms,
      setRoom,
      setUser,
      rooms,
      room,
      user,
      setRoomStorage
    }}>
      { children }
    </UserContext.Provider>
  );
};