import React from 'react';
import styles from './InputSend.module.css';

const InputSend = () => {
  return (
    <div className={ styles.messageSend }>
      <input type='text' className={ styles.inputSend } placeholder='Type your Message' />
      <button className={ styles.buttonSend }>
        ➤
      </button>
    </div>
  );
}

export default InputSend;