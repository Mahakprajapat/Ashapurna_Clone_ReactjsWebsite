import React from 'react'
import Header from '../../Component/Header'
import '../../Pages/Pages.css'
import yearexperice from '../../image/experience-check.svg'
import villa from '../../image/villas-completed.svg';
import happyimg from '../../image/happy.svg';
import unitimg from '../../image/units.svg';
import Footer from '../../Component/Footer';


export default function Ourjourney() {
    return (
        <>
            <Header />
            {/* <!-- back-image --> */}
            <div class="container-fluid  aboutbgimg">
                <div class="container bgheading ">
                    <div class="text-white fs-5 fw-medium ">HOME / OUR JOURNEY</div>
                    <div class="golden-color mb-2 fs-2 fw-bold">OUR JOURNEY</div>
                </div>
            </div>
            {/* <!-- journey-section --> */}
            <div className="container-fluid achievementbg">
                <div className="container my-5">
                    <div className="row position-relative" style={{ width: "800px" }} >
                        <img src={require('../../image/floor-plan.jpg')} alt="floorimg" className="img-fluid" />
                    </div>
                    <div className="row postionjourney ">
                        <div className="col-5"></div>

                        <div className="col-7 py-2 px-5 bg-white shadow journeyborder">

                            <span className="text-uppercase subtitle position-relative mb-2 pe-3">our Journey</span>
                            <h1>A Brief About Our Journey</h1>
                            <p>Ashapurna started its journey in 1996 and registered as a Private Limited Company. After a year it turned into a Limited Company. We are proud that Ashapurna Buildcon Ltd. became the first ISO: 9001: 2000 Certified Company of western Rajasthan in the year 2004. Ashapurna Stated its first project of 400 Villas / Plot in 1997 and completed it within the record time period of 18 months.</p>
                            <p>Then in a series every project that was started, was completed within an 18-month period. Till now a total of 42 projects consisting of around 6000 Villas, and around 18,000 Plots in various Residential townships / Commercial malls / Residential Multistoried complexes have already been completed and handed over to the respective customers. Shri Karan Singh Unchiyarda is also a recognized person in the hospitality sector as a renowned hotelier. The prestigious three-star comforts Residency Palace Hotel is a unique landmark in the city of Jodhpur.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* about-row */}
            <div className="container-fluid">
                <div className="container">
                    <div className="row bgaboutrowimg py-4 my-4" >
                        <div className="col-3">
                            <div className=" m-2 text-center">
                                <div className="align-item-center justify-content-center mb-2">
                                    <img src={yearexperice} className=" rounded-1 bg-white m-1 p-3 "
                                        alt="years of experience" />
                                </div>
                                <span>
                                    <div className="fs-4 fw-semibold" style={{ height: "40px" }}>
                                        <span className="golden-color">26</span>
                                        <span className="golden-color">+</span>
                                    </div>
                                </span>
                                <p className="text-capitalize  fw-semibold text-white ">years of experience</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className=" m-2 text-center">
                                <div className="align-item-center justify-content-center mb-2">
                                    <img src={villa} className=" rounded-1 bg-white m-1 p-3  " style={{ width: "82px" }}
                                        alt="villas-compelte" />
                                </div>
                                <span>
                                    <div className="fs-4 fw-semibold" style={{ height: "40px" }}>
                                        <span className="golden-color">40</span>
                                        <span className="golden-color">+</span>
                                    </div>
                                </span>
                                <p className="text-capitalize  fw-semibold text-white ">Projects compelte</p>
                            </div>

                        </div>
                        <div className="col-3">
                            <div className=" m-2 text-center">
                                <div className="align-item-center justify-content-center mb-2">
                                    <img src={happyimg} className=" rounded-1 bg-white m-1 p-3 "
                                        alt="happy-image" style={{ width: "75px" }} />
                                </div>
                                <span>
                                    <div className="fs-4 fw-semibold" style={{ height: "40px" }}>
                                        <span className="golden-color">26000</span>
                                        <span className="golden-color">+</span>
                                    </div>
                                </span>
                                <p className="text-capitalize  fw-semibold text-white ">Happy families</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className=" m-2 text-center">
                                <div className="align-item-center justify-content-center mb-2">
                                    <img src={unitimg} className=" rounded-1 bg-white m-1 p-3 "
                                        alt="unit-image" />
                                </div>
                                <span>
                                    <div className="fs-4 fw-semibold" style={{ height: "40px" }}>
                                        <span className="golden-color">11000</span>
                                        <span className="golden-color">+</span>
                                    </div>
                                </span>
                                <p className="text-capitalize  fw-semibold text-white ">Units</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>

        </>
    )
}
