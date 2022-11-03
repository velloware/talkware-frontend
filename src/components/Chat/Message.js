import React from 'react';
import styles from './Message.module.css';

const Message = ({ message, nickname, recived }) => {
  nickname = recived ? nickname : 'me';

  return (
    <div className={`${styles.messageDiv} ${recived && styles.recived}  `}>
      <p className={ styles.messageNickname } >{ nickname }</p>
      <p className={ styles.message }>{ message}</p>
    </div>
  );
}

export default Message;