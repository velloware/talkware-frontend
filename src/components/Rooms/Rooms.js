import React from "react";
import styles from "./Rooms.module.css";
import { RoomSocket } from "../../infra/ws/Room";

const Rooms = ({ rooms }) => {
  const connectCallback = (socket) => {
    console.log("Connected");
  };

  const disconnectCallback = () => {
    console.log("disconnect");
  };

  const errorCallback = (error) => {
    console.log("error", error);
  };

  const messageCallback = (data, callback) => {
    console.log("data", data);
  };

  const logCallback = (log) => {
    console.log("log", log);
  };

  const roomSocket = RoomSocket({
    connectCallback,
    disconnectCallback,
    errorCallback,
    messageCallback,
    logCallback,
  });

  rooms = [
    {
      id: "0sfgh55gf",
      name: "Loucuras",
    },
    {
      id: "54fg54df5f",
      name: "Teorias",
    },
    {
      id: "d54dsg5d5",
      name: "Ganhar Dinheiro na Net",
    },
  ];

  const openModal = () => {
    const roomId = prompt("Digite o ID da sala");
    roomSocket.joinChat({
      idRoom: roomId,
      token: "Anonymous",
    });
  };

  return (
    <div className={styles.roomsDiv}>
      <div className={styles.titleDiv}>
        <h1 className={styles.roomsTitle}>ROOMS</h1>
        <div onClick={openModal} className={styles.roomsAdd}></div>
      </div>
      <div className={styles.rooms}>
        {rooms.map((room) => {
          return (
            <div>
              <a>{room.name}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rooms;
