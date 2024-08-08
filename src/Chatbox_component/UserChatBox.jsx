import React, { useState }  from 'react'
import chatGptIcon from './chatgpt.png';
import emojiIcon from './addemoji.png';
import filesIcon from './attachfile.png';
import sendIcon from './send.png';
import infoIcon from './info.png';
import eximage from '../Contacts_component/k1.jpeg';

const UserChatBox = () => {
    const [color, setColor] = useState(false);
    const btnClick = () => {
        setColor(!color);
      }
  return (
    <>
      <div className="top bg-gray-700 h-[10%] w-[100%] rounded-t-md">
        <div className="flex justify-between items-center">
            <div className='flex items-center'>
            <img src={eximage} className='h-10 w-10 m-2 rounded-full object-cover cursor-pointer' />
            <p className="text-white font-medium">
              Lakshmi Kiran Kalluru
            </p>
            </div>
            <img src={infoIcon} className='h-6 w-6 mr-2 cursor-pointer'/>
        </div>
      </div>
        <div className="middle bg-slate-100 h-[79%] w-[100%]"></div>
        <div className={`bottom-0 flex items-center h-[11%] w-[100%] rounded-b-md ${color?'bg-green-600' : 'bg-gray-700'} duration-300`}>
          <button><img src={chatGptIcon} alt="ai" className='flex-1 h-10 w-10 ml-4 cursor-pointer' onClick={btnClick}/></button>
          <button><img src={emojiIcon} alt="emojis" className='flex-1 h-7 w-7 ml-3 cursor-pointer'/></button>
          <button><img src={filesIcon} alt="files" className='flex-1 h-7 w-7 ml-3 cursor-pointer'/></button>
          <input type="text" name="" id="" placeholder='enter your message...' className=' flex-1 h-12 w-80 pl-3 pr-4 rounded-3xl ml-5 outline-none'/>
          <button><img src={sendIcon} alt="send" className='flex-1 h-7 ml-3 mr-3 w-7 cursor-pointer'/></button>
        </div>
    </>
  )
}

export default UserChatBox
