import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div>
                <img src={props?.product?.img} alt="" />
            </div>
            <div className="product-Item">
                <h4 className="product-name">{props?.product?.name}</h4>
                <p><small>by: {props?.product?.seller}</small></p>
                <p className="product-price">Price: ${props?.product?.price}</p>
                <p className="stock-name">only {props?.product?.stock} left in stock - order soon</p>
                <Rating
                    initialRating={props?.product?.star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                <br />
                <button onClick={() => props.handleAddToCart(props.product)} className="btn-regular">{element} add to cart</button>
            </div>
        </div>
    );
};

export default Product;