// Connection to socket and list events
import { useSocket } from "../index";
import { useEffect } from "react";

export const RoomSocket = ({
  connectCallback,
  disconnectCallback,
  errorCallback,
  messageCallback,
  logCallback,
}) => {
  const socket = useSocket("https://talkware-backend.velloware.com/", {});

  useEffect(() => {
    if (socket) {
      socket.on("connect", () => {
        console.log("Connected");
        connectCallback(socket);
      });

      socket.on("disconnect", () => {
        console.log("Disconnected");
        disconnectCallback();
      });

      socket.on("message", (data) => {
        console.log("message", data);
        messageCallback(data);
      });

      socket.on("error", (data) => {
        console.log("error", data);
        errorCallback(data);
      });

      socket.on("log", (data) => {
        console.log("log", data);
        logCallback(data);
      });
    }
  }, [
    socket,
    connectCallback,
    disconnectCallback,
    errorCallback,
    messageCallback,
    logCallback,
  ]);

  const sendMessage = (message) => {
    socket.emit("message", message);
  };

  const joinChat = (room) => {
    socket.emit("joinChat", room);
  };

  return {
    socket,
    sendMessage,
    joinChat,
  };
};
