import React from 'react';
import {AiFillInstagram, AiFillLinkedin} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Food Corner</h2>
        <p>We will try our best to meet your expectations.</p>
        <p>We respect your feedbacks.</p>          
      </div>

      <aside>
        <h4>Follow Us</h4>
        <a href='https://instagram.com/chopra_rajesh__?igshid=MzNlNGNkZWQ4Mg==' target='blank'> <AiFillInstagram /> </a>
        <a href='https://www.linkedin.com/in/rajesh-chopra-a76a6423a' target='blank'> <AiFillLinkedin /> </a>
      </aside>

      <strong>All rights reserved @FoodCorner</strong>


    </footer>
  )
}

export default Footer;