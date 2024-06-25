import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">About Us</h1>
            <p>The only thing we're serious about is food.</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ipsa
            tempora illo exercitationem repellendus sed libero rerum. Suscipit
            laudantium quod expedita amet ipsam voluptatum similique natus,
            veniam at ullam optio consequuntur quis molestias esse doloremque
            modi consequatur magnam molestiae. Accusantium dolor at numquam
            cumque dignissimos vero, nisi nobis ipsum distinctio.
          </p>
          <Link to="/">
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
}

export default About;
