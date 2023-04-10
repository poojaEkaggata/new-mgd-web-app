/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "next/image";
import HeroImg from "../../public/Images/hero_bg_1.jpg";
import newHeroImg from "../../public/Images/Dentistb.jpeg";
import Typewriter from "typewriter-effect";
import COOK from "../../public/Gifs/Provider.gif";
import FEES from "../../public/Gifs/Payment.gif";
import HOURS from "../../public/Videos/Clock.gif";
import NEEDS from "../../public/Videos/Need.gif";
import CARE from "../../public/Videos/Patient.gif";

//  import HeroVideo from "../../public/Gifs/Banner.mp4";

const options = 
{
  margin: 0,
  responsiveClass: true,
  nav: false,
  dots: false,
  autoplay: true,
  smartSpeed: 1000,
  autoplayHoverPause: true,
  autoplayTimeout: 1000,
  loop: false,
  navClass: ["owl-prev", "owl-next"],
  navText: [
  '',
  '',
  ],
  responsive: {
  0: {
  items: 1,
  },
  400: {
  items: 1,
  },
  600: {
  items: 2,
  },
  700: {
  items: 3,
  },
  1000: {
  items: 4,
  }
  }
};
var $=require("jquery");
if (typeof window!=="undefined") 
{
  window.$=window.jQuery=require("jquery");
}
const OwlCarousel=dynamic(()=>import("react-owl-carousel"), 
{
  ssr: false
});
if(typeof window!=="undefined") 
{
  $(window).scroll(function() 
  {
    var scroll = $(window).scrollTop();
    $(".zoom img").css({
      transform: 'translate3d(0%, -'+(scroll/100)+'%, 0) scale('+(100 + scroll/10)/100+')'
    });
  });
  /* const zoomScreen=document.querySelector(".headerBgOne");
  let zoom = 1;
  const zoomingSpeed = 0.1;
  document.addEventListener("wheel",(e)=>{
  if(e.deltaY>0) 
  {
    zoomScreen.style.transform = `scale(${(zoom += zoomingSpeed)})`;
  } 
  else 
  {
    zoomScreen.style.transform = `scale(${(zoom -= zoomingSpeed)})`;
  }
  }); */
}

const Images=()=> 
{
  // const videoRef = useRef();
  // useEffect(() => {
  //     setTimeout(()=>{
  //         videoRef.current.play()
  //     },5000)
  // }, []);
  const[content,setContent]=useState("Smile Differently...");
  const listenScrollEvent=()=> 
  {
    var scroll = $(window).scrollTop();
    if(scroll) 
    {
      return setContent("Best Dental Care...");
    } 
    else 
    {
      return setContent("Smile Differently...");
    }
  }
  useEffect(() => 
  {
    window.addEventListener('scroll', listenScrollEvent);
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  },[]);
  const[herosectionstyles,setHeroSectionStyles]=useState('carousel__slideBgnew');
  const listenScrollEventTwo=()=> 
  {
    var scroll = $(window).scrollTop();
    if(scroll>0)
    {
      return setHeroSectionStyles('carousel__slideBg');
    } 
    else 
    {
      return setHeroSectionStyles('carousel__slideBgnew');
    }
  }
  useEffect(() => 
  {
    window.addEventListener('scroll', listenScrollEventTwo);
    return () =>
      window.removeEventListener('scroll', listenScrollEventTwo);
  },[]);
  return (
  <>
      {/* <section className="newHeroSectionEffects">
        <div className="zoom"> */}
            {/* <Image src={newHeroImg} alt="Dentista" title="Dentista" style={{ opacity: '0.6x'}} /> */} 
            {/* <video
              ref={videoRef}
              controls
              width="100%"
              loop
              muted
              autoPlay={true}
              >
                <source src={HeroVideo} type="video/mp4" />
            </video> */}
            {/* <div className="contentDiv">
              <p className='h3'>Welcome to my gentle dentist</p>
              <br /><br />
              <p className='h1'>{content}</p>
            </div>
        </div>
      </section> */}
      {/* <Header /> */}
      <section className="hero">
        <div className="hero-inner" id="'section-' + index">
          <div className="hero__title">
            <div className="carousel">
              <div className="carousel__slides">
                <div className="carousel__slide">
                  <div className={herosectionstyles}></div>
                  <div className="carousel__slideContent">
                    <div className="contentDiv">
                      <br /><br />
                      <p className='h3'>Welcome to my gentle dentist</p>
                      <br />
                      <p className='h1'>{content}</p>
                    </div>
                  </div>
                </div>
                <div className="carousel__slide">
                  <div className={herosectionstyles}></div>
                  <div className="carousel__slideContent">
                    <div className="contentDiv">
                      <br /><br />
                      <p className='h3'>Welcome to my gentle dentist</p>
                      <br />
                      <p className='h1'>{content}</p>
                    </div>
                  </div>
                </div>
                <div className="carousel__slide">
                  <div className={herosectionstyles}></div>
                  <div className="carousel__slideContent">
                    <div className="contentDiv">
                      <br /><br />
                      <p className='h3'>Welcome to my gentle dentist</p>
                      <br />
                      <p className='h1'>{content}</p>
                    </div>
                  </div>
                </div>
                <div className="carousel__slide">
                  <div className={herosectionstyles}></div>
                  <div className="carousel__slideContent">
                    <div className="contentDiv">
                      <br /><br />
                      <p className='h3'>Welcome to my gentle dentist</p>
                      <br />
                      <p className='h1'>{content}</p>
                    </div>
                  </div>
                </div>
                <div className="carousel__slide">
                  <div className={herosectionstyles}></div>
                  <div className="carousel__slideContent">
                    <div className="contentDiv">
                      <br /><br />
                      <p className='h3'>Welcome to my gentle dentist</p>
                      <br />
                      <p className='h1'>{content}</p>
                    </div>
                  </div>
                </div>
                <div className="carousel__shutters"></div>
              </div>
              </div>
          </div>
        </div>
      </section>

      <section className="content">
        <article className="content__inner">
        {/* <div className="content__title">
        <div className="content__author"> */}
          <div className="newScrollHeroSectionEffects">
            <div className="row no-gutters"> {/* style={{ position: 'fixed' }} */}
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-0 pb-0 bg-white" id="owl-carousel-products">
                <ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
                <OwlCarousel
                className="owl-theme"
                loop={false}
                margin={0}
                nav={false}
                navText={[
                '<img src="/Images/left-arrow.png" />',
                '<img src="/Images/right-arrow.png" />',
                ]}
                dots={false}
                animateIn={true}
                {...options}
                >
                <span className="image text-center">
                  <img
                    id={1}
                    src="Gifs/four.gif"
                    alt={"Dental Care One"}
                    title={"Dental Care One"}
                    style={{ width: '800px', height: '400px' }}
                    className="firstGif"
                  />
                </span>
                <span className="image text-center">
                  <img
                    id={2}
                    src="Gifs/Banner.gif"
                    alt={"Dental Care Two"}
                    title={"Dental Care Two"}
                    style={{ width: '800px', height: '400px' }}
                  />
                </span>
                <span className="image text-center">
                  <img
                    id={3}
                    src="Gifs/One.gif"
                    alt={"Dental Care Three"}
                    title={"Dental Care Three"}
                    style={{ width: '800px', height: '400px' }}
                  />
                </span>
                <span className="image text-center">
                  <img
                    id={4}
                    src="Gifs/two.gif"
                    alt={"Dental Care Four"}
                    title={"Dental Care Four"}
                    style={{ width: '800px', height: '400px' }}
                  />
                </span>
                <span className="image text-center">
                  <img
                    id={5}
                    src="Gifs/three.gif"
                    alt={"Dental Care Five"}
                    title={"Dental Care Five"}
                    style={{ width: '800px', height: '400px' }}
                  />
                </span>
                <span className="image text-center">
                  <img
                    id={6}
                    src="Gifs/four.gif"
                    alt={"Dental Care Six"}
                    title={"Dental Care Six"}
                    style={{ width: '800px', height: '400px' }}
                  />
                </span>
                <span className="image text-center">
                  <img
                    id={7}
                    src="Gifs/banner.gif"
                    alt={"Dental Care Eight"}
                    title={"Dental Care Eight"}
                    style={{ width: '800px', height: '400px' }}
                  />
                </span>
                </OwlCarousel>
                </ul>
              </div>
            </div>
          </div>
          {/* </div>
          </div> */}
        </article>
      </section>
  </>
  );
}
export default Images;