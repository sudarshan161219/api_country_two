import React from 'react';
import {HiOutlineMoon} from 'react-icons/hi'

const Header = () => {
    return (

      <div className='header-nav'>
      <h1>Where in the world?</h1>


      <div className='dark-light' >
        <HiOutlineMoon className='icon' />
        <p>Dark Mode</p>
      </div>

      </div>

    );
  };
  
  export default Header;