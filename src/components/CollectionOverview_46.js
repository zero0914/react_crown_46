import React, { useState } from "react";
import './CollectionOverview_46.scss';
import CollectionPreview_46 from "./CollectionPreview_46";
import items2 from './collection-items-data';

const CollectionOverview_46 = () => {

    return (

        <div className="collection-overview">
            <CollectionPreview_46

            />
        </div>

    )
}
export default CollectionOverview_46;
// const [collectionItems, setcollectionItems] = useState(items2);
//     return (

//         <div className="collection-overview">
//             {collectionItems.map((item2) => {
//                 const { id, title, Url, name, price } = item2;
//                 console.log("collectionItems", collectionItems)
//                 return (
//                     <CollectionPreview_46
//                     />

//                 )
//             })}
//         </div>

//     )