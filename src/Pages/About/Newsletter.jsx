import React from 'react'
import Header from '../../Component/Header';
import '../../Pages/Pages.css'
import Footer from '../../Component/Footer';

export default function Newsletter() {
    return (
        <>
            <Header />
            <div class="circlearrow">
            <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512"><path d="M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4 .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z"/></svg>
            </div>
            {/* <!-- back-image --> */}
            <div className="container-fluid  aboutbgimg">
                <div className="container bgheading ">
                    <div className="text-white fs-5 fw-medium ">HOME / NEWSLETTER</div>
                    <div className="golden-color mb-2 fs-2 fw-bold">Newsletter</div>
                </div>
            </div>
            {/* <!-- Ashapurna newsletter --> */}
<div className="container-fluid mt-5">
    <div className="conatiner my-5">
        <div className="row text-center my-4 ">
            <h2 className="fw-semibold"> Ashapurna newsletter</h2>
        </div>
        <div className="row ">
            <div className=" col-md-12 col-lg-6">
                <div className="card mb-3 shadow-lg" >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={require('../../image/newsletter-ashapurna-buildcon-limited-july-2023-thumbnail-1694265854.jpg')} className="img-fluid rounded-start" alt="..." />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Newsletter August 2023</h5>
                          <p className="card-text golden-color fw-bold pt-3">Read More - </p>
                         
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            <div className=" col-md-12 col-lg-6">
                <div className="card mb-3 shadow-lg" >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={require('../../image/thumbnail_news_letter_JULY-1695036735.jpg')} className="img-fluid rounded-start" alt="..."/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Newsletter July 2023</h5>
                          <p className="card-text golden-color fw-bold pt-3">Read More -</p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
            </div>

            <div className="col-md-12 col-lg-6">
                <div className="card mb-3 shadow-lg" >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={require('../../image/thumbnail_news_letter_JULY-1695036735 (1).jpg')} className="img-fluid rounded-start" alt="..."/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Newsletter June 2023</h5>
                          <p className="card-text golden-color fw-bold pt-3">Read More -</p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            <div className="col-md-12 col-lg-6">
                <div className="card mb-3 shadow-lg" >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={require('../../image/newsletter-ashapurna-buildcon-limited-may-2023-thumbnail-1689744940.jpg')} className="img-fluid rounded-start" alt="..."/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Newsletter may 2023</h5>
                          <p className="card-text golden-color fw-bold pt-3">Read More -</p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
            </div>

            <div className="col-md-12 col-lg-6">
                <div className="card mb-3 shadow-lg" >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={require('../../image/thumbil_news_letter_MAY-1683693577.jpg')} className="img-fluid rounded-start" alt="..."/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Newsletter April 2023</h5>
                          <p className="card-text golden-color fw-bold pt-3">Read More -</p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
            </div>

            <div className="col-md-12 col-lg-6">
                <div className="card mb-3 shadow-lg" >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={require('../../image/thumbil_news_letter_MARCH2023-1680758453.png')} className="img-fluid rounded-start" alt="..."/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Newsletter March 2023</h5>
                          <p className="card-text golden-color fw-bold pt-3">Read More -</p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
            </div>

            <div className="col-md-12 col-lg-6">
                <div className="card mb-3 shadow-lg" >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={require('../../image/thumbnail_news_letter_february-1678426500.png')} className="img-fluid rounded-start" alt="..."/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Newsletter February 2023</h5>
                          <p className="card-text golden-color fw-bold pt-3">Read More -</p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            <div className="col-md-12 col-lg-6">
                <div className="card mb-3 shadow-lg" >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={require('../../image/thumbnail_news_letter_new_JAN-1678426381.png')} className="img-fluid rounded-start" alt="..."/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Newsletter Januray 2023</h5>
                          <p className="card-text golden-color fw-bold pt-3">Read More -</p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            <div className="col-md-12 col-lg-6">
                <div className="card mb-3 shadow-lg" >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={require('../../image/thumbnail_news_letter_december-1678424763.png')} className="img-fluid rounded-start" alt="..."/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Newsletter December 2023</h5>
                          <p className="card-text golden-color fw-bold pt-3">Read More -</p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            <div className="col-md-12 col-lg-6">
                <div className="card mb-3 shadow-lg" >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={require('../../image/thumbnail_news_letter_november-1678424621.png')} className="img-fluid rounded-start" alt="..."/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Newsletter November 2023</h5>
                          <p className="card-text golden-color fw-bold pt-3">Read More -</p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            <div className="col-md-12 col-lg-6">
                <div className="card mb-3 shadow-lg" >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={require('../../image/thumbnail_news_letter_oct-1678424461.jpg')} className="img-fluid rounded-start" alt="..."/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Newsletter October 2023</h5>
                          <p className="card-text golden-color fw-bold pt-3">Read More -</p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            <div className="col-md-12 col-lg-6">
                <div className="card mb-3 shadow-lg" >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={require('../../image/Thumbnail_news_letter_September-1678426897.png')} className="img-fluid rounded-start" alt="..."/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Newsletter September 2023</h5>
                          <p className="card-text golden-color fw-bold pt-3">Read More -</p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            <div className="col-md-12 col-lg-6">
                <div className="card mb-3 shadow-lg" >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={require('../../image/thumbil_news_letter_AUGUST-1678426672.png')} className="img-fluid rounded-start" alt="..."/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Newsletter August 2023</h5>
                          <p className="card-text golden-color fw-bold pt-3">Read More -</p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            <div className="col-md-12 col-lg-6">
                <div className="card mb-3 shadow-lg" >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={require('../../image/thumbil_news_letter_JULY-1678426661.png')} className="img-fluid rounded-start" alt="..."/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Newsletter July 2023</h5>
                          <p className="card-text golden-color fw-bold pt-3">Read More -</p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            <div className="col-md-12 col-lg-6">
                <div className="card mb-3 shadow-lg" >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={require('../../image/thumbil_news_letter_JUNE-1678426649.png')} className="img-fluid rounded-start" alt="..."/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Newsletter June 2023</h5>
                          <p className="card-text golden-color fw-bold pt-3">Read More -</p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
          
    </div>
</div>
<Footer/>
        </>
    )
}
