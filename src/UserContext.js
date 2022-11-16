import { createContext, useCallback, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export const UserContext = createContext();

export const RoomData = ({ children }) => {

  const socket = io('https://talkware-backend.velloware.com/', {});

  const [messages, setMessages] = useState([]);
  const [roomName, setRoomName] = useState('Global');
  const [user, setUser] = useState('');

  const controlSize = useCallback(() => {
    if (messages.length > 50) {
      messages.shift();
    }
  }, [messages]);

  const sendMessage = useCallback((textMessage, recived) => {

    let regex = /(.*):(.*)/;
    let user = textMessage.replace(regex, "$1");
    if (!(/(.*:)/.test(textMessage))) user = "System";
    textMessage = textMessage.replace(regex, "$2");
    
    setMessages([...messages, {
      user: user, 
      message: textMessage, 
      recived: recived 
    }]);
  
    socket.emit('message', textMessage);
    controlSize();
    
    const area = document.querySelector('#messageArea');
    let top = area.scrollHeight * 9999;
    area.scrollTop = top;
  }, [controlSize, messages, socket]);

  const userName = useCallback((user) => {
    socket.emit('changeName', user);
   // sendMessage(`${user} With Session ${socket.id}`);
  }, [socket]);

  const onError = error => {
    console.log(error);
  };
  
  const getRoomStorage = () => {
    const rooms = window.localStorage.getItem('rooms');
    return JSON.parse(rooms);
  }
  
  const [rooms, setRooms] = useState(getRoomStorage() || []);
  
  const setRoomStorage = useCallback((roomName) => {
    if (!roomName) return;
    
    let salas = JSON.stringify([...rooms, { id: roomName, name: roomName }]);
    window.localStorage.setItem('rooms', salas);
    
    setRooms(JSON.parse(salas));
  }, [rooms]);
  
  if (rooms.length === 0) setRoomStorage('Global');

    socket.on('connect', () => userName(socket.id));
    socket.on('disconnect', () => console.log(`Disconnect For SocketServer`));
    socket.on('error', data => onError(data));
    socket.on('message', data => sendMessage(data, true));
    socket.on('log', data => console.log(data));
    socket.on('voice', data => console.log(data));

  return (
    <UserContext.Provider value={{
      socket,
      setRooms,
      setRoomName,
      setUser,
      sendMessage,
      messages,
      rooms,
      roomName,
      user,
      setRoomStorage
    }}>
      { children }
    </UserContext.Provider>
  );
};