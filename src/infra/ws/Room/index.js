// Connection to socket and list events
import { useSocket } from "../index";
import { useEffect } from "react";

export const RoomSocket = ({
  connectCallback,
  disconnectCallback,
  errorCallback,
  logCallback,
  messageCallback,
}) => {
  const socket = useSocket("https://talkware-backend.velloware.com/", {});
  // const socket = useSocket("localhost:5337", {});

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

  const joinChat = (roomConectionProps) => {
    socket.emit("joinChat", roomConectionProps);
  };

  return {
    socket,
    sendMessage,
    joinChat,
  };
};
