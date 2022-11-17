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
    sendMessage(data, true);
  };

  const roomSocket = RoomSocket({
    connectCallback,
    disconnectCallback,
    errorCallback,
    logCallback,
    messageCallback,
  });

  const controlSize = () => {

    let msg = messages;

    if (msg.length > 50) {
      msg.shift();
      setMessages(msg);
    };
  };

  const joinChat = (roomId) => {
    roomSocket.joinChat({
      idRoom: roomId,
      token: "Anonymous",
    });
    setRoomName(roomId);
  };

  const scrollToBottom = () => {
    const area = document.querySelector("#messageArea");
    let top = area.scrollHeight * 9999;
    area.scrollTop = top;
  }

  const sendMessage = (textMessage, recived) => {

    let regex = /(.*):(.*)/;
    let user = textMessage.replace(regex, "$1");

    if (!(/(.*:)/.test(textMessage))) user = "System";

    textMessage = textMessage.replace(regex, "$2");

    setMessages([
      ...messages,
      {
        user: user,
        message: textMessage,
        recived: recived,
      },
    ]);
    roomSocket.sendMessage(textMessage);
    controlSize();
    scrollToBottom();

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
