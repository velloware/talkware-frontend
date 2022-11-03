import React from 'react';
import InputSend from './InputSend';
import Message from './Message';
import styles from './Chat.module.css';

const Chat = () => {
  return (
    <div className={ styles.chat }>
      <Message message={"qual a boa dfjasdkfjasdlkfjasldkjfasdjf   asjdfjldjsdfsdfasdfasdfflsdj  kdjfjdlfjasdf  lkjlkjd ksd?"} nickname="Pepino" />
      <Message message={"Tranquilo"} nickname="Pepino" recived={true} />
      <InputSend />
    </div>
  );
};

export default Chat;