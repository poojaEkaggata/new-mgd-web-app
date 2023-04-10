/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
import React, { useEffect } from "react";
/* import { PrismicRichText } from "@prismicio/react"; */
import Image from "next/image";
import Toothache from "../../public/Images/tooth-pain-treatment.jpg";
import Toothsmile from "../../public/Images/smilyGirlImg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * @typedef {import("@prismicio/client").Content.MapSlice} MapSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MapSlice>} MapProps
 * @param { MapProps }
 */
const Map = () => 
{
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
        <h2 className="H1">Having Trouble ?</h2>
        <br />
        <h3 className="h2">Contact Us</h3>  
        <br /><br />
        <div className="row contactUsContainer">
              <div data-aos="flip-left" data-aos-duration="1000" data-aos-easing="linear" data-aos-delay="500" className="column col col-6 col-lg-6 col-xxl-6 col-xs-6 col-md-6 col-xl-6 col-sm-6 flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <Image src={Toothache} alt="Toothache" style={{ width:'600px',height:'400px'}} />
                    </div>
                    <div className="flip-card-back">
                      <Image src={Toothsmile} alt="Toothsmile" style={{ width:'600px',height:'400px'}} />
                    </div>
                  </div>
              </div>
              <div data-aos="flip-left" data-aos-duration="1000" data-aos-easing="linear" data-aos-delay="500" className="column col col-6 col-lg-6 col-xxl-6 col-xs-6 col-md-6 col-xl-6 col-sm-6 flip-card-one" style={{ marginLeft: 340 }}>
                  <div className="flip-card-inner-one">
                    <div className="flip-card-front-one">
                      <p className="GotADentalEmergencyText" style={{ position: 'absolute', top: '52%', left: '26%', transform: 'translateY(-50%)', textAlign: "center", fontSize: "16px", color:"white", alignItems:"center", verticalAlign:"middle" }}>
                        Got A Dental Emergency?<br />
                        We guarantee to see you<br />
                        same day…<br />
                        most likely straightaway<br />
                        CALL US NOW!<br />
                        0735061234
                      </p>
                    </div>
                    <div className="flip-card-back-one">
                      <p className="GotADentalEmergencyText" style={{ position: 'absolute', top: '50%', left: '26%', fontSize: "16px", color:"white", alignItems:"center", verticalAlign:"middle", alignContent: 'center' }}>
                        Get A Happy Smile With Us!
                      </p>
                    </div>
                  </div>
              </div>
        </div>
        <br /><br />
      </div>
    </article>
  </section>
</>
);
}

export default Map;
