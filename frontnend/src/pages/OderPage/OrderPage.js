import React, { useEffect, useState } from 'react'
import './OrderPage.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StoreIcon from '@mui/icons-material/Store';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link , useParams} from "react-router-dom";
import axios from 'axios'

const OrderPage = (props) => {
    const [order, setOrder] = useState()
    const {orderId} = useParams()

    const loadOrder = async() => {
        await axios.get(`http://localhost:5000/api/order/${orderId}`).then(resp=>{
            setOrder(resp.data)
            console.log(resp.data)
        })
    }

    useEffect(()=>{
        loadOrder()
    },[props])

    return(
        <div className="orderPage-container">
            {
                order ?
                <div className="orderPage-main">
                <h2>Your Order</h2>
                <div className="orderPage-row">
                    <div className="shopIcon">
                        <StoreIcon />
                    </div>
                    <div className="orderPage-details">
                        <div>Shop:</div>
                        <span>Online Fast Food Shop</span>
                    </div>
                </div>
                <div className="orderPage-row">
                    <div className="shippingIcon">
                        <LocationOnIcon/>
                    </div>
                    <div className="orderPage-details">
                        <div>Shipping Details</div>
                        <span>
                            {order.shippingDetails.address} ,
                                {order.shippingDetails.houseNumber} ,  
                                {order.shippingDetails.zip} , 
                                {order.shippingDetails.city} 
                        </span>
                        <span> Note: {order.note}</span>
                    </div>
                </div>
                <div className="orderPage-row">
                    <div className="costIcon">
                        <ShoppingCartIcon/>
                    </div>
                    <div className="orderPage-details">
                        <div>Total Price:</div>
                        <span>{order.totalPrice} {order.currency}</span>
                    </div>
                </div>
                <div className="orderPage-row">
                    <div className="payMethod">
                        <AttachMoneyIcon/>
                    </div>
                    <div className="orderPage-details">
                        <div>Payment Method:</div>
                        <span>{order.paymentMethod}</span>
                    </div>
                </div>

                <h3>Cart</h3>

                {
                    order.orderDetails.length !== 0 ?
                        order.orderDetails.map(orderDetails=>{
                            return(
                                <div className="orderPage-cart-container">
                                    <div className="orderPage-cartDetails">
                                        <div className="orderPage-productName">
                                            {orderDetails.product.name}
                                        </div>
                                        <div className="orderPage-productDescription">
                                            {orderDetails.product.description}
                                        </div>
                                        <div className="orderPage-quantity">Quantity: {orderDetails.quantity}</div>
                                    </div>
                                    <div className="orderPage-partialCost">
                                        {orderDetails.price} &euro;
                                    </div>
                                </div> 
                            )
                        })
                    : <div>There are no order details</div>
                }

                <Link className="orderPage-button" to="/">Back</Link>
            </div>: <div>Can not find the order</div>
            }
        </div>
    )
}

export default OrderPage