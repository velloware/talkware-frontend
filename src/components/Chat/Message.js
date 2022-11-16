import React from 'react';
import styles from './Message.module.css';

const Message = ({ message, user, recived }) => {
  user = recived ? user : 'me';

  return (
    <div className={`${styles.messageDiv} ${recived && styles.recived}  `}>
      <p className={ styles.user } >{ user }</p>
      <p className={ styles.message }>{ message}</p>
    </div>
  );
}

export default Message;