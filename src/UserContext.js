import { createContext, useCallback, useEffect, useState } from "react";
import { RoomSocket } from "./infra/ws/Room/index";

export const UserContext = createContext();

export const RoomData = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [roomName, setRoomName] = useState("1");
  const [user, setUser] = useState("");

  const connectCallback = (socket) => {
    console.log("connectCallback");
  };

  const disconnectCallback = () => {
    console.log("disconnectCallback");
  };

  const errorCallback = (data) => {
    console.log("errorCallback");
  };

  const logCallback = (data) => {
    console.log("logCallback");
  };

  const messageCallback = (data) => {
    console.log("messageCallback");
    setMessages([...messages, data]);
  };

  const roomSocket = RoomSocket({
    connectCallback,
    disconnectCallback,
    errorCallback,
    logCallback,
    messageCallback,
  });

  const controlSize = () => {
    if (messages.length > 50) messages.shift();
  };

  const joinChat = (roomId) => {
    roomSocket.joinChat({
      idRoom: roomId,
      token: "Anonymous",
    });
    setRoomName(roomId);
  };

  const sendMessage = (textMessage, recived) => {
    setMessages([
      ...messages,
      {
        user: "user",
        message: textMessage,
        recived: recived,
      },
    ]);
    roomSocket.sendMessage(textMessage);
    controlSize();

    const area = document.querySelector("#messageArea");
    let top = area.scrollHeight * 9999;
    area.scrollTop = top;
  };

  const getRoomStorage = () => {
    const rooms = window.localStorage.getItem("rooms");
    return JSON.parse(rooms);
  };

  const [rooms, setRooms] = useState(getRoomStorage() || []);

  const setRoomStorage = useCallback(
    (roomName) => {
      if (!roomName) return;

      let salas = JSON.stringify([...rooms, { id: roomName, name: roomName }]);
      window.localStorage.setItem("rooms", salas);

      setRooms(JSON.parse(salas));
    },
    [rooms]
  );

  if (rooms.length === 0) setRoomStorage("1");

  return (
    <UserContext.Provider
      value={{
        setRooms,
        setRoomName,
        setUser,
        sendMessage,
        messages,
        rooms,
        roomName,
        user,
        setRoomStorage,
        joinChat,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
