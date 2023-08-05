import React from 'react';
import { motion } from "framer-motion"
import Founder from './Founder';
import Menu from './Menu';

const Home = () => {

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
    <>
      <section className='home'>
        <div>
          <motion.h1 {...options}>Food Corner</motion.h1>
          <motion.p {...options} transition={{ delay: 0.4 }}>Calm your cravings by ordering a delicious pizza or a burger now.</motion.p>
        </div>

        <motion.a
          initial={{
            y: "-200%",
            opacity: 0
          }}
          whileInView={{
            y: 0,
            opacity: 1
          }}

          transition={{
            delay: 0.6
          }}
          href="#menu">Explore Menu</motion.a
        >

      </section>
      <Founder />
      <Menu />
    </>
  )
}

export default Home;