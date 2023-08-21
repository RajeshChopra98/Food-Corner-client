import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderDetails } from "../../redux/actions/order";
import Loader from "../layouts/Loader";



const OrderDetails = () => {

    const params = useParams();

    const { order, loading } = useSelector((state) => state.orders);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrderDetails(params.id));
    }, [params.id, dispatch]);


    return (
        <section className="orderDetails">
            {loading === false && order !== undefined ? (
                <main>
                    <table>
                        <tbody>
                            <tr>
                                <th>Shipping Address</th>
                                <td> {`${order.shippingInfo.hNo} ${order.shippingInfo.city} ${order.shippingInfo.state} ${order.shippingInfo.country} ${order.shippingInfo.pinCode}`}</td>
                            </tr>

                            <tr>
                                <th>Name</th>
                                <td> {order.user.name}</td>
                            </tr> 

                            <tr>
                                <th>Phone No</th>
                                <td>{order.shippingInfo.phoneNo}</td>
                            </tr>

                            <tr>
                                <th>Order Status</th>
                                <td>{order.orderStatus}</td>
                            </tr>

                            <tr>
                                <th>Placed At </th>
                                <td> {order.createdAt.split("T")[0]}</td>
                            </tr>

                            <tr>
                                <th>Delivered At</th>
                                <td> {order.deliveredAt ? order.deliveredAt.split("T")[0] : "NA"}</td>
                            </tr>
                        </tbody>
                    </table>

                    <table>

                        <tbody>
                            <tr>
                                <th>Payment Method</th>
                                <td> {order.paymentMethod}</td>
                            </tr>

                            <tr>
                                <th>Payment Reference</th>
                                <td> {order.paymentMethod === "Online"
                                    ? `#${order.paymentInfo}`
                                    : "NA"}</td>
                            </tr>


                            <tr>
                                <th>Paid At</th>
                                <td> {order.paymentMethod === "Online"
                                    ? order.paidAt.split("T")[0]
                                    : "NA"}</td>
                            </tr>

                            <tr>
                                <th>Items Total</th>
                                <td>₹{order.itemsPrice}</td>
                            </tr>

                            <tr>
                                <th>Shipping Charges</th>
                                <td>₹{order.shippingCharges}</td>
                            </tr>

                            <tr>
                                <th>Tax</th>
                                <td>₹{order.taxPrice}</td>
                            </tr>

                            <tr>
                                <th>Total Amount</th>
                                <td>₹{order.totalAmount}</td>
                            </tr>
                        </tbody>
                    </table>


                    <article>
                        <h1>Ordered Items</h1>
                        <div>
                            <h4>Cheese Burger</h4>
                            <div>
                                <span>{order.orderItems.cheeseBurger.quantity}</span> x
                                <span>{order.orderItems.cheeseBurger.price}</span>
                            </div>
                        </div>
                        <div>
                            <h4>Veg Cheese Burger</h4>
                            <div>
                                <span>{order.orderItems.vegCheeseBurger.quantity}</span> x
                                <span>{order.orderItems.vegCheeseBurger.price}</span>
                            </div>
                        </div>
                        <div>
                            <h4>Burger Fries</h4>
                            <div>
                                <span>{order.orderItems.burgerWithFries.quantity}</span> x
                                <span>{order.orderItems.burgerWithFries.price}</span>
                            </div>
                        </div>

                        <div>
                            <h4
                                style={{
                                    fontWeight: 800,
                                }}
                            >
                                Sub Total
                            </h4>
                            <div
                                style={{
                                    fontWeight: 800,
                                }}
                            >
                                ₹{order.itemsPrice}
                            </div>
                        </div>
                    </article>
                </main>
            ) : (
                <Loader />
            )}
        </section >
    );
};

export default OrderDetails;