import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <section className='topBarSection shadow'>
      <Link className='companyTitle' to={'/'}>
        <h2>suby</h2>
      </Link>
        
        <div className="searchBar">
            <input type='text' placeholder='Search...' className='search'/>
        </div>
        <div className="userAuth">
            Login/SignUp
        </div>
    </section>
  )
}

export default TopBar