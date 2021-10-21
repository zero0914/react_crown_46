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

---

4. (local, github) 實作路由 /shop_xx，可以顯示 overview.html 內兩種 category 的資訊 (c1, c2)，每一 category 要顯示 4 筆資料。

- 說明 c1, c2 那是坐那兩個
  > c1=womens , c2=hats
- local 端 Chrome 執行結果截圖
  ![](./6.png)
- Github page 執行結果截圖
  ![](./7.png)
- 重要相關的原始程式碼
  **CollectionItem_46**

```
const CollectionItem_46 = ({ Url, name, price }) => {
    return (
        <div className="collection-item">
            <img className="image" src={Url} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <button className="custom-button">Add to Cart</button>
        </div>
    )
}
```

**CollectionOverview_46**

```
const CollectionOverview_46 = ({title}) => {

    return (

        <div className="collection-overview">
            <h2 class="title">{title}</h2>
            <CollectionPreview_46

            />
        </div>

    )
}
```

**CollectionPreview_46**

```
const CollectionPreview_46 = ({ title }) => {
    const [collectionItems, setcollectionItems] = useState(items2);
    return (

        <div className="collection-preview">
            <h2 className="title">{title}</h2>
            <div className="preview">
                {collectionItems.map((item2) => {
                    const { id, Url, name, price,title } = item2;
                    console.log("collectionItems", collectionItems)
                    return (
                        <CollectionItem_46
                            key={id}
                            Url={Url}
                            name={name}
                            price={price}
                        />
                    )
                })}
            </div>
        </div>
    )
}
```

**collection-items-data**

```
const items2 = [
    {
        id: 1,
        title: 'Womens',
        name: 'Blue Tanktop',
        Url: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: '25',
    },
    {
        id: 2,
        name: 'Floral Blouse',
        Url: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: '20',
    },
    {
        id: 3,
        name: 'Floral Dress',
        Url: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: '80',
    },
    {
        id: 4,
        name: 'Red Dots Dress',
        Url: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: '80',
    },
    {
        id: 5,
        title: 'HATS',
        name: 'Brown Brim',
        Url: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: '25',
    },
    {
        id: 6,
        name: 'Blue Beanie',
        Url: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        price: '18',
    },
    {
        id: 7,
        name: 'Brown Cowboy',
        Url: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        price: '35',
    },
    {
        id: 8,
        name: 'Grey Brim',
        Url: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
        price: '25',
    },

]
export default items2;
```

---

5. 將目前所完成的 React code 放入 Github 中，建立的 repository 要顯示 id 資訊。要繳交

- repository URL 及截圖，可以看到你的原始程式碼，
  ![](./8.png)
- Github page 設定之截圖
- Github page URL 及截圖，可以執行 React 程式

---

6. (local) 加入 header，能顯示 logo 及選單，
   -- 點選 logo，會回到主頁 (路由 /)
   -- 點選 Shop，會到 Shop Overview Page (路由 /shop_xx)，要能顯示上面第 4 題的內容
   -- 點選 Contact，會到 Contact Page (路由 /contact_xx)
   -- 點選 Contact，會到 Signin Page (路由 /signin_xx)

- local 端 Chrome /shop_xx 執行結果截圖
  ![](./9.png)
- local 端 Chrome /contact 執行結果截圖
  ![](./10.png)
- 跟路由 /shop_xx 有關的原始程式碼
  ![](./11.png)

---

7. (heroku) 在 Heroku 上要能顯示第 6 題的 header。

- Heroku 上 Chrome /shop_xx 執行結果截圖
