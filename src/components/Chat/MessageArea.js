import React from 'react';
import Message from './Message';
import styles from './MessageArea.module.css';

const MessageArea = ({ messagesArray }) => {

  messagesArray = [
    {
      nickname: 'Pepino',
      message: 'Bom dia!',
      recived: false,
      id: 'fdsfsad'
    },
    {
      nickname: 'Pato',
      message: 'Bom dia!',
      recived: true,
      id: 'fdsfsa44d'
    },
    {
      nickname: 'Pepino01',
      message: 'Bom dia ',
      recived: true,
      id: 'fdsfs344ad'
    },
    {
      nickname: 'Pepino01',
      message: 'Bom dia ',
      recived: true,
      id: 'fdsfs334ad'
    },


  ];
  return (
    <div className={ styles.messageContainer}>
      {
        messagesArray.map((msg) => {
          
          return <Message
          key={msg.id}
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