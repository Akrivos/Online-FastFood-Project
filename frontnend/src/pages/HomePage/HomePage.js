import React, { useEffect, useState } from 'react'
import Order from '../../components/Order/Order'
import "./HomePage.css"
import axios from 'axios'

const HomePage = () => {
    const [orders, setOrders] = useState()

    const loadOrders = async() => {
        await axios.get("http://localhost:5000/api/orders").then(resp=>{
            setOrders(resp.data)
            console.log(resp.data)
        })
    }

    useEffect(()=>{
        loadOrders()
    },[])

    return(
        <div className="homePage-container">
            <h1 style={{textAlign:"center"}}>Order List</h1>
            <div className="homePage-main">
                {
                    orders ? 
                        orders.map(order=>{
                            return <Order data={order}/>
                        })
                    : <div> THERE ARE NO ORDERS</div>
                }
            </div>
        </div>
    )
}

export default HomePage;