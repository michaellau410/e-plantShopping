import React, { useState } from "react";
import "./ShoppingMain.css";
import TotalCost from "./TotalCost";
//import { toggleMealSelection } from "./mealsSlice";
//import { incrementAvQuantity, decrementAvQuantity } from "./avSlice";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "./productsSlice";
import { HARDCODED_CATALOGUE } from "./productsSlice";

const ShoppingMain = () => {

    /* state.xxx where xxx is exported from store.js */
    /* everything about those flower groups */
    const productListItems = useSelector((state) => state.products);



    /* this is for going to shopping cart page*/
    const [showCart, setShowCart] = useState(false);


    const [numberOfPeople, setNumberOfPeople] = useState(1);



    const dispatch = useDispatch();

    /* update the flower state, set 0 to 1  */
    const handleAddToCartCart = (index) => {
       dispatch(incrementQuantity(index));
    };

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

                <div class="navbar-right">
                    <button className="details_button" onClick={() => setShowCart(!showCart)}>
                        Show Cart
                    </button>
                </div>
            </nav>


            <div className="main_container">
                {!showCart /* control to show 1. flower select screen or 2. cart*/
                    ?
                    (

                        <div className="items-information"> 
                            {
                                HARDCODED_CATALOGUE.map((cat) => (
                                    <>
                                        <div className="transparent-text-box">{cat.name} Flower Selection</div>
                           <div id="productList" className="flower_container container_main">
                                <div className="flower_selection">
                                    {productListItems.filter((item)=>item.cat===cat.name).map((item, index) => (
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
                                                         " btn-not-available btn-disabled": " btn-available" }
                                                    onClick={() => handleAddToCartCart(item.name)}
                                                >
                                                    Add{item.quantity >= 1 ?"ed":""} to Cart
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                                    </>
                                ))
                            }



                            




                            {/*Necessary Add-ons*/}
                            {/*
                            <div id="addons" className="venue_container container_main">

                                <div className="text">

                                    <h1> Add-ons Selection</h1>

                                </div>
                                <div className="addons_selection">
                                    {avItems.map((item, index) => (
                                        <div className="av_data venue_main" key={index}>
                                            <div className="img">
                                                <img src={item.img} alt={item.name} />
                                            </div>
                                            <div className="text"> {item.name} </div>
                                            <div> ${item.cost} </div>
                                            <div className="addons_btn">
                                                <button className="btn-warning" onClick={() => handleDecrementAvQuantity(index)}> &ndash; </button>
                                                <span className="quantity-value">{item.quantity}</span>
                                                <button className=" btn-success" onClick={() => handleIncrementAvQuantity(index)}> &#43; </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="total_cost">Total Cost: {avTotalCost}</div>
                            </div>
                            */}

                            {/* Meal Section */}
                            {/*            
                            <div id="meals" className="venue_container container_main">

                                <div className="text">

                                    <h1>Meals Selection</h1>
                                </div>

                                <div className="input-container venue_selection">
                                    <div className="input-container venue_selection">
                                        <label htmlFor="numberOfPeople"><h3>Number of People:</h3></label>
                                        <input type="number" className="input_box5" id="numberOfPeople" value={numberOfPeople}
                                            onChange={(e) => setNumberOfPeople(parseInt(e.target.value))}
                                            min="1"
                                        />
                                    </div>
                                </div>
                                <div className="meal_selection">
                                    {mealsItems.map((item, index) => (
                                        <div className="meal_item" key={index} style={{ padding: 15 }}>
                                            <div className="inner">
                                                <input type="checkbox" id={`meal_${index}`}
                                                    checked={item.selected}
                                                    onChange={() => handleMealSelection(index)}
                                                />
                                                <label htmlFor={`meal_${index}`}> {item.name} </label>
                                            </div>
                                            <div className="meal_cost">${item.cost}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="total_cost">Total Cost: {mealsTotalCost}</div>

                            </div>
                            */}
                        </div>
                    ) : (
                        <div className="total_amount_detail">
                            <TotalCost totalCosts={totalCosts} ItemsDisplay={() => <ItemsDisplay items={items} />} />
                        </div>
                    )
                }

            </div>
        </>

    );
};

export default ShoppingMain;
