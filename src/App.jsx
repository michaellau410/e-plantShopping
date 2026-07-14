import React, { useState } from "react";
import "./App.css";
import ShoppingMain from "./ShoppingMain";
import AboutUs from "./AboutUs";

function App() {

    /* to show SHoppingMain after clicking "Get Started" */
    const [showMain, setShowMain] = useState(false);
    const handleGetStarted = () => {
        setShowMain(true);
    };

    return (
        <>
            <header className="first_page">
                <div className="main_event">
                    <div className="first_page_name_btn">
                        <h1 className="budget_heading">Paradise Nursery</h1>
                        <p className="budget_sentence"> Plan your next garden with us!</p>
                        <div className="getstarted_btn">
                            <button onClick={() => handleGetStarted()} className="get-started-btn">
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div className="aboutus_main">
                        <AboutUs />
                    </div>
                </div>
            </header>

            <div className={`event-list-container ${showMain ? 'visible' : ''}`}>
                <ShoppingMain />
            </div>
        </>
    );
}

export default App;
