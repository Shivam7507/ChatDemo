import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
            <img src="https://images.pexels.com/photos/17917609/pexels-photo-17917609/free-photo-of-woman-leaning-on-chair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="https://images.pexels.com/photos/17917609/pexels-photo-17917609/free-photo-of-woman-leaning-on-chair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />

      </div>
    </div>
  )
}

export default Message