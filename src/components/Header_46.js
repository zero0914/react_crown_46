import React from 'react';
import {Link} from 'react-router-dom'
import './Header_46.scss'
import { ReactComponent as Logo } from '../assets/crown.svg';

const Header_46 = () => {
  return (
    <div>
      <div className='header'>
        <Link to='/' className='logo-container'>
          <Logo/>
        </Link>
        <div className='options'>
          <Link to='shop_46' className='option'>
            Shop
          </Link>
          <Link to='/contact_46' className='option'>
            Contact
          </Link>
          <Link to='/signin_46' className='option'>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header_46;
