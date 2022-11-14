import React from "react";
import styles from "./Rooms.module.css";
//import { RoomSocket } from "../../infra/ws/Room";
import { UserContext } from '../../UserContext';

const Rooms = ({ rooms }) => {

  const { setRoomStorage, setRoom } = React.useContext(UserContext);

  const openModal = () => {
    const roomId = prompt("Digite o ID da sala");
    setRoomStorage(roomId);
  };

  const selectRoom = (id) => {
    setRoom(id);
  }

  return (
    <div className={ styles.roomsDiv }>
      <div className={ styles.titleDiv }>
        <h1 className={ styles.roomsTitle }>ROOMS</h1>
        <div onClick={ openModal } className={ styles.roomsAdd }></div>
      </div>
      <div className={styles.rooms}>
        {rooms.map((room) => {
          return (
            <div key={ room.id } onClick={() => selectRoom(room.id)}>
              <span>{ room.name }</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rooms;
