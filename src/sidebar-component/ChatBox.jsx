import React, { useState } from 'react';
import backIcon from './back-icon.png';

const ChatBox = ({username}) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="relative h-screen">
      <div
        className={`absolute left-0 top-0 bottom-0 bg-gray-700 shadow-xl m-3 rounded-lg flex justify-between transition-width duration-500 ${
          toggle ? 'w-1/12' : 'w-3/12'
        }`}
        style={{ animation: 'slide-in 0.5s ease-in-out' }}
      >
        <div className='flex'>
          <img
            src={username.photoURL}
            alt="Avatar"
            className="rounded-full w-8 h-8 m-2 cursor-pointer"
          />
          {!toggle && (
            <h1 className="text-white mt-3">{username.displayName}</h1>
          )}
        </div>
        <img
          src={backIcon}
          alt="Back"
          className={`${toggle ? 'm-2': 'mt-3'} cursor-pointer transition-transform duration-500 w-5 h-5`}
          style={{ transform: toggle ? 'rotate(-90deg)' : 'rotate(0deg)' }}
          onClick={handleClick}
        />
      </div>
      <div
        className={`absolute right-0 top-0 bottom-0 bg-emerald-50 shadow-xl m-3 rounded-lg transition-width duration-500 ${
          toggle ? 'w-[89%]' : 'w-[72%]'
        }`}
      ></div>
    </div>
  );
};

export default ChatBox;
