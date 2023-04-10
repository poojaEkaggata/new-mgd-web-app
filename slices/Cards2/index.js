import React, { useEffect } from "react";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
// import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Button,
  Grid,
  Stack,
  Card,
  CardMedia,
  Divider,
} from "@mui/material";
import Toothache from "../../public/Images/Toothache.jpg";
// import HoverVideoPlayer from 'react-hover-video-player';
import MGD1 from "../../public/Images/RCC.jpg";
import Asset1 from "../../public/Images/Shaandaar_049.jpg";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * @typedef {import("@prismicio/client").Content.Cards2Slice} Cards2Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<Cards2Slice>} Cards2Props
 * @param { Cards2Props }
 */

/* if(typeof window !== "undefined") 
{
  let textOne = document.getElementById('text');
  const onMouseMove = (e) =>
  {
    var x = e.clientX;
    var y = e.clientY;
    textOne.style.top=x+"px";
    textOne.style.left=y+"px";
  }
  document.addEventListener('mousemove', onMouseMove);
} */

const Cards2 = () => 
{
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);
  return (
  <>
  <section className="content">
    <article className="content__inner">
      <div style={{ backgroundColor: "#189AB4" }}>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <h2 className="H1">Meet Our Team</h2>
          </div>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <h3 className="h2">
              <Typewriter
                options={{
                  strings: [
                    "Expert dentists",
                    "Family Owned & Operated"
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>
          </div>
          <br /><br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div data-aos="flip-left" data-aos-duration="1000" data-aos-easing="linear" data-aos-delay="500" 
              className="container" style={{ /*webkitAnimation: 'bgInOut 5s infinite', animation: 'bgInOut 5s infinite'*/ }}>
              <Image
                src={MGD1}
                width="600"
                height="400"
                alt="asset"
                title="asset1"
                className="image"
                style={{ borderRadius: '0px' }}
              />
              <div className="overlay">
                <div className="text">Our Dentist Team</div>
                <div className="newText">
                  Our experienced and talented dental team is
                  <br />
                  committed to working with you and your family to
                  <br />
                  create a comfortable, stress-free, and rewarding
                  <br />
                  dental experience every time you visit our practice.
                  <br />
                  We are pleased to welcome you and your family,
                  <br />
                  and we look forward to working with you
                </div>
                <Button type="submit" className="newButton">
                  More Info
                </Button>
              </div>
            </div>
            <div data-aos="flip-left" data-aos-duration="1000" data-aos-easing="linear" data-aos-delay="500" 
              className="container newContainerMargin" style={{ /* webkitAnimation: 'bgInOut 5s infinite', animation: 'bgInOut 5s infinite' */ }}>
              <Image
                src={Asset1}
                width="600"
                height="400"
                alt="asset"
                title="asset1"
                className="image"
                style={{ borderRadius: '0px' }}
              />
              <div className="overlay">
                <div className="text">Our Support Team & Staff</div>
                <div className="newTextOne">
                  We have the best support team that will always
                  <br />
                  make you feel comfortable during your treatment
                  <br />
                  at My Gentle Dentist.
                </div>
                <Button type="submit" className="newButton">
                  More Info
                </Button>
              </div>
            </div>
          </div>
          <br />
      </div>
    </article>
  </section>
  </>
  );
}

export default Cards2;
