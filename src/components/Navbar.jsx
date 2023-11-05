import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">QuickChat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/17917609/pexels-photo-17917609/free-photo-of-woman-leaning-on-chair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <span>Shiv</span>
        <button>logout</button>
      </div>

    </div>
  )
}

export default Navbar