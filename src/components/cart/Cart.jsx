import React from 'react';
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import { Link } from 'react-router-dom';

const CartItem = ({ value, title, img, increment, decrement }) => (

        <div className="cartItem">
            <div>
                <h4>{title}</h4>
                <img src={img} alt={title} />
            </div>

            <div>
                <button onClick={decrement}>-</button>
                <input type='number' value={value} readOnly />
                <button onClick={increment}>+</button>
            </div>
        </div>
    );


const Cart = () => {

    const increment = (item) => {

    }

    const decrement = (item) => {

    }

    return (
        <section className='cart'>
            <main>
                <CartItem title="Cheese Burger" value={0} img={burger1} increment={() => increment(1)} decrement={() => decrement(1)} />
                <CartItem title=" Double Patty Cheese Burger" value={0} img={burger2} increment={() => increment(2)} decrement={() => decrement(2)} />
                <CartItem title="Cheese Burger with Fries" value={0} img={burger3} increment={() => increment(3)} decrement={() => decrement(3)} />


                <article>
                    <div>
                        <h4>Subtotal</h4>
                        <p>₹ {800}</p>
                    </div>

                    <div>
                        <h4>Tax</h4>
                        <p>₹ {800 * 0.18}</p>
                    </div>

                    <div>
                        <h4>Shipping Charges</h4>
                        <p>₹ {35}</p>
                    </div>

                    <div>
                        <h4>Total </h4>
                        <p>₹ {800 + 800 * 0.18 + 35}</p>
                    </div>

                    <Link to="/shipping">Checkout</Link>
                </article>

            </main>
        </section>
    )
}

export default Cart;