import React from 'react'
import ChatBox from './sidebar-component/ChatBox'

const Main = ({user , Logout}) => {
  return (
    <>
    <ChatBox username={user} Logout={Logout}/>
    {/* <h2>Welcome to Hai Messenger App by React Developers!</h2> 
        <img className='m-auto' src={user.photoURL} alt={user.displayName} />
        <h3>Username: {user.displayName}</h3>
        <i><p>ur Mail: {user.email}</p></i>
        <button style={{ backgroundColor: 'red', color: 'white', padding: '7px', border: 'none' }} onClick={Logout}>Logout</button> */}
    </>
  )
}

export default Main