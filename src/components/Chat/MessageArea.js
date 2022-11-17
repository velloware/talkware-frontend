import React from 'react';
import Message from './Message';
import styles from './MessageArea.module.css';
import { UserContext } from '../../UserContext';

const MessageArea = () => {
  
  const { messages } = React.useContext(UserContext);

  return (
    <div id='messageArea'className={ styles.messageContainer}>
      {
        messages.map((msg, index) => {
          return <Message
          key={index}
            message={ msg.message } 
            user={ msg.user } 
            recived={ msg.recived }
          /> 
        })
      }
    </div>
  );
};

export default MessageArea;