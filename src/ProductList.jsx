import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./ProductList.css";
import { updateQuantity } from "./CartSlice";
import { HARDCODED_CATALOGUE } from "./CartSlice";

import { productItems, readQuantity } from "./CartSlice";

import CartItem from "./CartItem";

import { FiShoppingCart } from 'react-icons/fi';

const ProductList = ({showProductList, setShowProductList}) => {

    /* state.xxx where xxx is exported from store.js */
    /* everything about those flower groups */
    const items = useSelector(productItems);
    const noItemsInCart = useSelector(readQuantity);

    /* this is for decising show prodict list or shop cart */
    const [showCart, setShowCart] = useState(false);

    /* for sending out updated data */
    const dispatch = useDispatch();

    /* call reducer to take action */
    const handleAddToCart = (itemName) => {
        const found  = items.find( item => item.name === itemName && item.quality > 0 );
        if(!found)
        {
            dispatch(updateQuantity(itemName));
        }
    };

    return (
        <>
            <nav class="navbar">
                <div class="navbar-left">
                    <div className="company_logo">Paradise Nursery</div>
                </div>

                <div class="navbar-center">
                    <div onClick={() => {setShowProductList(false);setShowCart(false);}
                    }>
                        Home
                    </div>
                    <div onClick={() => {setShowProductList(true);setShowCart(false);}
                    }>
                        Product
                    </div>
                    <div onClick={() => setShowCart(true)}>
                        Cart
                    </div>

                </div>

                <div className="navbar-right">
                    <div className="cart_container" onClick={() => setShowCart(!showCart)} aria-label="Show cart">
                        <FiShoppingCart color="white" size="44px" stroke-width="1" />
                        <span className="cart_number">{noItemsInCart}</span>
                    </div>

                </div>
            </nav>


            <div className="main_container">
                {!showCart /* control to show 1. flower select screen or 2. cart*/
                    ?
                    (

                        <div className="items-information">
                            {/* loop the catalogue */}
                            {/* then for each catalogue, loop and filter the product full list */}
                            {
                                HARDCODED_CATALOGUE.map((cat) => (
                                    <>
                                        <div className="title-label-1">{cat.name} Flower Selection</div>
                                        <div id="productList" className="flower_container container_main">
                                            <div className="flower_selection">
                                                {items.filter((item) => item.cat === cat.name).map((item, index) => (
                                                    <div className="flower_main" key={item.name}>
                                                        <div className="flower_name">{item.name}</div>
                                                        <div className="img-container">
                                                            <img src={`${import.meta.env.BASE_URL}/images/${item.img}`} alt={item.name} />
                                                        </div>
                                                        <div className="flower_price">${item.price}</div>
                                                        <div className="flower_desc">{item.desc}</div>
                                                        <div className="button_container">
                                                            <button
                                                                className={item.quantity >= 1 ?
                                                                    " btn-not-available btn-disabled" : " btn-available"}
                                                                onClick={() => handleAddToCart(item.name)}
                                                            >
                                                                Add{item.quantity >= 1 ? "ed" : ""} to Cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ))
                            }

                        </div>
                    ) : (
                        <CartItem showCart={showCart} setShowCart={setShowCart}/>
                    )
                }

            </div>
        </>

    );
};

export default ProductList;
