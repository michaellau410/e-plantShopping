import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import "./CartItem.css";

import { incrementQuantity, decrementQuantity, removeFromCart } from "./CartSlice";
import { productItems, readCartAmount } from "./CartSlice";



const CartItem = ({ showCart, setShowCart }) => {

    const items = useSelector(productItems);
    const dispatch = useDispatch();
    const totalAmount = useSelector(readCartAmount);

    const handleRemoveFromCart = (itemName) => {
        dispatch(removeFromCart(itemName));
    };

    const handleIncrementQuantity = (index) => {
        dispatch(incrementQuantity(index));
    };

    const handleDecrementQuantity = (index) => {
        dispatch(decrementQuantity(index));
    };

    return (
        <>
            <div className="cart-information">


                <div className="title-label-2">Total Cart Amount ${totalAmount}</div>

                {items.filter((item) => item.quantity > 0).map((item, index) => (
                    <div class="cart-item">
                        <div className="img-container">
                            <img src={`${import.meta.env.BASE_URL}/images/${item.img}`} alt={item.name} />
                        </div>

                        <div class="product-details">
                            <div>
                                <h2 class="product-title">{item.name}</h2>
                                <div class="product-price">${item.price}</div>

                                <div class="quantity-controls">
                                    <button class={item.quantity === 1 ? " btn-qty btn-disabled" : " btn-qty "} onClick={() => handleDecrementQuantity(item.name)} >-</button>
                                    <span class="qty-value">{item.quantity}</span>
                                    <button class="btn-qty" onClick={() => handleIncrementQuantity(item.name)} >+</button>
                                </div>

                                <div class="total-price">Total: ${item.quantity * item.price}</div>
                            </div>

                            <button class="btn-delete" onClick={() => handleRemoveFromCart(item.name)}>Delete</button>
                        </div>
                    </div>
                ))}
                <div></div>
                <div className="button_container">
                    <button className="btn-available-large" onClick={() => setShowCart(!showCart)} >Coutinue Shopping</button>
                </div>
                <div></div>
                <div className="button_container">
                    <button className="btn-available-large">CheckOut</button>
                </div>
            </div>



        </>
    )


}



export default CartItem;
