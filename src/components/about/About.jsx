import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/founder.jpeg";

const About = () => {
    return (
        <section className="about">
            <main>
                <h1>About Us</h1>

                <article>
                    <h4>Food Corner</h4>
                    <p>
                        Food Corner strives to source local, sustainable and organic when possible. We work hard to source premium ingredients and we cook everything from scratch with love. We also do our best to pay our employees living wages (tips are shared with all employees, including kitchen staff) and to reduce our environmental footprint wherever we can. Overall, these factors translate to higher menu prices, but we hope that you find value and feel a sense of comfort in knowing that we aim to get better everyday at doing what is important to us.
                    </p>

                    <p className="tagline">
                        Explore the various type of food and burgers. Click below to see the
                        menu
                    </p>

                    <Link to="/">
                        <RiFindReplaceLine />
                    </Link>
                </article>

                <div>
                    <h2>Founder</h2>
                    <article>
                        <div>
                            <img src={me} alt="Founder" />
                            <h3>Rajesh Chopra</h3>
                        </div>

                        <p>
                            I am Rajesh Chopra, the founder of Food Corner. Where every flavor tells a story.
                        </p>
                    </article>
                </div>
            </main>
        </section>
    );
};

export default About;