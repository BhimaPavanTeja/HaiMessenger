import React from 'react';
import k1 from './k1.jpeg';
import k2 from './k2.jpeg';
import k3 from './k3.jpeg';

const data = [
  {
    profilepic: k1,
    username: 'Lakshmi kiran kalluru',
  },
  {
    profilepic: k2,
    username: 'Pavan Teja',
  },
  {
    profilepic: k3,
    username: 'karthik',
  },
  {
    profilepic: k1,
    username: 'Lakshmi kiran kalluru',
  },
  {
    profilepic: k2,
    username: 'Pavan Teja',
  },
  {
    profilepic: k3,
    username: 'karthik',
  },
  {
    profilepic: k1,
    username: 'Lakshmi kiran kalluru',
  },
  {
    profilepic: k2,
    username: 'Pavan Teja',
  },
  {
    profilepic: k3,
    username: 'karthik',
  },
  {
    profilepic: k1,
    username: 'Lakshmi kiran kalluru',
  },
  {
    profilepic: k2,
    username: 'Pavan Teja',
  },
  {
    profilepic: k3,
    username: 'karthik',
  },
];

const Contacts = ({ toggle, handleClick }) => {
  return (
    <div>
      {data.map((contact, index) => (
        <div
          key={index}
          className={`flex items-center mb-2 transition-all duration-500 ease-in-out ${
            toggle ? 'mx-4 justify-center' : 'm-3'
          } hover:bg-gray-600 rounded-xl cursor-pointer`}
          // onClick={() => handleClick(contact)}
        >
          <img
            src={contact.profilepic}
            alt="Avatar"
            className={`object-cover rounded-full min-w-12 h-12 m-2 cursor-pointer transition-all duration-500 ease-in-out ${
              toggle ? 'mx-6 w-12 h-12' : ''
            }`}
          />
          {!toggle && (
            <h1 className="text-white ml-1 font-medium whitespace-pre transition-opacity duration-500 ease-in-out opacity-100">
              {contact.username}
            </h1>
          )}
        </div>
      ))}
    </div>
  );
};

export default Contacts;
