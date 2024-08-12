import React from 'react';

const Messagebullble = ({ message, isSender }) => {
  return (
    <div 
      className={`max-w-xs p-3 m-2 rounded-lg ${isSender ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 text-black self-start'}`}
    >
      <p>{message}</p>
    </div>
  );
}

export default Messagebullble;
