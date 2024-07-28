import React, { useState } from 'react';
import backIcon from './back-icon.png';
import SearchBar from '../search-component/SearchBar';
import Contacts from '../Contacts_component/Contacts';

const ChatBox = ({ username , Logout }) => {
  const [toggle, setToggle] = useState(false);
  const [showProfile, setShowProfile] = useState(false);


  const handleClick = () => {
    setToggle(!toggle);
  };
 

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div className="relative h-screen">
      {/* Sidebar */}
      <div
        className={`absolute left-0 top-0 bottom-0 bg-gray-700 shadow-xl m-3 rounded-lg justify-between transition-width duration-500 ${
          toggle ? 'w-1/12' : 'w-3/12'
        }`}
        style={{ animation: 'slide-in 0.5s ease-in-out' }}
      >
        <div className='flex relative'>
          <img
            src={username.photoURL}
            alt="Avatar"
            className={`rounded-full w-8 h-8 m-2 cursor-pointer`}
            onClick={handleProfileClick}
          />
          {!toggle && (
            <h1 className="text-white mt-3 font-medium whitespace-pre">{username.displayName}</h1>
          )}
          {showProfile && (
            <div className="absolute top-12 left-2 w-60 bg-white shadow-lg rounded-lg p-4 z-10">
              <h2 className='text-lg font-bold mb-3'>Profile</h2>
              <img className='m-auto rounded' src={username.photoURL} alt={username.displayName} />
              <h3 className='font-semibold mt-2 box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white w-fit px-2 m-auto rounded'>{username.displayName}</h3>
              <p className='font-medium text-base italic'>{username.email}</p>
              <button
                className='font-light mt-4 cursor-pointer bg-red-600 text-white px-2 py-1 rounded-lg'
                onClick={Logout}
              >
                Logout
              </button>
            </div>
          )}
          <img
          src={backIcon}
          alt="Back"
          className={`cursor-pointer transition-transform duration-500 w-5 h-5 absolute right-0 ${toggle ? 'm-2' : 'mt-2'}`}
          style={{ transform: toggle ? 'rotate(-90deg)' : 'rotate(0deg)' }}
          onClick={handleClick}
        />
        </div>
        <SearchBar toggle={toggle} />
        {/* contacts */}
        <Contacts toggle={toggle} handleClick={handleClick} />

      </div>
      {/* ChatBox */}
      <div
        className={`absolute right-0 top-0 bottom-0 bg-emerald-50 shadow-xl m-3 rounded-lg transition-width duration-500 ${
          toggle ? 'w-[89%]' : 'w-[72%]'
        }`}
      >
        

      </div>
    </div>
  );
};

export default ChatBox;
