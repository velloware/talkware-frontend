import React from 'react';
import styles from './Rooms.module.css';

const Rooms = ({ rooms }) => {

  rooms = [
    {
      id: '0sfgh55gf',
      name: 'Loucuras'
    },
    {
      id: '54fg54df5f',
      name: 'Teorias'
    },
    {
      id: 'd54dsg5d5',
      name: 'Ganhar Dinheiro na Net'
    },

  ];

  return (
    <div className={ styles.roomsDiv }>
      <div className={ styles.titleDiv}>
        <h1 className={ styles.roomsTitle }>ROOMS</h1>
        <div className={ styles.roomsAdd}></div>
      </div>
        <div className={ styles.rooms }>
          {
            rooms.map((room) => {
              return (
                <div>
                  <a>{room.name}</a>
                </div>
                )
            })
          }
        </div>
    </div>
  );
};

export default Rooms;