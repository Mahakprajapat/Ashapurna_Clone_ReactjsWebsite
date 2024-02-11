import React from 'react'
import '../Component/Footer.css'
import footerlogo from '../image/ffe726b1-c8b0-4798-8c89-ebad0cb7ebf3-1673702923.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div className="container-fluid footercolor mt-5 ">
                <div className="container">
                    <div className="row ">
                        <div className="col-xl-4 col-lg-5 col-md-6  border-bottom">
                            <div className="mt-5"><img src={footerlogo} alt="logo" />
                            </div>
                            <div className=" mt-2 d-flex">
                                <div className="text-white mt-1 px-2"><svg xmlns="http://www.w3.org/2000/svg" height="27" width="27" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z"/></svg></div>
                                <div className="text-white px-1">9314041747 <br />
                                    0291-2514747, 9610383747</div>
                            </div>
                            <div className=" mt-2 d-flex">
                                <div className="text-white mt-1 px-2"><svg xmlns="http://www.w3.org/2000/svg" height="27" width="27" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg></div>
                                <div className="text-white mt-1 fs-5 px-1">marketing@ashapurna.com</div>
                            </div>
                            <div className=" mt-2 d-flex">
                                <div className="text-white mt-2 px-2"><svg xmlns="http://www.w3.org/2000/svg" height="27" width="27" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg></div>
                                <div className="text-white mt-1 pe-4">-, 4A, EAST PATEL NAGAR, CIRCUIT HOUSE ROAD, OPPOSITE LIC
                                    OFFICE, Jodhpur, Rajasthan, 342011</div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 col-md-6  border-bottom">
                            <div className="row border-start mt-5 ms-5">
                                <div className="col-12 footerinnerheading position-relative mb-3 fs-4 fw-semibold text-white">Useful
                                    Links</div>
                                <div className="d-flex flex-wrap align-item-center">
                                    <div><Link to={'/Residential'} className="text-white text-decoration-none mb-3 pe-2">Residental Projects |</Link>
                                    </div>
                                    <div><Link to={'/Commercial'} className="text-white text-decoration-none mb-3 pe-2">Commercial Projects |</Link>
                                    </div>

                                    <div><a href="Investor.html" className="text-white text-decoration-none mb-3 pe-2">Investors
                                        Club |</a></div>
                                    <div><Link to={'/Nri'} className="text-white text-decoration-none mb-3 pe-2">NRI Corner |</Link></div>
                                    <div><Link href="" className="text-white text-decoration-none mb-3 pe-2">Career |</Link></div>
                                    <div><Link href="" className="text-white text-decoration-none mb-3 pe-2">Become A Partner |</Link>
                                    </div>
                                    <div><Link href="" className="text-white text-decoration-none mb-3 pe-2">Our Testimonials |</Link>
                                    </div>
                                    <div><Link href="" className="text-white text-decoration-none mb-3 pe-2">Privacy Policy |</Link></div>
                                    <div><Link href="" className="text-white text-decoration-none mb-3 pe-2">Terms & Conditions </Link>
                                    </div>


                                </div>
                                <div className="col-12 footerinnerheading2 position-relative mt-5 mb-3 fs-4 fw-semibold text-white">
                                    Important Links</div>
                                <div className="d-flex flex-wrap align-item-center">
                                    <div><a href="" className="text-white text-decoration-none mb-3 pe-2">Social Responsibility
                                        |</a></div>
                                    <div><a href="" className="text-white text-decoration-none mb-3 pe-2"> Corporate Profile |</a>
                                    </div>
                                    <div><a href="" className="text-white text-decoration-none mb-3 pe-2"> Why Invest In Jodhpur?
                                        |</a></div>
                                    <div><a href="" className="text-white text-decoration-none mb-3 pe-2"> RERA Disclaimer |</a>
                                    </div>
                                    <div><a href="" className="text-white text-decoration-none mb-3 pe-2"> EMI Calculator |</a>
                                    </div>
                                    <div><a href="" className="text-white text-decoration-none mb-3 pe-2"> Referral Scheme |</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 footerfollow text-white mt-3 mb-1 fs-4 fw-semibold">Follow Us on</div>
                        <div className="col-12 footerfollow mb-4 fs-3 text-white bg-dark-golden-color">
                            
                        
                            <svg xmlns="http://www.w3.org/2000/svg" height="27" width="27"  viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="27" width="27" viewBox="0 0 448 512"><path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"/></svg> 
                            <svg xmlns="http://www.w3.org/2000/svg" height="27" width="27" viewBox="0 0 448 512"><path d="M282 256.2l-95.2-54.1V310.3L282 256.2zM384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm14.4 136.1c7.6 28.6 7.6 88.2 7.6 88.2s0 59.6-7.6 88.1c-4.2 15.8-16.5 27.7-32.2 31.9C337.9 384 224 384 224 384s-113.9 0-142.2-7.6c-15.7-4.2-28-16.1-32.2-31.9C42 315.9 42 256.3 42 256.3s0-59.7 7.6-88.2c4.2-15.8 16.5-28.2 32.2-32.4C110.1 128 224 128 224 128s113.9 0 142.2 7.7c15.7 4.2 28 16.6 32.2 32.4z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="27" width="27" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="27" width="27" viewBox="0 0 448 512"><path d="M384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h72.6l-2.2-.8c-5.4-48.1-3.1-57.5 15.7-134.7c3.9-16 8.5-35 13.9-57.9c0 0-7.3-14.8-7.3-36.5c0-70.7 75.5-78 75.5-25c0 13.5-5.4 31.1-11.2 49.8c-3.3 10.6-6.6 21.5-9.1 32c-5.7 24.5 12.3 44.4 36.4 44.4c43.7 0 77.2-46 77.2-112.4c0-58.8-42.3-99.9-102.6-99.9C153 139 112 191.4 112 245.6c0 21.1 8.2 43.7 18.3 56c2 2.4 2.3 4.5 1.7 7c-1.1 4.7-3.1 12.9-4.7 19.2c-1 4-1.8 7.3-2.1 8.6c-1.1 4.5-3.5 5.5-8.2 3.3c-30.6-14.3-49.8-59.1-49.8-95.1C67.2 167.1 123.4 96 229.4 96c85.2 0 151.4 60.7 151.4 141.8c0 84.6-53.3 152.7-127.4 152.7c-24.9 0-48.3-12.9-56.3-28.2c0 0-12.3 46.9-15.3 58.4c-5 19.3-17.6 42.9-27.4 59.3H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="27" width="27" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                              </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid py-5 footerbg">
                <div className="bg-light-golden-color pt-35 pb-20 footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div
                                    className="text-center d-flex flex-wrap justify-content-start justify-content-lg-center align-items-center">
                                    <div className="m-2 text-capitalize  "><a className="text-decoration-none text-black "
                                        href="/">real estate developer in jodhpur |</a></div>
                                    <div className="m-2 text-capitalize  "><a className="text-decoration-none text-black"
                                        href="/">top builders in jodhpur |</a></div>
                                    <div className="m-2 text-capitalize "><a className="text-decoration-none text-black"
                                        href="/residential">top residental projects in jodhpur |</a></div>
                                    <div className="m-2 text-capitalize  "><a className="text-decoration-none text-black"
                                        href="/commercial">Commercial property in jodhpur |</a></div>
                                    <div className="m-2 text-capitalize "><a className="text-decoration-none text-black"
                                        href="/houses-in-rajasthan">Houses in Rajasthan |</a></div>
                                    <div className="m-2 text-capitalize "><a className="text-decoration-none text-black"
                                        href="/flats-in-jodhpur">Flats In Jodhpur |</a></div>
                                    <div className="m-2 text-capitalize  "><a className="text-decoration-none text-black"
                                        href="/villas-in-jodhpur">Villas In Jodhpur |</a></div>
                                    <div className="m-2 text-capitalize  "><a className="text-decoration-none text-black"
                                        href="/plots-in-jodhpur">Plots In Jodhpur |</a></div>
                                    <div className="m-2 text-capitalize  "><a className="text-decoration-none text-black"
                                        href="/2bhk-flats-in-jodhpur">2BHK Flats In Jodhpur |</a></div>
                                    <div className="m-2 text-capitalize "><a className="text-decoration-none text-black"
                                        href="/jda-property-in-jodhpur">JDA Property In Jodhpur |</a></div>
                                    <div className="m-2 text-capitalize "><a className="text-decoration-none text-black"
                                        href="/property-type">Property Type |</a></div>
                                    <div className="m-2 text-capitalize "><a className="text-decoration-none text-black"
                                        href="/hospitality">Properties in jodhpur</a></div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="divider my-4">
                                    <hr className="divider-line-2 mx-lg-auto" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="text-lg-center text-start fw-400 blue-color-2 fs-14 px-2 px-lg-5 lh-30 mb-0">
                                    <p>The information on the website regarding the project, except the legal documents, is purely
                                        indicative and representational and do not constitute a promise by the company. Further, the
                                        Company/Architects reserve the right to add / delete any details / specifications /
                                        elevations mentioned, if so warranted.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            <div className="bg-dark-golden-color p-3 copyright">
                <div className="container"><div className="row">
                    <div className="col-md-6">
                        <p className="mb-0 text-black ">Copyright © 2023 Ashapurnaclone</p>
                    </div>
                    <div className="col-md-6">
                        <p className="mb-0 text-black  text-md-end">Design by MHK</p>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
