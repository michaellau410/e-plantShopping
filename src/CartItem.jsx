import React, { useState, useEffect } from 'react';
import "./CartItem.css";


const CartItem = () => {

    /* get the current cart */
    const cart = useSelector((state) => state.cart);

    /* init total no. of item in cart to 0 */
    const [noItemInCart, setNoItemInCart] = useState(0);


    return (
        <><div>this is from cartitem.jsx</div></>
    )


}


const TotalCost = ({ totalCosts, ItemsDisplay }) => {
    const total_amount = totalCosts.venue + totalCosts.av + totalCosts.meals;
    return (
        <div className="pricing-app">
            <div className="display_box">
                <div className="header">
                    <p className="preheading"><h3>Total cost for the event</h3></p>
                </div>
                <div>
                <h2 id="pre_fee_cost_display" className="price">
    ${total_amount}
</h2>
<div className="render_items">
    <ItemsDisplay />
</div>
                </div>
            </div>
        </div>
    );
};
export default CartItem;
