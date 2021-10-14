#Homework

1. (local) 請以 App_xx.js 顯示下圖片

- Chrome 截圖
  ![](./1.png)
- 目錄結構及 App_xx 部分內容截圖
  ![](./2.png)
- App_xx.js code

```
import './App_46.scss';

function App_46() {
  return (
    <div className='homepage'>
      <div className='directory-menu'>
        <div className='menu-item'>
          <img
            className='background-image'
            src='https://i.ibb.co/cvpntL1/hats.png'
            alt=''
          />
          <a href='./hats.html' className='content'>
            <h1 className='title'>HATS</h1>
            <span className='subtitle'>SHOP NOW</span>
          </a>
        </div>
        <div className='menu-item'>
          <img
            className='background-image'
            src='https://i.ibb.co/px2tCc3/jackets.png'
            alt=''
          />
          <a href='./jackets.html' className='content'>
            <h1 className='title'>JACKETS</h1>
            <span className='subtitle'>SHOP NOW</span>
          </a>
        </div>
        <div className='menu-item'>
          <img
            className='background-image'
            src='https://i.ibb.co/0jqHpnp/sneakers.png'
            alt=''
          />
          <a href='./sneakers.html' className='content'>
            <h1 className='title'>SNEAKERS</h1>
            <span className='subtitle'>SHOP NOW</span>
          </a>
        </div>
        <div className='large menu-item'>
          <img
            className='background-image'
            src='https://i.ibb.co/GCCdy8t/womens.png'
            alt=''
          />
          <a href='./womens.html' className='content'>
            <h1 className='title'>WOMENS</h1>
            <span className='subtitle'>SHOP NOW</span>
          </a>
        </div>
        <div className='large menu-item'>
          <img
            className='background-image'
            src='https://i.ibb.co/R70vBrQ/men.png'
            alt=''
          />
          <a href='./mens.html' className='content'>
            <h1 className='title'>MENS</h1>
            <span className='subtitle'>SHOP NOW</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App_46;
```

---

2. (local) 將 homepage 分成如下圖的 components，Homepage_xx.js, Direcory_xx.js, MenuItem_xx.js，並且能夠正常顯示如第 1 題

- Chrome 截圖
  ![](./3.png)

* 目錄結構，要含所有用到的 components
  ![](./4.png)

* Homepage_xx.js code

```
import React from 'react';
import Directory_46 from '../components/Directory_46';
import './Homepage_46.scss';

const Homepage_46 = () => {
  return (
    <div className='homepage'>
      <Directory_46 />
    </div>
  );
};

export default Homepage_46;

```

- Directory_xx.js code

```
import React from 'react';
import MenuItem_46 from './MenuItem_46';
import './Directory_46.scss';

const Directory_46 = () => {
  return (
    <div>
      <div className='directory-menu'>
        <MenuItem_46
          name='HATS'
          remoteUrl='https://i.ibb.co/cvpntL1/hats.png'
          size=''
        />

        <MenuItem_46
          name='JACKETS'
          remoteUrl='https://i.ibb.co/px2tCc3/jackets.png'
          size=''
        />

        <MenuItem_46
          name='SNEAKERS'
          remoteUrl='https://i.ibb.co/0jqHpnp/sneakers.png'
          size=''
        />

        <MenuItem_46
          name='WOMENS'
          remoteUrl='https://i.ibb.co/GCCdy8t/womens.png'
          size='large '
        />

        <MenuItem_46
          name='MENS'
          remoteUrl='https://i.ibb.co/R70vBrQ/men.png'
          size='large '
        />
      </div>
    </div>
  );
};

export default Directory_46;
```

- MenuItem_xx.js code

```
import React from 'react';
import './MenuItem_46.scss';

const MenuItem_46 = ({ name, size, remoteUrl }) => {
  return (
    <div className={`${size}menu-item`}>
      <img className='background-image' src={remoteUrl} alt='' />
      <a href='./hats.html' className='content'>
        <h1 className='title'>{name}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </a>
    </div>
  );
};

export default MenuItem_46;

```

---

3. (local) 將 menu items 五筆資料放入 JSON 陣列中，並能正常顯示如第 1 題。

- Chrome 截圖
  ![](./5.png)
- JSON 陣列 (程式碼，非圖片 )

```
const items = [
    {
        id: 1,
        name='HATS',
        remoteUrl='https://i.ibb.co/cvpntL1/hats.png',
        size='',
    },

    {
        id: 2,
        name='JACKETS',
        remoteUrl='https://i.ibb.co/px2tCc3/jackets.png',
        size='',
    },

    {
        id: 3,
        name='SNEAKERS',
        remoteUrl='https://i.ibb.co/0jqHpnp/sneakers.png',
        size='',
    },

    {
        id: 4,
        name='WOMENS',
        remoteUrl='https://i.ibb.co/GCCdy8t/womens.png',
        size='large ',
    },

    {
        id: 5,
        name='MENS',
        remoteUrl='https://i.ibb.co/R70vBrQ/men.png',
        size='large ',
    },
]
```

- Directory_xx.js code (程式碼，非圖片 )

```
import React, { useState } from 'react';
import MenuItem_46 from './MenuItem_46';
import './Directory_46.scss';
import items from './menu-items-data';

const Directory_46 = () => {
  const [menuItems, setMenuItems] = useState(items);
  console.log('menuItems', menuItems);
  return (
    <div>
      <div className='directory-menu'>
        {menuItems.map((item) => {
          const { id, name, remoteUrl, size } = item;
          return (
            <MenuItem_46
              id={id}
              name={name}
              remoteUrl={remoteUrl}
              size={size}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Directory_46;

```
