import React, { useState, useEffect } from 'react';
import MenuItem_46 from './MenuItem_46';
import axios from 'axios';
import './Directory_46.scss';

const Directory2_46 = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const HEROKU_URL = 'https://heroku-crown46.herokuapp.com/api_46/category_46'
      const { data } = await axios.get(HEROKU_URL)
      console.log('/api_46/category_46', data)
      setMenuItems(data)
    }
    fetchMenuItems()
  }, [])

  console.log('menuItems', menuItems);
  return (
    <div>
      <div className='directory-menu'>
        {menuItems.map((item) => {
          const { id, name, remote_url, size } = item;
          return (
            <MenuItem_46
              key={id}
              name={name}
              remote_url={remote_url}
              size={size}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Directory2_46;
