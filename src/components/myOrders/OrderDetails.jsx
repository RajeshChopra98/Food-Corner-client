import React from "react";

const OrderDetails = () => {
    return (
        <section className="orderDetails">
            <main>

                <table>
                    <tbody>
                        <tr>
                            <th>Shipping Address</th>
                            <td>{"sjda 12-32ss dsad"}</td>
                        </tr>

                        <tr>
                            <th>Name</th>
                            <td>{"Rajesh Chopra"}</td>
                        </tr>

                        <tr>
                            <th>Phone No</th>
                            <td>{454644313164}</td>
                        </tr>

                        <tr>
                            <th>Order Status</th>
                            <td>Processing</td>
                        </tr>

                        <tr>
                            <th>Placed At </th>
                            <td> {"23-02-2002"}</td>
                        </tr>

                        <tr>
                            <th>Delivered At</th>
                            <td>{"23-02-2003"}</td>
                        </tr>
                    </tbody>
                </table>

                <table>

                    <tbody>
                        <tr>
                            <th>Payment Method</th>
                            <td> {"Online"}</td>
                        </tr>

                        <tr>
                            <th>Payment Reference</th>
                            <td>#{"asdasdsadsad"}</td>
                        </tr>


                        <tr>
                            <th>Paid At</th>
                            <td>{"23-02-2003"}</td>
                        </tr>

                        <tr>
                            <th>Items Total</th>
                            <td>₹{2132}</td>
                        </tr>

                        <tr>
                            <th>Shipping Charges</th>
                            <td>₹{200}</td>
                        </tr>

                        <tr>
                            <th>Tax</th>
                            <td>₹{232}</td>
                        </tr>

                        <tr>
                            <th>Total Amount</th>
                            <td>₹{232 + 200 + 2132}</td>
                        </tr>
                    </tbody>
                </table>


                <article>
                    <h1>Ordered Items</h1>
                    <div>
                        <h4>Cheese Burger</h4>
                        <div>
                            <span>{12}</span> x <span>{232}</span>
                        </div>
                    </div>
                    <div>
                        <h4>Veg Cheese Burger</h4>
                        <div>
                            <span>{10}</span> x <span>{500}</span>
                        </div>
                    </div>
                    <div>
                        <h4>Burger Fries</h4>
                        <div>
                            <span>{10}</span> x <span>{1800}</span>
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
                            ₹{2132}
                        </div>
                    </div>
                </article>
            </main>
        </section >
    );
};

export default OrderDetails;