import React from 'react';
import './Stock.scss'

type StockProps = {
    name: string;
    image: string;
    price: number;
}


const Stock: React.FC<StockProps> = ({name, image, price}) => {
    return (
        <div className="stock">
            <h3 className="stock__name">{name}</h3>
            <div className="stock__image">{image}</div>
            <div className="stock__price">{price} $</div>
        </div>
    );
};

export default Stock;