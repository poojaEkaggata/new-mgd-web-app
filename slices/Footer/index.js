import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.FooterSlice} FooterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterSlice>} FooterProps
 * @param { FooterProps }
 */
const Footer = () => (
  <>
    {/* <span className="title">
      {
        slice.primary.title ?
        <PrismicRichText field={slice.primary.title}/>
        : <h2>Template slice, update me!</h2>
      }
    </span>
    {
      slice.primary.description ?
      <PrismicRichText field={slice.primary.description}/>
      : <p>start by editing this slice from inside Slice Machine!</p>
    }
    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
    `}</style> */}
    {/* <p style={{ textAlign: 'center' }}>Hello World!</p>
    <span >{ slice.primary.title }Hello World</span> */}
        <section style={{ backgroundColor: '#189ab4' }}>
          <div className="row" style={{ paddingTop: '120px', paddingBottom: '60px', backgroundColor: '#189ab4' }}>
            <div className="column col-12 col-lg-12 col-xl-12 col-xxl-12 col-xs-12 col-md-12 col-sm-12" style={{ display: 'flex',justifyContent: 'center',marginLeft: 'auto',marginRight: 'auto' }}>
              <div className="column col-2 col-lg-2 col-xl-2 col-xxl-2 col-xs-2 col-md-2 col-sm-2">
                <div className="row">
                  <p style={{ color: 'black',fontWeight: 'bolder' }}>
                    Company Info
                  </p>
                </div>
                <div className="row">
                  <p style={{ color: 'black',fontWeight: 'normal',marginBottom: '6px',paddingBottom: '0px' }}>
                    About Us
                  </p>
                </div>
                <div className="row">
                  <p style={{ color: 'black',fontWeight: 'normal',marginBottom: '6px',paddingBottom: '0px' }}>
                    Carrier
                  </p>
                </div>
                <div className="row">
                  <p style={{ color: 'black',fontWeight: 'normal',marginBottom: '6px',paddingBottom: '0px' }}>
                    We are hiring
                  </p>
                </div>   
                <div className="row">
                  <p style={{ color: 'black',fontWeight: 'normal',marginBottom: '0px',paddingBottom: '0px' }}>
                    Blog
                  </p>
                </div>
              </div>
              <div className="column col-2 col-lg-2 col-xl-2 col-xxl-2 col-xs-2 col-md-2 col-sm-2" style={{ marginLeft: 60 }}>
                <div className="row">
                  <p style={{ color: 'black',fontWeight: 'bolder' }}>
                    Legal
                  </p>
                </div>
                <div className="row">
                  <p style={{ color: 'black',fontWeight: 'normal',marginBottom: '6px',paddingBottom: '0px' }}>
                    About Us
                  </p>
                </div>
                <div className="row">
                  <p style={{ color: 'black',fontWeight: 'normal',marginBottom: '6px',paddingBottom: '0px' }}>
                    Carrier
                  </p>
                </div>
                <div className="row">
                  <p style={{ color: 'black',fontWeight: 'normal',marginBottom: '6px',paddingBottom: '0px' }}>
                    We are hiring
                  </p>
                </div>   
                <div className="row">
                  <p style={{ color: 'black',fontWeight: 'normal',marginBottom: '0px',paddingBottom: '0px' }}>
                    Blog
                  </p>
                </div>
              </div>
              <div className="column col-2 col-lg-2 col-xl-2 col-xxl-2 col-xs-2 col-md-2 col-sm-2" style={{ marginLeft: 60 }}>
                <div className="row">
                  <p style={{ color: 'black',fontWeight: 'bolder' }}>
                    Features
                  </p>
                </div>
                <div className="row">
                  <p style={{ color: 'black',fontWeight: 'normal',marginBottom: '6px',paddingBottom: '0px' }}>
                    Business Marketing
                  </p>
                </div>
                <div className="row">
                  <p style={{ color: 'black',fontWeight: 'normal',marginBottom: '6px',paddingBottom: '0px' }}>
                    User Analytics
                  </p>
                </div>
                <div className="row">
                  <p style={{ color: 'black',fontWeight: 'normal',marginBottom: '6px',paddingBottom: '0px' }}>
                    Live Chat
                  </p>
                </div>   
                <div className="row">
                  <p style={{ color: 'black',fontWeight: 'normal',marginBottom: '0px',paddingBottom: '0px' }}>
                    Unlimited Support
                  </p>
                </div>
              </div>
              <div className="column col-2 col-lg-2 col-xl-2 col-xxl-2 col-xs-2 col-md-2 col-sm-2" style={{ marginLeft: 60 }}>
                <div className="row">
                  <p style={{ color: 'black',fontWeight: 'bolder' }}>
                    Resources
                  </p>
                </div>
                <div className="row">
                <p style={{ color: 'black',fontWeight: 'normal',marginBottom: '6px',paddingBottom: '0px' }}>
                  IOS & Android
                </p>
                </div>
                <div className="row">
                  <p style={{ color: 'black',fontWeight: 'normal',marginBottom: '6px',paddingBottom: '0px' }}>
                    Watch a demo
                  </p>
                </div>
                <div className="row">
                  <p style={{ color: 'black',fontWeight: 'normal',marginBottom: '6px',paddingBottom: '0px' }}>
                    Consumers
                  </p>
                </div>   
                <div className="row">
                  <p style={{ color: 'black', fontWeight: 'normal',marginBottom: '0px',paddingBottom: '0px' }}>
                    API
                  </p>
                </div>
              </div>
              <div className="column col-2 col-lg-2 col-xl-2 col-xxl-2 col-xs-2 col-md-2 col-sm-2" style={{ marginLeft: 60 }}>
                <div className="row">
                  <p style={{ color: 'black', fontWeight: 'bolder' }}>
                    Get in touch
                  </p>
                </div>
                <div className="row">
                  <div className="column col-2 col-lg-2 col-xl-2 col-xxl-2 col-xs-2 col-md-2 col-sm-2">
                    <img src="./assets/Images/telephone.png" alt="call" style={{ width: '30px',height: '30px',float: 'left' }} />
                  </div>
                  <div className="column col-10 col-lg-10 col-xl-10 col-xxl-10 col-xs-10 col-md-10 col-sm-10">
                    <p>(480) 555-0103</p>
                  </div>
                </div>
                <div className="row">
                  <div className="column col-2 col-lg-2 col-xl-2 col-xxl-2 col-xs-2 col-md-2 col-sm-2">
                    <img src="./assets/Images/location.png" alt="location" style={{ width: '30px',height: '30px',float: 'left' }} />
                  </div>
                  <div className="column col-10 col-lg-10 col-xl-10 col-xxl-10 col-xs-10 col-md-10 col-sm-10">
                    <p>4517 Washington Ave. Manchester</p>
                  </div>
                </div>
                <div className="row">
                  <div className="column col-2 col-lg-2 col-xl-2 col-xxl-2 col-xs-2 col-md-2 col-sm-2">
                    <img src="./assets/Images/envelope.png" alt="email" style={{ width: '30px',height: '30px',float: 'left' }} />
                  </div>
                  <div className="column col-10 col-lg-10 col-xl-10 col-xxl-10 col-xs-10 col-md-10 col-sm-10">
                    <p>debra.holt@example.com</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </section>
        {/* <section style="background-color: #F8F8F9;">
          <div className="row" style="padding-top: 20px;padding-bottom: 0px;background-color: #F8F8F9;">
            <div className="column col-12 col-lg-12 col-xl-12 col-xxl-12 col-xs-12 col-md-12 col-sm-12">
              <div className="column col-6 col-lg-6 col-xl-6 col-xxl-6 col-xs-6 col-md-6 col-sm-6" style="display: flex;justify-content: flex-start;margin-left: 0px;margin-right: auto;vertical-align: middle;align-items: middle;float: left;flex-direction: row;">
                <p style="padding-left: 200px;color: black; font-weight: bolder;">
                  Made With Love By Figmaland All Right Deserved
                </p>
              </div>
              <div className="column col-6 col-lg-6 col-xl-6 col-xxl-6 col-xs-6 col-md-6 col-sm-6" style="display: flex;justify-content: flex-end;margin-left: auto;margin-right: 0px;padding-right: 200px;">
                <img src="./assets/images/facebook.png" style="float: left;width: 20px;height: 20px;" alt="Facebook" title="Facebook" />
                <img src="./assets/images/instagram.png" style="float: left;width: 20px;height: 20px;margin-left: 20px;" alt="Instagram" title="Instagram" />
                <img src="./assets/images/twitter.png" style="width: 20px;height: 20px;margin-left: 20px;" alt="Twitter" title="Twitter" />
              </div>
            </div>
          </div>
        </section> */}
        </>
)

export default Footer