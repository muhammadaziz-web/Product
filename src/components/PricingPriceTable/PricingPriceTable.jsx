import React from "react";
import { NavLink } from "react-router-dom";
import "./PricingPriceTable.css"

const PricingPriceTable = () => {
    return(
        <div>
            <div className="container">
                <div className="PriceTable">
                    <h3 className="PricingPriceTableName">
                        PRICING
                    </h3>
                    <h1>
                        Let’s get some real work done here.
                    </h1>
                    <p>
                        Prodict is your perfect solution for working. Get started now for free
                    </p>
                    <div className="PriceTableBoxs">
                        <span></span>
                        <div className="PriceTableBox">
                            <h3>
                                Free
                            </h3>
                            <p>
                                Brief price description
                            </p>
                            <div className="PriceTableBoxPrice">
                                <span>0</span>
                                <p>
                                    <span>$</span>
                                    Per / month
                                </p>
                            </div>
                            <p>
                                Only 2 Op erators
                            </p>
                            <p>
                                Notifications
                            </p>
                            <p>
                                Landing Pages
                            </p>
                            <div className="PriceTableBoxBtn">
                                <NavLink >
                                    Order Now
                                </NavLink>
                            </div>
                        </div>
                        <div className="PriceTableBox">
                            <h3>
                                Standard
                            </h3>
                            <p>
                                Brief price description
                            </p>
                            <div className="PriceTableBoxPrice">
                                <span>5</span>
                                <p>
                                    <span>$</span>
                                    Per / month
                                </p>
                            </div>
                            <p>
                                5+ Operators
                            </p>
                            <p>
                                Notifications
                            </p>
                            <p>
                                Landing Pages
                            </p>
                            <div className="PriceTableBoxBtn">
                                <NavLink >
                                    Order Now
                                </NavLink>
                            </div>
                        </div>
                        <div className="PriceTableBox">
                            <h3>
                                Premium
                            </h3>
                            <p>
                                Brief price description
                            </p>
                            <div className="PriceTableBoxPrice">
                                <span>10</span>
                                <p>
                                    <span>$</span>
                                    Per / month
                                </p>
                            </div>
                            <p>
                                10+ Operators
                            </p>
                            <p>
                                Notifications
                            </p>
                            <p>
                                Landing Pages
                            </p>
                            <div className="PriceTableBoxBtn">
                                <NavLink >
                                    Order Now
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PricingPriceTable;