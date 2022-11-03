import React from 'react';
import Message from './Message';
import styles from './MessageArea.module.css';

const MessageArea = ({ messagesArray }) => {

  messagesArray = [
    {
      nickname: 'Pepino',
      message: 'Bom dia!',
      recived: false
    },
    {
      nickname: 'Pato',
      message: 'Bom dia!',
      recived: true
    },
    {
      nickname: 'Pepino01',
      message: 'Bom dia ',
      recived: true
    },
    {
      nickname: 'Pepino01',
      message: 'Bom dia ',
      recived: true
    },


  ];
  return (
    <div className={ styles.messageContainer}>
      {
        messagesArray.map((msg) => {
          
          return <Message 
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