/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import EDT from "../../public/Images/EDT.jpg";
import RCC from "../../public/Images/RCC.jpg";
import KD from "../../public/Images/KD.jpg";
import DI from "../../public/Images/DI.jpg";
import DF from "../../public/Images/DF.jpg";
import TE from "../../public/Images/TE.jpg";
import WTS from "../../public/Images/WTS.png";
import CT from "../../public/Images/CT.jpg";
import RCT from "../../public/Images/RCT.jpg";
import OT from "../../public/Images/OT.jpg";
import DCB from "../../public/Images/DCB.jpg";
import HG from "../../public/Images/HG.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
/* import { useDetectScroll } from "@smakss/react-scroll-direction";
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import Animator, { AnimateProvider } from 'nextjs-animate-on-scroll'; */


/**
 * @typedef {import("@prismicio/client").Content.EmergenciesSlice} EmergenciesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EmergenciesSlice>} EmergenciesProps
 * @param { EmergenciesProps }
 */

const Emergencies = () => {

  /* const [scrollDir] = useDetectScroll({}); */

  const[scrollCardstyles,setScrollCardstyles]=useState('newbgOne');

/* const [animateHeader, setAnimateHeader] = useState(false)
useEffect(() => {
  const listener = () =>
  window.scrollY > 140 ? setAnimateHeader(true) : setAnimateHeader(false)
  window.addEventListener('scroll', listener)
  return () => {
    window.removeEventListener('scroll', listener)
  }
}, [])
 */
/*   if(typeof window !== "undefined") 
  {
    window.onscroll = function(e) {
      return setScrollCardstyles('newbgOneOnScrollRotate');
    }
  } */


  
/*   $("#yourDivID").on('scroll', function(){
      scrolled=true;
  }); */

  /* const [scrollStatus, setScrollStatus] = useState({
    scrollDirection: null,
    scrollPos: 0,
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScrollDocument);

    return () => window.removeEventListener("scroll", handleScrollDocument);
  }, []);

  function handleScrollDocument() {
    setScrollStatus((prev) => { 
      return {
        scrollDirection:
          document.body.getBoundingClientRect().top > prev.scrollPos
            ? 
            setScrollCardstyles('newbgOneOnScrollRotate')
            
            :
            setScrollCardstyles('newbgOneOnScrollRotate')
            ,
        scrollPos: document.body.getBoundingClientRect().top,
      };
    });
  }

  console.log(scrollStatus.scrollDirection) */

/*   const handleScroll = () => {
    // setClientWindowHeight(window.scrollY);
    setScrollCardstyles('newbgOneOnScrollRotate');
  };

  const handleScrollOne = () => {
    // setClientWindowHeight(window.scrollY);
    setScrollCardstyles('newbgOne');
  };

  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScrollOne);
  }); */

  /* const listenScrollEventNew=()=> 
  { */
    /* var scroll = $(window).scrollTop();
    // alert('Current scroll from the top: ' + window.pageYOffset);
    if(scroll)
    {
      return setScrollCardstyles('newbgOneOnScrollRotate');
    } 
    else 
    {
      return setScrollCardstyles('newbgOne');
    } */
    /* var sectionHeight = $('.section').height();
    if(document.documentElement.scrollTop>0 && document.documentElement.scrollTop<sectionHeight){
        //apply transformation here
    }
    else if(document.documentElement.scrollTop>sectionHeight && document.documentElement.scrollTop<(sectionHeight*2)){
        //apply transformation here
    } */
    /* if(document.documentElement.scrollTop)
    {
      return setScrollCardstyles('newbgOneOnScrollRotate');
    }
    else if(!document.documentElement.scrollTop)
    {
      return setScrollCardstyles('newbgOne');
    }
    else
    {
      return setScrollCardstyles('newbgOne');
    } */
/*   } */
  /* useEffect(() => 
  {
    window.addEventListener('scroll', listenScrollEventNew);
    return () =>
      window.removeEventListener('scroll', listenScrollEventNew);
  },[]); */

/*   useEffect(()=>{ */
    // window.addEventListener('scroll', () => {
      // console.log('scrolled');
      /* if(scroll)
      { */
        // return setScrollCardstyles('newbgOne');
      /* }
      else
      { */

      /* } */
      /* if(window.scrollY)
      {
        // alert(window.scrollY);
        return setScrollCardstyles('newbgOneOnScrollRotate');
      }
      else
      {
        return setScrollCardstyles('newbgOne');
      } */
      /* const scrollable = document.documentElement.scrollHeight-window.innerHeight;
      const scrolled = window.scrollY;
      if(Math.ceil(scrolled)===scrollable)
      {
        alert('scrolled');
      }
      else
      {
        alert('not scrolled');
      } */
      /* if($(window).scrollTop())
      {
        return setScrollCardstyles('newbgOneOnScrollRotate');
      }
      else
      {
        return setScrollCardstyles('newbgOne');
      } */
    //});
/*   },[]); */

/*   if(typeof window !== "undefined") 
  {
    // let didScroll = false;
    // window.onscroll = () => didScroll = true;
  if(window.onscroll)
  {
    // didScroll = false;
    console.log('scrolled');
    return setScrollCardstyles('newbgOneOnScrollRotate');
  } */
if(typeof window !== "undefined") 
{
/* let didScroll = false;
window.onscroll = () => didScroll = true; */
/* if(window.onscroll)
{
  return setScrollCardstyles('newbgOneOnScrollRotate');
} */
/* let didScroll = false;
 
window.onscroll = () => didScroll = true; */

/* var timer=null;
$(window).scroll(function(){
   $('.newbgOne').css("display", "block");
   if(timer !== null) {
      clearTimeout(timer);

    }
   timer=setTimeout(function(){
      $('.newbgOneOnScrollRotate').css("display", "block");
      },2000);
}); */
/* window.addEventListener('scroll',function(e) {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        setScrollCardstyles('newbgOneOnScrollRotate');
      }
      else
      {
        setScrollCardstyles('newbgOne');
      }
}); */
/* if(window.scrollTo())
{
  setScrollCardstyles('newbgOneOnScrollRotate');
}
else
{
  setScrollCardstyles('newbgOne');
} */
/* $(window).scroll(function()
{
  if($(this).scrollTop()==true)
  {
    $('.newbgOne').addClass('newbgOneOnScrollRotate');
  } 
  else 
  {
    $('.newbgOne').removeClass('newbgOne');
  }
}) */
/* window.onload = function() { */
  /* const effect = document.querySelector('#effect');

  window.addEventListener('scroll', scrollEffect);

  function scrollEffect()
  {
    if(window.scrollY)
    {
      effect.style.animation= 'bgInOut 2s';
    }
    else
    {
      effect.style.animation= 'unset';
    }
  } */
/* } */

/* var userHasScrolled = false;
// return setScrollCardstyles('newbgOne');
window.onscroll = function (e)
{
    userHasScrolled = true;
    //alert('scrolled done');
    return setScrollCardstyles('newbgOneOnScrollRotate');
    if(userHasScrolled)
    {
      alert('not scrolled');
      userHasScrolled = false;
      return setScrollCardstyles('newbgOne');
    }
}
 */
}

useEffect(() => {
  AOS.init({ duration: 2000 });
  AOS.refresh();
}, []);

return (
  <>
    <section className="content">
      <article className="content__inner">
       <div style={{ backgroundColor: '#189ab4' }}>
          <br />
          <h1 className="H1">Popular Treatment</h1>
          <br />
          <h3 className="h2">Affordable, Leading Technology, Great Results</h3>
          <br />
          <h4 className="h2">
            Check out some of our Most Popular and Affordable Treatments!{" "}
          </h4>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            //id={'effect'}
          >
      {/* {`${scrollDir} ${
        scrollDir === "still" ? "↕️" : scrollDir === "up" ? 
           <div className="newbgOneOnScrollRotate">
              <div className="newbgOne-inner">
                <div className="newbgOne-front">
                  <Image src={EDT} alt="" height="300" width="300" />
                </div>
                <div className="newbgOne-back">
                  <br />
                  <br />
                  <h2>Emergency Dental</h2>
                  Toothache & Wisdom Teeth
                  <br />
                  Broken / Cracked Tooth
                  <br />
                  Much More
                  <Button type="submit" className="newButton">
                    More Info
                  </Button>
                </div>
              </div>
            </div>
       : "🔽"
      }`} */}
          <div 
          //className={`bg-header/75 transition duration-500 ease-in-out ${animateHeader && 'bg-header/[0.95]'}`}
          //className={scrollCardstyles}
          // className={`${animateHeader && 'bg-header/[0.95]'}`}
          data-aos="flip-left" data-aos-duration="1000" data-aos-easing="linear" data-aos-delay="500"
          className={'newbgOne'}
          >
              <div className="newbgOne-inner">
                <div className="newbgOne-front">
                  <Image src={EDT} alt="" height="300" width="300" style={{ borderRadius: '4px' }} />
                </div>
                <div className="newbgOne-back">
                  <br />
                  <br />
                  <h2>Emergency Dental</h2>
                  Toothache & Wisdom Teeth
                  <br />
                  Broken / Cracked Tooth
                  <br />
                  Much More
                  <Button type="submit" className="newButton">
                    More Info
                  </Button>
                </div>
              </div>
            </div>

            <div data-aos="flip-left" data-aos-duration="1000" data-aos-easing="linear" data-aos-delay="500" className={'newbgOne'} style={{ marginLeft: "20px" }}>
              <div className="newbgOne-inner">
                <div className="newbgOne-front">
                  <Image src={RCC} alt="" height="300" width="300" style={{ borderRadius: '4px' }} />
                </div>
                <div className="newbgOne-back">
                  <br />
                  <br />
                  <h2> Routine Checkup & Clean</h2>
                  <br />
                  At Least Every 6 Months Checkup, Examination & Cleaning Keeps Teeth
                  Healthy
                  <Button type="submit" className="newButton">
                    More Info
                  </Button>
                </div>
              </div>
            </div>
          
            <div data-aos="flip-left" data-aos-duration="1000" data-aos-easing="linear" data-aos-delay="500" className={'newbgOne'} style={{ marginLeft: "20px" }}>
              <div className="newbgOne-inner">
                <div className="newbgOne-front">
                  <Image src={KD} alt="" height="300" width="300" style={{ borderRadius: '4px' }} />
                </div>
                <div className="newbgOne-back">
                  <br />
                  <br />
                  <h2> Kids Dental</h2>
                  Pleasant, Fun & Friendly
                  <br />
                  Necessary Dental Care
                  <br />
                  Bulk Billing Available*
                  <Button type="submit" className="newButton">
                    More Info
                  </Button>
                </div>
              </div>
            </div>
        
            <div data-aos="flip-left" data-aos-duration="1000" data-aos-easing="linear" data-aos-delay="500" className={'newbgOne'} style={{ marginLeft: "20px" }}>
              <div className="newbgOne-inner">
                <div className="newbgOne-front">
                  <Image src={DI} alt="" height="300" width="300" style={{ borderRadius: '4px' }} />
                </div>
                <div className="newbgOne-back">
                  <br />
                  <br />
                  <h2>Dental Implants</h2>
                  Replace Single, Several or All Teeth
                  <br />
                  Restore Function
                  <br />
                  Restore Aesthetics
                  <Button type="submit" className="newButton">
                    More Info
                  </Button>
                </div>
              </div>
            </div>
        
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
            <div data-aos="flip-left" data-aos-duration="1000" data-aos-easing="linear" data-aos-delay="500" className={'newbgOne'}>
              <div className="newbgOne-inner">
                <div className="newbgOne-front">
                  <Image src={DF} alt="" height="300" width="300" style={{ borderRadius: '4px' }} />
                </div>
                <div className="newbgOne-back">
                  <br />
                  <br />
                  'Popular'
                  <h2>Dental Fillings</h2>
                  Fix Decay Damage
                  <br />
                  Restore Damaged Tooth
                  <br />
                  Keeps Teeth Healthy
                  <Button type="submit" className="newButton">
                    More Info
                  </Button>
                </div>
              </div>
            </div>
            <div data-aos="flip-left" data-aos-duration="1000" data-aos-easing="linear" data-aos-delay="500" className={'newbgOne'} style={{ marginLeft: "20px" }}>
              <div className="newbgOne-inner">
                <div className="newbgOne-front">
                  <Image src={TE} alt="" height="300" width="300" style={{ borderRadius: '4px' }} />
                </div>
                <div className="newbgOne-back">
                  <br />
                  <br />
                  'Popular'
                  <h2>Tooth Extraction</h2>
                  Safe, Quick & Effective
                  <br />
                  Standard Procedure
                  <br />
                  Keeps Mouth Healthy
                  <Button type="submit" className="newButton">
                    More Info
                  </Button>
                </div>
              </div>
            </div>
            <div data-aos="flip-left" data-aos-duration="1000" data-aos-easing="linear" data-aos-delay="500" className={'newbgOne'} style={{ marginLeft: "20px" }}>
              <div className="newbgOne-inner">
                <div className="newbgOne-front">
                  <Image src={WTS} alt="" height="300" width="300" style={{ borderRadius: '4px' }} />
                </div>
                <div className="newbgOne-back">
                  <br />
                  <br />
                  <p>'Popular'</p>
                  <h2>Wisdom Tooth Surgery</h2>
                  Remove One or More Wisdom Teeth
                  <br />
                  Safe & Quick
                  <br />
                  Effective
                  <br />
                  <Button type="submit" className="newButton">
                    More Info
                  </Button>
                </div>
              </div>
            </div>
            <div data-aos="flip-left" data-aos-duration="1000" data-aos-easing="linear" data-aos-delay="500" className={'newbgOne'} style={{ marginLeft: "20px" }}>
              <div className="newbgOne-inner">
                <div className="newbgOne-front">
                  <Image src={CT} alt="" height="300" width="300" style={{ borderRadius: '4px' }} />
                </div>
                <div className="newbgOne-back">
                  <br />
                  <br />
                  'Popular'
                  <h2>Cosmetic Treatment</h2>
                  Teeth Whitening
                  <br />
                  Veneers & Crowns
                  <br />
                  Much More
                  <Button type="submit" className="newButton">
                    More Info
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <br /><br /><br /><br />
        </div>
      </article>
    </section>
  </>
  );
}

export default Emergencies;
