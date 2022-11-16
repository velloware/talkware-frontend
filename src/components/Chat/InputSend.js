import React, { useState } from 'react';
import styles from './InputSend.module.css';
import { UserContext } from '../../UserContext';

const InputSend = () => {
  const { messages, sendMessage } = React.useContext(UserContext);
  const [value, setValue] = useState("");

  const handleMensage = (e) => {
    setValue(e.target.value);
  }

  const handleClick = () => {
    if (/[^\s]/.test(value)) {
      sendMessage(value, false);
      setValue("");
    }
  }
  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      handleClick();
    }
  }

  return (
    <div className={ styles.messageSend }>
      <input 
        type='text' 
        className={ styles.inputSend } 
        value={value} 
        onChange={ handleMensage } 
        onKeyDown={ handleKeyPress }
        placeholder='Type your Message' 
      />
      <button className={ styles.buttonSend } onClick={ handleClick }>
        ➤
      </button>
    </div>
  );
}

export default InputSend;