import React from 'react';
import "./ChatMassage.scss";

export const ChatMassage = ({ massage, time }) => {
  return (
    <div className='massage'>
        <div className="massage__content">
            {massage}
        </div>
        <span>{time}</span>
    </div>
    
  );
}

export default ChatMassage;