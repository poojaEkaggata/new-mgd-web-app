/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Button, Grid, Stack, Card, TypeBackground } from "@mui/material";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import COOK from "../../public/Gifs/Provider.gif";
import FEES from "../../public/Gifs/Payment.gif";
import HOURS from "../../public/Videos/Clock.gif";
import NEEDS from "../../public/Videos/Need.gif";
import CARE from "../../public/Videos/Patient.gif";
import SAT from "../../public/Videos/Consult.gif";

/**
 * @typedef {import("@prismicio/client").Content.CardsSlice} CardsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CardsSlice>} CardsProps
 * @param { CardsProps }
 */

const Cards = () => 
{
  return (
    <>
    <section className="content">
      <article className="content__inner">
            <div className="newbgEffect">
              <br />
              <div className="row">
                <h2 className="H1">Experience the My Gentle Dentist Difference</h2>
              </div>
              <br />
              <div className="row">
                <h3
                  style={{
                    color: "#FFFFFF",
                    textAlign: "center",
                    fontFamily: "Montserrat",
                    /* animation: '2s anim-lineUp ease-out infinite' */
                  }}
                >
                  <Typewriter
                    options={{
                      strings: [
                        "Expect excellent with a quick, gentle and pleasant Dental Experience",
                        "All our Dental Treatment options are completely personalised for you. Feel absolutely confident knowing you have chosen the right Dentistry in North Brisbane.",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h3>
              </div>
              <div className="carousels">
                <div className="carousel-row">
                    <div className="carousel-tile">
                      <Image src={COOK} width="300" height="300" alt="Certified Invisalign Provider" title="Certified Invisalign Provider" />
                      <p style={{ display: 'flex', justifyContent: 'center', marginLeft: '20px', marginRight: '0px', fontSize: 16, fontWeight: 'bolder', letterSpacing: '0.4px', color: '#fff' }}>Certified Invisalign Provider</p>
                    </div>
                    <div className="carousel-tile" style={{ marginLeft: '80px' }}>
                      <Image src={FEES} width="300" height="300" alt="Convenient Interest Free Payment Plans" title="Convenient Interest Free Payment Plans" />
                      <p style={{ display: 'flex', justifyContent: 'center', marginLeft: '20px', marginRight: '0px', fontSize: 16, fontWeight: 'bolder', letterSpacing: '0.4px', color: '#fff' }}>Convenient Interest Free Payment Plans</p>
                    </div>
                    <div className="carousel-tile" style={{ marginLeft: '80px' }}>
                      <Image src={HOURS}width="300" height="300" alt="Extended Opening Hour" title="Extended Opening Hour" />
                      <p style={{ display: 'flex', justifyContent: 'center', marginLeft: '20px', marginRight: '0px', fontSize: 16, fontWeight: 'bolder', letterSpacing: '0.4px', color: '#fff' }}>Extended Opening Hour</p>
                    </div>
                  </div>
              </div>
              <div className="carousels">
                <div className="carousel-row">
                  <div className="carousel-tile">
                    <Image src={NEEDS} width="300" height="300" alt="Customised Treatment to Your Needs" title="Customised Treatment to Your Needs" />
                    <p style={{ display: 'flex', justifyContent: 'center', marginLeft: '20px', marginRight: '0px', fontSize: 16, fontWeight: 'bolder', letterSpacing: '0.4px', color: '#fff' }}>Customised Treatment to Your Needs</p>
                  </div>
                  <div className="carousel-tile" style={{ marginLeft: '80px' }}>
                    <Image src={CARE} width="300" height="300" alt="100% Patient Care & Comfort" title="100% Patient Care & Comfort" />
                    <p style={{ display: 'flex', justifyContent: 'center', marginLeft: '20px', marginRight: '0px', fontSize: 16, fontWeight: 'bolder', letterSpacing: '0.4px', color: '#fff' }}>100% Patient Care & Comfort</p>
                  </div>
                  <div className="carousel-tile" style={{ marginLeft: '80px' }}>
                    <Image src={SAT} width="300" height="300" alt="Saturday Consultations Available" title="Saturday Consultations Available" />
                    <p style={{ display: 'flex', justifyContent: 'center', marginLeft: '20px', marginRight: '0px', fontSize: 16, fontWeight: 'bolder', letterSpacing: '0.4px', color: '#fff' }}>Saturday Consultations Available</p>
                  </div>
                </div>
              </div>
            </div>
      </article>
    </section>
    </>
  );
}

export default Cards;
