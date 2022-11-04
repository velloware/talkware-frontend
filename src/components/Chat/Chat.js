import React from 'react';
import InputSend from './InputSend';
import MessageArea from './MessageArea';
import styles from './Chat.module.css';

const Chat = ({ roomName }) => {
  return (
    <div className={ styles.chat }>
      <h1 className={ styles.titleChat}>ROOM: {roomName}</h1>
      <MessageArea />
      <InputSend />
    </div>
  );
};

export default Chat;