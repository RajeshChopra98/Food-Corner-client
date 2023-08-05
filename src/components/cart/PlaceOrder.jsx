import React from 'react';
import {motion} from "framer-motion";

const PlaceOrder = () => {
  return (
    <section className='confirmOrder'>
        <main>
            <h1>Confirm Order</h1>
            <form>
                <div>
                    <label htmlFor='CashonDelivery'>Cash on Delivery</label>
                    <input type="radio" name="payment" id="CashonDelivery" />
                </div>

                <div>
                    <label htmlFor='online'>Online</label>
                    <input type="radio" name="payment" id="online" />
                </div>

                <motion.button type='submit'
                    initial={{
                        y : "-200%",
                        opacity : 0
                    }}

                    animate = {{
                        y : 0,
                        opacity : 1
                    }}
                > Place Order </motion.button>

            </form>
        </main>
    </section>
  )
}

export default PlaceOrder