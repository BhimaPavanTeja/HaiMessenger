import React from 'react'
// import Sidebar from './Sidebar'

const Main = ({user, Logout}) => {
  return (
    <>
    {/* <Sidebar username={user}/> */}
    <h2>Welcome to Hai Messenger App!</h2> 
        <img className='m-auto' src={user.photoURL} alt={user.displayName} />
        <h3>Username: {user.displayName}</h3>
        <i><p>Mail: {user.email}</p></i>
        <button style={{ backgroundColor: 'red', color: 'white', padding: '7px', border: 'none' }} onClick={Logout}>Logout</button>
    </>
  )
}

export default Main