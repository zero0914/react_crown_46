import React from "react";
import './CollectionItem_46.scss';


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

export default CollectionItem_46;