import React, { useEffect } from 'react';
import Message from './Message';
import styles from './MessageArea.module.css';
import { UserContext } from '../../UserContext';

const MessageArea = () => {
  
  const { messages, setMessages } = React.useContext(UserContext);

  return (
    <div id='messageArea'className={ styles.messageContainer}>
      {
        messages.map((msg, index) => {
          return <Message
          key={index}
            message={ msg.message } 
            nickname={ msg.nickname } 
            recived={ msg.recived }
          /> 
        })
      }
    </div>
  );
};

export default MessageArea;