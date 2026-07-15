import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./ProductList.css";
import { incrementQuantity, decrementQuantity, addToCart } from "./CartSlice";
import { HARDCODED_CATALOGUE } from "./CartSlice";

import { productItems, readQuantity } from "./CartSlice";

import CartItem from "./CartItem";

import { FiShoppingCart } from 'react-icons/fi';

const ProductList = () => {

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
        dispatch(addToCart(itemName));
    };

    //const noItemsInCart = (state) => state.noItemsInCart;

    //const remainingAuditoriumQuantity = 3 - venueItems.find(item => item.name === "Auditorium Hall (Capacity:200)").quantity;

    /*
    const handleToggleItems = () => {
        console.log("handleToggleItems called");
        setShowItems(!showItems);
    };

    const handleAddToCart = (index) => {
        if (venueItems[index].name === "Auditorium Hall (Capacity:200)" && venueItems[index].quantity >= 3) {
            return;
        }
        dispatch(incrementQuantity(index));
    };

    const handleRemoveFromCart = (index) => {
        if (venueItems[index].quantity > 0) {
            dispatch(decrementQuantity(index));
        }
    };

    const handleIncrementAvQuantity = (index) => {
        dispatch(incrementAvQuantity(index));
    };

    const handleDecrementAvQuantity = (index) => {
        dispatch(decrementAvQuantity(index));
    };

    const handleMealSelection = (index) => {
        const item = mealsItems[index];
        if (item.selected && item.type === "mealForPeople") {
            // Ensure numberOfPeople is set before toggling selection
            const newNumberOfPeople = item.selected ? numberOfPeople : 0;
            dispatch(toggleMealSelection(index, newNumberOfPeople));
        }
        else {
            dispatch(toggleMealSelection(index));
        }
    };

    const getItemsFromTotalCost = () => {
        const items = [];

        venueItems.forEach((item) => {
            if (item.quantity > 0) {
                items.push({ ...item, type: "venue" });
            }
        });

        avItems.forEach((item) => {
            if (
                item.quantity > 0 &&
                !items.some((i) => i.name === item.name && i.type === "av")
            ) {
                items.push({ ...item, type: "av" });
            }
        });

        mealsItems.forEach((item) => {
            if (item.selected) {
                const itemForDisplay = { ...item, type: "meals" };
                if (item.numberOfPeople) {
                    itemForDisplay.numberOfPeople = numberOfPeople;
                }
                items.push(itemForDisplay);
            }
        });
        return items;
    };

    const items = getItemsFromTotalCost();

    const ItemsDisplay = ({ items }) => {
        console.log(items);
        return <>
            <div className="display_box1">
                {items.length === 0 && <p>No items selected</p>}
                <table className="table_item_data">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Unit Cost</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>${item.cost}</td>
                                <td>
                                    {item.type === "meals" || item.numberOfPeople
                                        ? ` For ${numberOfPeople} people`
                                        : item.quantity}
                                </td>
                                <td>{item.type === "meals" || item.numberOfPeople
                                    ? `${item.cost * numberOfPeople}`
                                    : `${item.cost * item.quantity}`}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    };
    const calculateTotalCost = (section) => {
        let totalCost = 0;
        if (section === "venue") {
            venueItems.forEach((item) => {
                totalCost += item.cost * item.quantity;
            });
        } else if (section === "av") {
            avItems.forEach((item) => {
                totalCost += item.cost * item.quantity;
            });
        } else if (section === "meals") {
            mealsItems.forEach((item) => {
                if (item.selected) {
                    totalCost += item.cost * numberOfPeople;
                }
            });
        }
        return totalCost;
    };
    const venueTotalCost = calculateTotalCost("venue");
    const avTotalCost = calculateTotalCost("av");
    const mealsTotalCost = calculateTotalCost("meals");
    const navigateToProducts = (idType) => {
        if (idType == '#venue' || idType == '#addons' || idType == '#meals') {
            if (showItems) { // Check if showItems is false
                setShowItems(!showItems); // Toggle showItems to true only if it's currently false
            }
        }
    }
    const totalCosts = {
        venue: venueTotalCost,
        av: avTotalCost,
        meals: mealsTotalCost,
    };
    */


    return (
        <>
            <nav class="navbar">
                <div class="navbar-left">
                    <div className="company_logo">Paradise Nursery</div>
                </div>

                <div class="navbar-center">

                </div>

                <div className="navbar-right">
                    <button className="icon_button" onClick={() => setShowCart(!showCart)} aria-label="Show cart">


                        <div className="cart_container">
                            <FiShoppingCart color="white" size="38px" />
                            <span className="cart_number">{noItemsInCart}</span>
                        </div>

                    </button>
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
                                        <div className="transparent-text-box">{cat.name} Flower Selection</div>
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
                        <div className="total_amount_detail">
                           <CartItem />
                        </div>
                    )
                }

            </div>
        </>

    );
};

export default ProductList;
