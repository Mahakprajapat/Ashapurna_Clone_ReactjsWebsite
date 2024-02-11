import React from 'react'
import Header from '../../Component/Header'
import '../../Pages/Pages.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Slider from "react-slick";
import yearexperice from '../../image/experience-check.svg'
import villa from '../../image/villas-completed.svg';
import happyimg from '../../image/happy.svg';
import unitimg from '../../image/units.svg';
import Footer from '../../Component/Footer';


export default function Aboutus() {
    const settings2 = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <>
            <Header />
            <div class="circlearrow">
            <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512"><path d="M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4 .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z"/></svg>
            </div>
            <div className="container-fluid  aboutbgimg">
                <div className="container bgheading ">
                    <div className="text-white fs-5 fw-medium ">HOME / ABOUT US</div>
                    <div className="golden-color mb-2 fs-2 fw-bold">ABOUT US</div>
                </div>
            </div>

            {/* welcome section */}
            <div className="container-fluid pt-5 my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6"><img src={require('../../image/ashapurna-buildcon-corporate-office-1681628091.webp')} className="img-fluid" alt="" /></div>
                        <div className="col-lg-6">
                            <div>
                                <span className="text-uppercase subtitle position-relative mb-2 ">ABOUT US</span>
                                <h1 className="fs-2 fw-bold">Welcome to Ashapurna</h1>
                                <div className="text-align-center">
                                    <p >Ashapurna Buildcon started its journey in 1996 as a private limited company and turned into a limited company after just one year. Ashapurna became the first ISO 9001:2000 certified company in western Rajasthan in 2004. The company’s first offering was a project of 400 villas/plots that came in 1997 and was completed within a record time of 18 months which eventually became a norm in many upcoming projects. In its existence of 27 years, Ashapurna Buildcon has 40 projects and has delivered 36 projects spanning 75,00,000 square feet, housing more than 25,000 smiling and satisfied faces.</p>
                                    <p>Under the able leadership of Shri Karan Singh Uchiyarda, Ashapurna Buildcon has spread its wings across top residential projects in Jodhpur, hospitality, education, and entertainment domains, and commercial property in Jodhpur. Shri Karan Singh Uchiyarda gave ‘Comforts Residency Palace’, a renowned 3-star hotel, to Jodhpur, Hotel Ashapurna to Jaipur and another 5-star resort-cum-hotel is coming up at Uchiyarda. In education, the company owns and runs an architecture institute named ‘Buddha Institute’ in Udaipur. In the past few years, Ashapurna Buildcon has proven itself to the Real Estate market of Rajasthan and conveyed itself as one of the Top 10 Real Estate Companies in Rajasthan. In its quest to take the idea of lifestyle to the next level, Ashapurna Buildcon has launched premium budget homes that perfectly blend style and practicality.</p>
                                </div>
                            </div>
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
            {/* feature project */}
            <div className='container-fluid py-4 '>
                <div className='container'>
                    <div className="row">
                        <div className=" align-item-center">
                            <h3 className="text-uppercase fw-bold  text-center">PROJECT OVERVIEW</h3>
                        </div>

                    </div>
                    <div className="row my-4">
                        <Slider {...settings2}>
                            <div>
                                <div className="item mb-5">
                                    <div className="projectblockmain  ">
                                        <div className="projectblockinner">
                                            <div className="projectimage rounded-1 position-relative">
                                                <img src={require('../../image/premium-budget-villas-in-jodhpur-1681994380 (1).webp')}
                                                    className="img-fluid rounded-1" alt="premium-budget-image" />
                                            </div>
                                            <div className="projectimageheading bg-primary bg-white p-2 rounded-1 shadow d-block ">

                                                <div className="d-flex"><img
                                                    src={require('../../image/ashapurna-anmol-budget-villas-in-jodhpur-logo-1677495339.webp')}
                                                    style={{ width: "35px" }} alt="" />
                                                    <h6 className="mx-2 ">Ashapurna Anmol I,II,III</h6>
                                                </div>
                                                <div className="">
                                                    <p className="mb-0"><i className="fa-solid fa-location-dot"></i> near new high court, jodhpur
                                                    </p>
                                                    <div className="d-flex text-start ">
                                                        <p className="pe-5 projectbottom"> <i className="fa-solid fa-house-chimney"></i>
                                                            possession soon</p>
                                                        <button className="projectinnerbtn projectbottom">see all</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="item mb-5">
                                    <div className="projectblockmain  ">
                                        <div className="projectblockinner">
                                            <div className="projectimage rounded-1 position-relative">
                                                <img src={require('../../image/ashapurna-aangan-budget-house-in-jodhpur-1682079322.webp')}
                                                    className="img-fluid rounded-1" alt="premium-budget-image" />
                                            </div>
                                            <div className="projectimageheading bg-primary bg-white p-2 rounded-1 shadow d-block ">

                                                <div className="d-flex"><img
                                                    src={require('../../image/ashapurna-aangan-logo-1677495610.webp')}
                                                    style={{ width: "35px" }} alt="" />
                                                    <h6 className="mx-2 ">Ashapurna Aangan</h6>
                                                </div>
                                                <div className="">
                                                    <p className="mb-0"><i className="fa-solid fa-location-dot"></i> Banar
                                                        ,Jodhpur</p>
                                                    <div className="d-flex text-start ">
                                                        <p className="pe-5 projectbottom"> <i className="fa-solid fa-house-chimney"></i>
                                                            possession soon</p>
                                                        <button className="projectinnerbtn projectbottom">see all</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="item mb-5">
                                    <div className="projectblockmain  ">
                                        <div className="projectblockinner">
                                            <div className="projectimage rounded-1 position-relative">
                                                <img src={require('../../image/ashapurna-basera-flats-in-jodhpur-1682081467.webp')}
                                                    className="img-fluid rounded-1" alt="premium-budget-image" />
                                            </div>
                                            <div className="projectimageheading bg-primary bg-white p-2 rounded-1 shadow d-block ">

                                                <div className="d-flex"><img
                                                    src={require('../../image/ashapurna-basera-phase-ii-logo-1677495521.webp')}
                                                    style={{ width: "35px" }} alt="" />
                                                    <h6 className="mx-2 ">Ashapurna Basera II</h6>
                                                </div>
                                                <div className="">
                                                    <p className="mb-0"><i className="fa-solid fa-location-dot"></i> pal sangariya road</p>
                                                    <div className="d-flex text-start ">
                                                        <p className="pe-5 projectbottom"> <i className="fa-solid fa-house-chimney"></i>
                                                            possession soon</p>
                                                        <button className="projectinnerbtn projectbottom">see all</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="item mb-5">

                                    <div className="projectblockmain  ">
                                        <div className="projectblockinner">
                                            <div className="projectimage rounded-1 position-relative">
                                                <img src={require('../../image/plots-for-sale-in-sheoganj-1681992470.webp')} className="img-fluid rounded-1" alt="premium-budget-image" />
                                            </div>
                                            <div className="projectimageheading bg-primary bg-white p-2 rounded-1 shadow d-block ">

                                                <div className="d-flex"><img
                                                    src={require('../../image/ashapurna-township-sheoganj-logo-1677495034.webp')}
                                                    style={{ width: "35px" }} alt="" />
                                                    <h6 className="mx-2 ">Ashapurna Sheoganj</h6>
                                                </div>
                                                <div className="">
                                                    <p className="mb-0"><i className="fa-solid fa-location-dot"></i> Sheoganj, sirohi district, Rajasthan</p>
                                                    <div className="d-flex text-start ">
                                                        <p className="pe-5 projectbottom"> <i className="fa-solid fa-house-chimney"></i>
                                                            Ready to Occupy</p>
                                                        <button className="projectinnerbtn projectbottom">see all</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="item mb-5">

                                    <div className="projectblockmain  ">
                                        <div className="projectblockinner">
                                            <div className="projectimage rounded-1 position-relative">
                                                <img src={require('../../image/nanomax-project-thumbnail-1681986809.webp')}
                                                    className="img-fluid rounded-1" alt="premium-budget-image" />
                                            </div>
                                            <div className="projectimageheading bg-primary bg-white p-2 rounded-1 shadow d-block ">

                                                <div className="d-flex"><img
                                                    src={require('../../image/ashapurna-nanomax-ii-logo-1677494586.webp')}
                                                    style={{ width: "35px" }} alt="" />
                                                    <h6 className="mx-2 ">Ashapurna Nanomax</h6>
                                                </div>
                                                <div className="">
                                                    <p className="mb-0"><i className="fa-solid fa-location-dot"></i> jodhpur,Rajasthan,342015,India </p>
                                                    <div className="d-flex text-start ">
                                                        <p className="pe-5 projectbottom"> <i className="fa-solid fa-house-chimney"></i>
                                                            Ready to Occupy</p>
                                                        <button className="projectinnerbtn projectbottom">see all</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="item mb-5">

                                    <div className="projectblockmain  ">
                                        <div className="projectblockinner">
                                            <div className="projectimage rounded-1 position-relative">
                                                <img src={require('../../image/ashapurna-empire-flats-in-jaipur-1681995100.webp')}
                                                    className="img-fluid rounded-1" alt="premium-budget-image" />
                                            </div>
                                            <div className="projectimageheading bg-primary bg-white p-2 rounded-1 shadow d-block ">

                                                <div className="d-flex"><img
                                                    src={require('../../image/ashapurna-empire-apartments-in-jaipur-logo-1677495242.webp')}
                                                    style={{ width: "35px" }} alt="" />
                                                    <h6 className="mx-2 ">Ashapurna Empire</h6>
                                                </div>
                                                <div className="">
                                                    <p className="mb-0"><i className="fa-solid fa-location-dot"></i> Vaishali Nagar, Jaipur, Rajasthan 302021</p>
                                                    <div className="d-flex text-start ">
                                                        <p className="pe-5 projectbottom"> <i className="fa-solid fa-house-chimney"></i>
                                                            Ready to Occupy</p>
                                                        <button className="projectinnerbtn projectbottom">see all</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="item mb-5">

                                    <div className="projectblockmain  ">
                                        <div className="projectblockinner">
                                            <div className="projectimage rounded-1 position-relative">
                                                <img src={require('../../image/ashapurna-platinum-best-flats-in-jodhpur-1682070306.webp')}
                                                    className="img-fluid rounded-1" alt="premium-budget-image" />
                                            </div>
                                            <div className="projectimageheading bg-primary bg-white p-2 rounded-1 shadow d-block ">

                                                <div className="d-flex"><img
                                                    src={require('../../image/ashapurna-platinum-apartments-in-jodhpur-logo-1677495735.webp')}
                                                    style={{ width: "35px" }} alt="" />
                                                    <h6 className="mx-2 ">Ashapurna Platinum</h6>
                                                </div>
                                                <div className="">
                                                    <p className="mb-0"><i className="fa-solid fa-location-dot"></i> Basni,basni,jodhpur,Rajasthan 340082</p>
                                                    <div className="d-flex text-start ">
                                                        <p className="pe-5 projectbottom"> <i className="fa-solid fa-house-chimney"></i>
                                                            Ready to Occupy</p>
                                                        <button className="projectinnerbtn projectbottom">see all</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="item mb-5">

                                    <div className="projectblockmain  ">
                                        <div className="projectblockinner">
                                            <div className="projectimage rounded-1 position-relative">
                                                <img src={require('../../image/ashapurna-tower-aprtment-in-paota-jodhpur-1682058189.webp')}
                                                    className="img-fluid rounded-1" alt="premium-budget-image" />
                                            </div>
                                            <div className="projectimageheading bg-primary bg-white p-2 rounded-1 shadow d-block ">

                                                <div className="d-flex"><img
                                                    src={require('../../image/ashapurna-basera-phase-ii-logo-1677495521.webp')}
                                                    style={{ width: "35px" }} alt="" />
                                                    <h6 className="mx-2 ">Ashapurna Tower</h6>
                                                </div>
                                                <div className="">
                                                    <p className="mb-0"><i className="fa-solid fa-location-dot"></i> paota, jodhpur Rajasthan 340082</p>
                                                    <div className="d-flex text-start ">
                                                        <p className="pe-5 projectbottom"> <i className="fa-solid fa-house-chimney"></i>
                                                            Ready to Occupy</p>
                                                        <button className="projectinnerbtn projectbottom">see all</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            {/* <!-- our-vision-section --> */}

            <div className="container-fluid visionsectionbg mt-5">
                <div className="container ">
                    <div className=" row visionposition">
                        <div className="col-md-12 col-lg-6" >
                            <div className="card mb-3" >
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={require('../../image/ourvision.png')} className="img-fluid " alt="visionimg" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title text-uppercase position-relative visionunderline">Our Vision</h5>
                                            <p className="card-text">To be a leader and most preferred real estate name in Rajasthan by constantly striving hard to put innovation and futuristic perspective in every fine detail of designing and execution.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div className="card mb-3" >
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={require('../../image/ourmission.png')} className="img-fluid " alt="misionimg" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title text-uppercase position-relative visionunderline">Our Mission</h5>
                                            <p className="card-text">To offer quality and refined workmanship in both product and service plus maintain the highest level of professionalism while dealing with customers, employees and associates</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<!-- our achievement-section -->  */}

            <div className="container-fluid achievementbg ">
                <div className="container my-5">
                    <div className="row position-relative" style={{ width: "700px" }} >
                        <img src={require('../../image/floor-plan.jpg')} alt="floorimg" className="img-fluid" />
                    </div>
                    <div className="row postionachieve ">
                        <div className="col-5"></div>
                        <div className="col-7 p-4 bg-white achieveborder"><h1>Our Achievements</h1>
                            <p>“Indian Leadership Award for Infrastructure Development 2011” for Outstanding Contribution in the Field of Infrastructure Development to Shri Karan Singh Uchiyarda, Chairman & Managing Director, Ashapurna Buildcon by “Indian Economic Development & Research Association, New Delhi”</p>
                            <p> Dignitaries Present: Dr. Bhishma Narayan Singh, Former Governor, Tamil Nadu; Dr. GVG Krishnamoorti, Former Chief Election Commissioner, Government of India and Jogendra Singh, Former CBI Director</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
