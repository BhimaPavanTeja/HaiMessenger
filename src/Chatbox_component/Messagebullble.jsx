import React from 'react';

const Messagebullble = ({ message, file, fileName, isSender }) => {
  return (
    <div className={`flex ${isSender ? 'justify-end' : 'justify-start'} my-2`}>
      <div
        className={`inline-block bg-contain p-3 m-2 rounded-lg ${isSender ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 text-black self-start'}`}
        style={{ maxWidth: '50%' }}
      >
        {file ? (
          <div>
            <p className="text-xs font-bold">{fileName}</p>
            <img src={file} alt={fileName} className="mt-2 max-w-80 rounded"/>
          </div>
        ) : (
          <p>{message}</p>
        )}
      </div>
    </div>
  );
};

export default Messagebullble;
