import React from "react"
import './Order.css'
import { Link } from "react-router-dom";

const Order = (props) => {
    return(
        <div className="order-container">
            <div className="order-main">
                <h2 className="order-shopName">
                    Online Fast Food Shop - Order
                </h2>
                <div className="order-details">
                    <span style={{textAlign:"center", marginBottom:20}}><b>Date: </b>{props.data.date}</span>
                    <span style={{textAlign:"center", marginBottom:20}}><b>Order ID: </b> {props.data._id}</span>
                </div>
                <div className="order-buttonContainer">
                    <Link to={`/order/${props.data._id}`} className="order-button">
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Order;