import React, { useEffect, useState } from 'react'
import Header from '../Component/Header'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Slider from "react-slick";
import '../Pages/Pages.css';
import Footer from '../Component/Footer';
import axios from 'axios';
import { BaseUrl } from '../API/BaseUrl';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollTrigger from 'react-scroll-trigger';


export default function Home() {
    let [sliderPath, setsliderPath] = useState('')
    let [aboutPath, setaboutPath] = useState('')
    let [hometitlePath, sethometitlePath] = useState('')
    let [chooseusPath, setchoosePath] = useState('')
    let [sliderData, setsliderData] = useState([])
    let [aboutData, setaboutData] = useState({})
    let [homeTitles, sethomeTitles] = useState({})
    let [chooseusData, setchooseusData] = useState([])
    let [projectPath, setprojectPath] = useState('')
    let [projectoverviewData, setprojectoverviewData] = useState([])
    let [testimonialPath, settestimonialPath] = useState('')
    let [testimonialData, settestimonialData] = useState([])
    let [utsavCampsPath, setutsavCampsPath] = useState('')
    let [utsavCampsData, setutsavCampsData] = useState([])
    let [getprojectimagePath,setgetprojectimagePath]= useState('')
    let [getProject,setgetProject] = useState([])
    let [amenitiesimagePath,setamenitiesimagePath]=useState('')
    const [counterOn,setcounterOn]= useState(false);

    let homePageData = () => {
        axios.post(BaseUrl + '/home')
            .then((res) => res.data)
            .then((finalRes) => {
                let fData = (finalRes._data)
                // slider Data
                setsliderPath(fData.slider_image_path)
                setsliderData(fData.getSliders)
                // about us data
                setaboutPath(fData.about_us_image_path)
                setaboutData(fData.aboutUs)
                // titles of home page
                sethomeTitles(fData.getHomePage)
                // choose us data
                setchoosePath(fData.why_choose_us_image_path)
                setchooseusData(fData.getWhyChooseUs)
                // PROJECT OVERVIEW
                setprojectPath(fData.project_image_path)
                setprojectoverviewData(fData.getProjects)
                // testimonial path/data
                settestimonialPath(fData.testimonial_image_path)
                settestimonialData(fData.getTestimonials)
                // utsavCamps media 
                setutsavCampsPath(fData.utsav_camps_image_path)
                setutsavCampsData(fData.getUtsavCamps)
                // OUR WORK Featured Projects
                setgetprojectimagePath(fData.project_image_path)
                setamenitiesimagePath(fData.amenities_image_path)
                setgetProject(fData.getFeaturedProjects)
            })
    }
    useEffect(() => {
        homePageData();
    }, [])

    const settings0 = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
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

            {/* slider */}
            <div className='Container-fluid px-5 '>
                {/* <div className='container'> */}
                <Slider {...settings0}>
                    {
                        sliderData.length >= 1
                            ?
                            sliderData.map((items, i) => {
                                return (
                                    <div>
                                        <img src={sliderPath + items.image} className="d-block w-100 img-fluid active" alt="best-township-image" />
                                    </div>
                                )
                            })

                            :
                            ""
                    }
                </Slider>
                {/* </div> */}
            </div>
            {/* slider form */}
            <div className="container-fluid mt-2 px-5">
                <div className=" shadow-lg  sliderform ">
                    <form className="">
                        <div className="row justify-content-center align-item-end p-3 mb-1">
                            <div className="col">
                                <input type="text" className="form-control p-3" placeholder="Name" aria-label="Name" />
                            </div>
                            <div className="col">
                                <input type="email" className="form-control p-3" placeholder="Email" aria-label="Email" />
                            </div>
                            <div className="col">

                                <input type="number" className="form-control mt-1 p-3" placeholder="Phone" aria-label="Phone" />
                            </div>
                            <div className="col">

                                <select id="select propery" className="form-select p-3" placeholder="Select Propery"
                                    aria-label="Select Propery">
                                    <option selected>Select Propery</option>
                                    <option value="47">Ashapurna Girls Hostel Mumbai</option>
                                    <option value="45">Ashapurna Kundan Villa</option>
                                    <option value="43">Buddha Institutions</option>
                                    <option value="40">Ashapurna Clarks Inn</option>
                                    <option value="38">Ashapurna NRI</option>
                                    <option value="33">Ashapurna Crown Plaza</option>
                                    <option value="41">Hotel Residency Palace</option>
                                    <option value="34">Ashapurna Mall</option>
                                    <option value="7">Ashapurna Heritage</option>
                                    <option value="42">Ashapurna Palace</option>
                                    <option value="37">Ashapurna Pachpadra</option>
                                    <option value="35">Ashapurna Corporate Office</option>
                                    <option value="29">Ashapurna Anmol I,II,III</option>
                                    <option value="32">Ashapurna Aangan</option>
                                    <option value="27">Ashapurna Basera II Phase</option>
                                    <option value="31">Ashapurna Sheoganj</option>
                                    <option value="21">Ashapurna Nanomax II</option>
                                    <option value="10">Ashapurna Paradise</option>
                                    <option value="15">Ashapurna Empire</option>
                                    <option value="14">Ashapurna Aangan Prime</option>
                                    <option value="8">Ashapurna Platinum</option>
                                    <option value="6">Ashapurna Tower</option>
                                    <option value="30">Ashapurna City</option>
                                    <option value="17">Ashapurna Nano Plaza</option>
                                    <option value="19">Chandan Vihar</option>
                                    <option value="23">Ashapurna Valley</option>
                                    <option value="26">Ashapurna Golden Valley</option>
                                    <option value="28">Ashapurna Nagar</option>
                                    <option value="24">Ashapurna Nano Avenue</option>
                                    <option value="22">Ashapurna Sanchore</option>
                                    <option value="20">Ashapurna Jalore</option>
                                    <option value="18">Ashapurna Township Uchiyarda</option>
                                    <option value="16">Ashapurna Basera</option>
                                    <option value="9">Ashapurna Enclave</option>
                                    <option value="25">Ashapurna Enclave II</option>
                                </select>
                            </div>
                            <div className="col ">
                                <input type="text" className="form-control p-3" placeholder="Explain your Query"
                                    aria-label="Explain your Query" />
                            </div>
                            <div className="col">
                                <button type="submit"
                                    className="text-uppercase enquiryBtn rounded-1 mt-2 ms-4 btn  fw-500 text-white">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* home about section */}
            <div className="container-fluid mb-5">
                <div className="conatiner bg-white mt-5">
                    <div className="row">
                        {
                            aboutData !== undefined
                                ?
                                <>
                                    <div className="col-5 aboutimg">
                                        <img src={aboutPath + aboutData.homepage_image} alt="aboutimage " className="img-fluid" />
                                    </div>
                                    <div className="col-7">
                                        <div className=" aboutusright position-relative  m-3 ">
                                            <span className="text-uppercase subtitle position-relative mb-2 pe-3">{aboutData.homepage_title}</span>
                                            <h1 className="fs-2 fw-bold">{aboutData.homepage_tagline}</h1>
                                            <div className="text-align-center">
                                             <div dangerouslySetInnerHTML={{__html: aboutData.homepage_description}}/>  
                                             {/* {aboutData.homepage_description} */}
                                            </div>
                                            <div className="aboutusfeature ">
                                                <ScrollTrigger onEnter={()=>setcounterOn(true)} onExit={()=>setcounterOn(false)} >
                                                <div className="row">
                                                    <div className="col">
                                                        <div className=" m-2 text-center">
                                                            <div className="align-item-center justify-content-center mb-2">
                                                                <img src={require('../image/experience-check.png')} className=" rounded-1 bg-white m-1 p-3 "
                                                                    alt="years of experience" />
                                                            </div>
                                                            <span>
                                                                <div className="fs-4 fw-semibold" style={{ height: "40px" }}>
                                                                    <span>  { counterOn && <CountUp start={0} end={26} duration={3} delay={0} /> } </span>
                                                                    <span>+</span>
                                                                </div>
                                                            </span>
                                                            <p className="text-capitalize  fw-semibold ">years of experience</p>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className=" m-2 text-center">
                                                            <div className="align-item-center justify-content-center mb-2">
                                                                <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/home-page/property.svg"
                                                                    style={{ height: "80px" }} className=" rounded-1 bg-white m-1 p-3 "
                                                                    alt="years of experience" />
                                                            </div>
                                                            <span>
                                                                <div className="fs-4  fw-semibold" style={{ height: "40px" }}>
                                                                    <span> { counterOn && <CountUp start={0} end={40} duration={3} delay={0} /> } </span>
                                                                    <span>+</span>
                                                                </div>
                                                            </span>
                                                            <p className="text-capitalize  fw-semibold ">Projects</p>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className=" m-2 text-center">
                                                            <div className="align-item-center justify-content-center mb-2">
                                                                <img src={require('../image/happy.png')} style={{ height: "80px" }}
                                                                    className=" rounded-1 bg-white m-1 p-3 " alt="years of experience" />
                                                            </div>
                                                            <span>
                                                                <div className="fs-4  fw-semibold" style={{ height: "40px" }}>
                                                                    <span> {counterOn && <CountUp start={0} end={26000} duration={3} delay={0} /> } </span>
                                                                    <span>+</span>
                                                                </div>
                                                            </span>
                                                            <p className="text-capitalize  fw-semibold ">happy families</p>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className=" m-2 text-center">
                                                            <div className="align-item-center justify-content-center mb-2">
                                                                <img src={require('../image/measuring-tape.png')} style={{ height: "80px" }}
                                                                    className=" rounded-1 bg-white m-1 p-3 " alt="years of experience" />
                                                            </div>
                                                            <span>
                                                                <div className="fs-4  fw-semibold" style={{ height: "40px" }}>
                                                                    <span> {counterOn && <CountUp start={0} end={36} duration={3} delay={0} />}</span>
                                                                    <span>+</span>
                                                                </div>
                                                            </span>
                                                            <p className="text-capitalize  fw-semibold">Lakh Sq.Ft Delivered</p>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className=" m-2 text-center">
                                                            <div className="align-item-center justify-content-center mb-2">
                                                                <img src={require('../image/units.png')} style={{ height: "80px" }}
                                                                    className=" rounded-1 bg-white m-1 p-3 " alt="years of experience" />
                                                            </div>
                                                            <span>
                                                                <div className="fs-4  fw-semibold" style={{ height: "40px" }}>
                                                                    <span> {counterOn && <CountUp start={0} end={11000} duration={3} delay={0} />}</span>
                                                                    <span>+</span>
                                                                </div>
                                                            </span>
                                                            <p className="text-capitalize  fw-semibold ">units</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                </ScrollTrigger>
                                              
                                            </div>
                                        </div>
                                    </div>
                                </>


                                :
                                ""
                        }


                    </div>
                </div>
            </div>
            {/* why ashapurna section */}

            <div className="container-fluid mb-4  whyashapurnasection" >
                <div className="container" >
                    <div className="row ">
                        {
                            homeTitles !== undefined
                                ?
                                <div className="col-4 py-5 my-5">
                                    <div className=" align-item-center p-2">
                                        <span className="text-uppercase subtitle position-relative mb-2 pe-3">{homeTitles.why_us_title}</span>
                                    </div>
                                    <h1 className="fs-1 fw-bold">{homeTitles.why_us_tagline}</h1>
                                    <div className="text-align-center">
                                        
                                        <p>{homeTitles.why_us_description}</p>

                                    </div>

                                </div>
                                :
                                ""

                        }
                        {
                            chooseusData !== undefined
                                ?
                                <div className="col-8">
                                    <div className=" position-relative">
                                        <div className="whyashapurna-blockmain">
                                            <div className="row">
                                                {
                                                    chooseusData.length >= 1
                                                        ?
                                                        chooseusData.map((v, i) => {
                                                            return (
                                                                <div className="col-6 my-4">
                                                                    <div className="whyashapurna-block rounded-1">
                                                                        <span>
                                                                            <img src={chooseusPath + v.image} style={{ width: "60px" }} alt="Property Care Service" />
                                                                        </span>
                                                                        <h3 className="my-3">{v.title}</h3>
                                                                        <div className="underline my-2"></div>
                                                                        <p>{v.short_description.slice(0, 80)}...</p>
                                                                        <div className="golden-color my-2 fs-5 ">Read more</div>
                                                                    </div>

                                                                </div>
                                                            )
                                                        })
                                                        :
                                                        ""

                                                }    </div>
                                        </div>

                                    </div>

                                </div>
                                :
                                ""
                        }


                    </div>

                </div>
            </div>

            {/* OUR WORK Featured section */}
            <div className=' container-fluid ourworksection ' style={{ background: "#32343b" }}>
                <div className='container ashapurnaProjects-main'>
                    <div className="row">
                        <div className=" align-item-center mt-5">
                            <span className="text-uppercase subtitle position-relative ">OUR WORK</span>
                        </div>
                        <h1 className="fs-1 fw-bold mb-3 text-white">Featured Projects</h1>
                    </div>
                    <div className='row  ashapurnaProjects-slider'>
                        <Slider {...settings}>
                            {
                               getProject.map((v,i)=>{
                                return(
                                    <div>
                                    <div className="row" style={{ background: "#32343b" }}>
                                        <div className="col-6 my-3">
                                            <img src={getprojectimagePath+v.homepage_image}
                                                className="img-fluid" alt="kundan-villa-coming-soon-image" />
                                        </div>
                                        <div className="col-6 ">
    
                                            <h1 className="text-white workheading my-2">{v.name}</h1>
                                            <p className="text-white my-3 p-1">{v.short_description}
                                                </p>
                                            <div className="row mx-2">
                                                {
                                                    v.amenities.slice(0,3).map((amen,ameni)=>{
                                                        return(
                                                            <div className="col  position-relative">
                                                    <div className="workingcolimg "><img src={amenitiesimagePath+amen.image}
                                                        style={{ width: "40px" }} alt="" /></div>
                                                    <div>
                                                        <h3 className="golden-color text-uppercase mx-5 my-1 fs-6">{amen.title}</h3>
                                                        <p className=" text-uppercase mx-5 fs-6  text-white">{amen.sub_title}</p>
                                                    </div>
                                                </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className="col-12 mb-3"> <button
                                                className="btnourwork text-white rounded py-2 px-3">See all</button> </div>
                                        </div>
                                    </div>
                                </div>
                                )
                               }) 
                            }
                        </Slider>
                    </div>
                </div>
            </div>

            {/* project overview section */}
            <div className='container-fluid py-4 projectoverviewbg'>
                <div className='container ashapurnaBusiness-main'>
                    <div className="row">
                        {
                            homeTitles !== undefined
                                ?
                                <>
                                    <div className=" align-item-center mt-5">
                                        <span className="text-uppercase subtitle position-relative ">{homeTitles.project_overview_title}</span>
                                    </div>
                                    <h1 className="fs-1 fw-bold mb-3 ">{homeTitles.project_overview_tagline}</h1>
                                    <p>{homeTitles.project_overview_description}</p>
                                </>
                                :
                                ""
                        }

                    </div>
                    <div className="row my-4 tab-content">
                        <Slider {...settings2}>
                            {
                                projectoverviewData.length >= 1
                                    ?
                                    projectoverviewData.map((items, i) => {
                                        return (
                                            <div>
                                                <div className="item mb-5">
                                                    <div className="projectblockmain  ">
                                                        <div className="projectblockinner">
                                                            <div className="projectimage rounded-1 position-relative">
                                                                <img src={projectPath + items.project_logo_1}
                                                                    className="img-fluid rounded-1" alt="premium-budget-image" />
                                                            </div>
                                                            <div className="projectimageheading bg-primary bg-white p-2 rounded-1 shadow d-block ">

                                                                <div className="d-flex"><img
                                                                    src={projectPath + items.project_logo_2}
                                                                    style={{ width: "35px" }} alt="" />
                                                                    <h6 className="mx-2 ">{items.name}</h6>
                                                                </div>
                                                                <div className="">
                                                                    <p className="mb-0"><i className="fa-solid fa-location-dot"></i> {items.address}
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
                                        )
                                    })
                                    :
                                    ""
                            }
                        </Slider>
                    </div>
                </div>
            </div>
            {/* OUR TESTIMONIALS-section */}
            <div className='container-fluid mt-5 pb-3' style={{ background: "#32343b" }}>
                <div className='container'>
                    <div className='row'>
                        {
                            homeTitles !== undefined
                                ?
                                <div className='col-4'>
                                    <div class=" align-item-center mt-5 p-2">
                                        <span class="text-uppercase subtitle position-relative mb-2 pe-3">{homeTitles.our_testimonial_title}</span>
                                    </div>
                                    <h1 class="fs-1 fw-bold text-white mb-4">{homeTitles.our_testimonial_tagline}</h1>
                                    <div class="text-align-center py-2 text-white">
                                        <p>{homeTitles.our_testimonial_description}</p>

                                    </div>
                                    <button type="#" class=" enquiryBtn rounded-1 my-3  px-5 btn  fw-semibold text-white">See
                                        All</button>
                                </div>
                                :
                                ""
                        }

                        <div className='col-8  '>
                            <div className="container .ashapurnaProjects-main">
                                <div className='row align-items-center .ashapurnaProjects-slider'>
                                    <Slider {...settings}>
                                        {
                                            testimonialData.length >= 1
                                                ?
                                                testimonialData.map((items, i) => {
                                                    return (
                                                        <div>
                                                            <div class="testimonialsslider rounded-1 position-relative">
                                                                <div class="testimonialsimg position-absolute "><img src={testimonialPath + items.image} alt="testimonialsimg" class=" img-fluid " style={{ width: "170px" }} /></div>
                                                                <div class="mt-2 ps-2 ">
                                                                    <h4 class="golden-color ">{items.name}</h4>
                                                                    <p class="">{items.position}</p>
                                                                </div>
                                                                <div class="mx-4 ">
                                                                    <p>{items.message}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                                :
                                                ""
                                        }

                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/*  <!-- media and event -section --> */}

            <div class="container-fluid">
                <div class="container">
                    <div class="row mt-5">

                        <div class="col-5 fs-2 fw-semibold">Media And Event</div>
                        <div class="col-7 text-end"> <button class=" bg-black rounded-1 my-3  px-4 py-2 btn  text-white">
                            <Link to={'/Mediaandevent'} className='text-white text-decoration-none'>See All</Link>
                            </button> </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className="container">
                    <div className='row'>
                        <Slider {...settings2}>
                            {
                                utsavCampsData.length >= 1
                                    ?
                                    utsavCampsData.map((items, i) => {
                                        return (
                                            <div>
                                                <div class="card" style={{ width: "420px" }}>
                                                    <img src={utsavCampsPath + items.image} class="card-img-top" alt="mohansinghimg" />
                                                    <div class="card-body">
                                                        <p> <a class="fs-6 golden-color text-decoration-none fw-bold" href="#">{items.title}
                                                        </a></p>
                                                        <p> <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg> {items.location}</p>
                                                        <p> <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg> {items.date}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                    :
                                    ""
                            }
                        </Slider>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
