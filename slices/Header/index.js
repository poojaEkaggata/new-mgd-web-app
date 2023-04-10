/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";

/**
 * @typedef {import("@prismicio/client").Content.ImagesSlice} ImagesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImagesSlice>} ImagesProps
 * @param { ImagesProps }
 */

const Header = ({slice}) => 
{
  const[headerStyle,setHeaderStyle]=useState("header");
  const listenScrollEvent=()=> 
  {
    var scroll = $(window).scrollTop();
    if(scroll>0) 
    {
      return setHeaderStyle("stickedHeader");
    } 
    else 
    {
      return setHeaderStyle("header");
    }
  }
  useEffect(() => 
  {
    window.addEventListener('scroll', listenScrollEvent);
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  },[]);
  return (
        <>
              <nav className={headerStyle}>
                <ul className="menu">
                  <li>
                    <Link href="/" style={{ fontSize: '18px' }}>Home</Link>
                  </li>
                  <li>
                    <Link href="/" style={{ fontSize: '18px' }}>Emergencies</Link>
                  </li>
                  <li>
                    <Link href="/" style={{ fontSize: '18px' }}>Dental Treatments</Link>
                  </li> 
                    {/* <ul className="submenu">
                      <li>
                        <Link href="/">Routine checkup and clean</Link>
                      </li>
                      <li>
                        <Link href="/">Dental Fillings</Link>
                      </li>
                      <li>
                        <Link href="/">Wisdom Tooth Surgery</Link>
                      </li>
                      <li>
                        <Link href="/">Cosmetic Treatments</Link>
                      </li>
                      <li>
                        <Link href="/">Complete/ Partial Dentures</Link>
                      </li>
                      <li>
                        <Link href="/">Gum Disease Treatment</Link>
                      </li>
                      <li>
                        <Link href="/">Kids Dental</Link>
                      </li>
                      <li>
                        <Link href="/">Tooth Extraction</Link>
                      </li>
                      <li>
                        <Link href="/">Leading Technology</Link>
                      </li>
                    </ul> */}
                    <li className="logo">
                      <Link href="/">
                        <img 
                          src={slice.primary.images.url} alt={slice.primary.images.alt} 
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="/" style={{ fontSize: '18px' }}>About Us</Link>
                    </li>
                    {/* <ul className="submenu">
                      <li>
                        <Link href="/">Our Dentist team</Link>
                      </li>
                      <li>
                        <Link href="/">Our Support team</Link>
                      </li>
                      <li>
                        <Link href="/">Our Vision</Link>
                      </li>
                      <li>
                        <Link href="/">Our Story</Link>
                      </li>
                      <li>
                        <Link href="/">Why us in 10 reasons</Link>
                      </li>
                      <li>
                        <Link href="/">Health Funds</Link>
                      </li>
                      <li>
                        <Link href="/">Dentist Blogs</Link>
                      </li>
                      <li>
                        <Link href="/">Smile gallery</Link>
                      </li>
                    </ul> */}
                    <li>
                      <Link href="/" style={{ fontSize: '18px' }}>Areas we serve</Link>
                    </li>
                    <li>
                      <Link href="/" className="contact" style={{ fontSize: '18px' }}>
                        Contact Us
                      </Link>
                    </li>
                    <button type="submit" className="button_book_online">
                      <svg width="400px" height="auto" viewBox="0 0 180 60" className="border">
                        <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                        <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                      </svg>
                      <span style={{ fontSize: '12px' }}>Book&nbsp;Online</span>
                    </button>
                </ul>
              </nav>
        </>
);
}

export default Header;