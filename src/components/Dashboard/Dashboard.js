import React from 'react';
import styles from './Dashboard.module.css';
import Chat from '../Chat/Chat';
import Rooms from '../Rooms/Rooms';
import Profile from '../Profile/Profile';
import { UserContext } from '../../UserContext';

const Dashboard = () => {

  const { rooms, roomName } = React.useContext(UserContext);

  return (
    <div className={ styles.dashboard }>
      <Rooms rooms={rooms} />
      <Chat roomName={roomName} />
      <Profile />
    </div>
  );
};

export default Dashboard;