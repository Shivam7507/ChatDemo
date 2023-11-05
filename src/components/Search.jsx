import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text"  placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/17917609/pexels-photo-17917609/free-photo-of-woman-leaning-on-chair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <div className="userChatInfo">
          <span>Shiv</span>
        </div>
      </div>

    </div>
  )
}

export default Search