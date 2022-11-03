import React from 'react';
import InputSend from './InputSend';
import MessageArea from './MessageArea';
import styles from './Chat.module.css';

const Chat = () => {
  return (
    <div className={ styles.chat }>
      <MessageArea />
      <InputSend />
    </div>
  );
};

export default Chat;