import React, { useState } from "react";
import './CollectionPreview_46.scss';
import CollectionItem_46 from "./CollectionItem_46";
import items2 from './collection-items-data';
// const CollectionPreview_46 = ({ title, Url, name, price }) => {
//     return (
//         <div>
//             <div className="collection-preview">
//                 <h2 className="title">{title}</h2>
//                 <div className="preview">
//                     <div className="collection-item">
//                         <img className="image" src={Url} />
//                         <div className="collection-footer">
//                             <span className="name">{name}</span>
//                             <span className="price">{price}</span>
//                         </div>
//                         <button className="custom-button">Add to Cart</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
const CollectionPreview_46 = ({ title }) => {
    const [collectionItems, setcollectionItems] = useState(items2);
    return (

        <div className="collection-preview">
            <h2 className="title">{title}</h2>
            <div className="preview">
                {collectionItems.map((item2) => {
                    const { id, Url, name, price } = item2;
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
export default CollectionPreview_46;