import React from 'react';
import { motion } from "framer-motion";
import me from "../../assets/founder.jpeg"

const Founder = () => {

    const options = {
        initial: {
            x: "-100%",
            opacity: 0
        },
        whileInView: {
            x: 0,
            opacity: 1
        }
    };

    return (
        <section className='founder'>
            <motion.div {...options}>
                <img src={me} alt='Rajesh Chopra' height={200} width={200} />
                <h3>Rajesh Chopra</h3>
                <p>Hello, I am the founder of Food Corner and our aim is to
                    to ease your cravings by delivering a tasty snack withing 15-25min of the order.
                </p>
            </motion.div>
        </section>
    )
}

export default Founder;