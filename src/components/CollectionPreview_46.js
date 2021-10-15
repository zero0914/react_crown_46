import react from "react";
import './CollectionPreview_46.scss';
const CollectionPreview_46 = ({ title, Url, name, price }) => {
    return (
        <div>
            <div className="collection-preview">
                <h2 className="title">{title}</h2>
                <div className="preview">
                    <div className="collection-item">
                        <img className="image" src={Url} />
                        <div className="collection-footer">
                            <span className="name">{name}</span>
                            <span className="price">{price}</span>
                        </div>
                        <button className="custom-button">Add to Cart</button>
                    </div>
                    <div className="collection-item">
                        <img className="image" src={Url} />
                        <div className="collection-footer">
                            <span className="name">{name}</span>
                            <span className="price">{price}</span>
                        </div>
                        <button className="custom-button">Add to Cart</button>
                    </div>
                    <div className="collection-item">
                        <img className="image" src={Url} />
                        <div className="collection-footer">
                            <span className="name">{name}</span>
                            <span className="price">{price}</span>
                        </div>
                        <button className="custom-button">Add to Cart</button>
                    </div>
                    <div className="collection-item">
                        <img className="image" src={Url} />
                        <div className="collection-footer">
                            <span className="name">{name}</span>
                            <span className="price">{price}</span>
                        </div>
                        <button className="custom-button">Add to Cart</button>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default CollectionPreview_46;