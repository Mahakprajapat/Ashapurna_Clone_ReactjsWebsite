import React, { useEffect, useState } from 'react'
import Header from '../Component/Header'
import '../Pages/Pages.css';
import Footer from '../Component/Footer';
import axios from 'axios';
import { BaseUrl } from '../API/BaseUrl';

export default function Mediaandevent() {
  let [utsavCampsPath, setutsavCampsPath] = useState('')
  let [utsavCampsData, setutsavCampsData] = useState([])
  let mediaPageData=()=>{
    axios.post(BaseUrl + '/home')
    .then((res) => res.data)
    .then((finalRes)=>{
      let finData = (finalRes._data)
      // utsavCamps media 
      setutsavCampsPath(finData.utsav_camps_image_path)
      setutsavCampsData(finData.getUtsavCamps)
    })
  }
  useEffect(()=>{
    mediaPageData();
  },[])
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <Header/>
      <div class="circlearrow">
            <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512"><path d="M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4 .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z"/></svg>
            </div>
      {/* <!-- back-image --> */}
        <div className="container-fluid  aboutbgimg">
            <div className="container bgheading ">
                <div className="text-white fs-5 fw-medium ">HOME / MEDIA AND EVENTS</div>
                <div className="golden-color mb-2 fs-2 fw-bold">Media and Events</div>
            </div>
        </div>
        {/*  */}
        <div class="container-fluid mt-5">
    <div class="conatiner">
        <div class="row py-3 text-center">
            <h2 class="fw-bold">Utsav and Camps</h2>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            {/* <!-- <section class="wraper"> --> */}
             
             {
              utsavCampsData.length>=1
              ?
              utsavCampsData.map((items,i)=>{
                return(
                  <div class=" col-lg-4 col-md-6 item">
                  <div class="card shadow-lg border-none" >
                      <img src={utsavCampsPath + items.image} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <p > <a class="fs-6 golden-color text-decoration-none fw-bold" href="#">{items.title}</a></p>
                         <p > <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>  {items.location} </p>
                         <p > <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>  {items.date}</p>
                         <button class="text-white p-2 px-3 rounded-1 socialbtn" >Read More</button>
                      </div>
                    </div>


                </div>
                )
              })
              :
              ""
             }
                
                 

                  {/* <div class=" col-lg-4 col-md-6 item">
                    <div class="card shadow-lg border-none" >
                        <img src={require('../image/WEB_EVENT_BANNER-1696853942.jpg')} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p > <a class="fs-6 golden-color text-decoration-none fw-bold" >दुर्गदास जी खींची का 216 वां बलिदान दिवस</a></p>
                           <p > <i class="fa-sharp fa-solid fa-location-dot px-2 golden-color"></i>Mehrangarh Fort Jodhpur</p>
                           <p  ><i class="fa-solid fa-clock px-2 golden-color"></i>  2023-10-09</p>
                           <button class="text-white p-2 px-3 rounded-1 socialbtn" >Read More</button>
                        </div>
                      </div>
                  </div>
                   <div class=" col-lg-4 col-md-6 item">
                    <div class="card shadow-lg border-none" >
                        <img src={require('../image/janmasthami_event_banner_anmol-1694867535.webp')} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p > <a class="fs-6 golden-color text-decoration-none fw-bold" >Janmashtami Celebrations at Ashapurna Anmol</a></p>
                           <p > <i class="fa-sharp fa-solid fa-location-dot px-2 golden-color"></i>Adjacent New High Court, Jhalamand, Jodhpur</p>
                           <p  ><i class="fa-solid fa-clock px-2 golden-color"></i>  2023-07-09</p>
                           <button class="text-white p-2 px-3 rounded-1 socialbtn" >Read More</button>
                        </div>
                      </div>
                  </div>
                   <div class=" col-lg-4 col-md-6 item">
                    <div class="card shadow-lg border-none" >
                        <img src={require('../image/janmashtami_aangan_event_banner_(1)-1694868031.webp')} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <p > <a class="fs-6 golden-color text-decoration-none fw-bold" >Janmashtami Celebrations at Ashapurna Aangan</a></p>
                           <p > <i class="fa-sharp fa-solid fa-location-dot px-2 golden-color"></i>Behind Ummed Hotel,Banar Road, Jodhpur</p>
                           <p  ><i class="fa-solid fa-clock px-2 golden-color"></i>  2023-07-09</p>
                           <button class="text-white p-2 px-3 rounded-1 socialbtn" >Read More</button>
                        </div>
                      </div>
                  </div>
                   <div class=" col-lg-4 col-md-6 item">
                    <div class="card shadow-lg border-none" >
                        <img src={require('../image/janmashtami_basera__event_banner_(1)-1694868064.webp')} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p > <a class="fs-6 golden-color text-decoration-none fw-bold" >Janmashtami Celebrations at Ashapurna Basera</a></p>
                           <p > <i class="fa-sharp fa-solid fa-location-dot px-2 golden-color"></i>Pal Sangariya Link Road, DPS Circle, Jodhpur</p>
                           <p  ><i class="fa-solid fa-clock px-2 golden-color"></i>  2023-07-09</p>
                           <button class="text-white p-2 px-3 rounded-1 socialbtn" >Read More</button>
                        </div>
                      </div>
                  
                </div>
                <div class=" col-lg-4 col-md-6 item">
                    <div class="card shadow-lg border-none" >
                        <img src={require('../image/heritage_event_web_banner-1694867994.webp')} class="card-img-top" alt="heritage_event_webimg"/>
                        <div class="card-body">
                          <p > <a class="fs-6 golden-color text-decoration-none fw-bold" >Janmashtami Celebrations at Ashapurna..</a></p>
                           <p > <i class="fa-sharp fa-solid fa-location-dot px-2 golden-color"></i>Basni Benda Village, Airport Road, Jodhpur</p>
                           <p  ><i class="fa-solid fa-clock px-2 golden-color"></i>  2023-09-06</p>
                           <button class="text-white p-2 px-3 rounded-1 socialbtn" >Read More</button>
                        </div>
                      </div>
                  
                </div>

                <div class=" col-lg-4 col-md-6 item">
                    <div class="card shadow-lg border-none" >
                        <img src="image/15aug-event-ashapurna-thumbnail-1692611739.webp" class="card-img-top" alt="15augimg"/>
                        <div class="card-body">
                          <p > <a class="fs-6 golden-color text-decoration-none fw-bold" >77th Independence Day Celebrations</a></p>
                           <p > <i class="fa-sharp fa-solid fa-location-dot px-2 golden-color"></i>Ashapurna Buildcon Corporate Office, Jodhpur</p>
                           <p  ><i class="fa-solid fa-clock px-2 golden-color"></i>  2023-08-15</p>
                           <p>77 Years of Progress, Unity, and Freedom!</p>
                           <button class="text-white p-2 px-3 rounded-1 socialbtn" >Read More</button>
                        </div>
                      </div>
                  
                </div>

                <div class=" col-lg-4 col-md-6 item">
                    <div class="card shadow-lg border-none" >
                        <img src="image/buyers-event-nri-thumbnail-1692611014.webp" class="card-img-top" alt="buyersevebtimg"/>
                        <div class="card-body">
                          <p > <a class="fs-6 golden-color text-decoration-none fw-bold" >Ashapurna NRI's Buyers' Appreciation Event</a></p>
                           <p > <i class="fa-sharp fa-solid fa-location-dot px-2 golden-color"></i>Ashapurna NRI Township, Main Jodhpur-Pali Highway, Jodhpur</p>
                           <p  ><i class="fa-solid fa-clock px-2 golden-color"></i>  2023-08-13</p>
                           <p>A Night to Remember at Ashapurna NRI!</p>
                           <button class="text-white p-2 px-3 rounded-1 socialbtn" >Read More</button>
                        </div>
                      </div>
                  
                </div>

                <div class=" col-lg-4 col-md-6 item">
                    <div class="card shadow-lg border-none" >
                        <img src="image/aangan-sundarkaand-path-2023-thumbnail-1692000562.webp" class="card-img-top" alt="buyersevebtimg"/>
                        <div class="card-body">
                          <p > <a class="fs-6 golden-color text-decoration-none fw-bold" >आशापूर्णा आंगन में एक अद्वितीय सुंदरकांड पाठ कार्यक्रम.. </a></p>
                           <p > <i class="fa-sharp fa-solid fa-location-dot px-2 golden-color"></i>Ashapurna Aangan, Nandri-Banar Road, Jodhpur</p>
                           <p  ><i class="fa-solid fa-clock px-2 golden-color"></i>  2023-08-12</p>
                           <p>12 अगस्त को हमने आशापूर्णा आंगन में एक अद्वितीय सुंदरकांड पाठ कार्यक्रम का आयोजन किया</p>
                           <button class="text-white p-2 px-3 rounded-1 socialbtn" >Read More</button>
                        </div>
                      </div>
                  
                </div>


                <div class=" col-lg-4 col-md-6 item">
                    <div class="card shadow-lg border-none" >
                        <img src="image/bhoomi_pujan_media_thumbnail_15_JUNE_(1)-1687004931.webp" class="card-img-top" alt="buyersevebtimg"/>
                        <div class="card-body">
                          <p > <a class="fs-6 golden-color text-decoration-none fw-bold" >Auspicious Beginnings: Bhoomi Pujan Ceremo.. </a></p>
                           <p > <i class="fa-sharp fa-solid fa-location-dot px-2 golden-color"></i>Jodhpur, RJ, India </p>
                           <p  ><i class="fa-solid fa-clock px-2 golden-color"></i>  2023-06-12</p>
                           <p>We are thrilled to announce the successful completion of the Bhoomi Pujan Ceremony...</p>
                           <button class="text-white p-2 px-3 rounded-1 socialbtn" >Read More</button>
                        </div>
                      </div>
                  
                </div>

                <div class=" col-lg-4 col-md-6 item">
                    <div class="card shadow-lg border-none" >
                        <img src="image/drs_meet_website_thumbnail-1686736782.webp" class="card-img-top" alt="buyersevebtimg"/>
                        <div class="card-body">
                          <p > <a class="fs-6 golden-color text-decoration-none fw-bold" >Doctor's Meet held by Ashapurna Buildcon </a></p>
                           <p > <i class="fa-sharp fa-solid fa-location-dot px-2 golden-color"></i>Ashapurna Heritage, Jodhpur</p>
                           <p  ><i class="fa-solid fa-clock px-2 golden-color"></i>  2023-08-11</p>
                           <p>Ashapurna Buildcon Limited arranged an event for Doctors from all around Jodhpur.</p>
                           <button class="text-white p-2 px-3 rounded-1 socialbtn" >Read More</button>
                        </div>
                      </div>
                  
                </div>

                <div class=" col-lg-4 col-md-6 item">
                    <div class="card shadow-lg border-none" >
                        <img src="image/AWARD_NRI-1684755041.jpg" class="card-img-top" alt="buyersevebtimg"/>
                        <div class="card-body">
                          <p > <a class="fs-6 golden-color text-decoration-none fw-bold" >Best Project of the Year goes to ASHAPURNA N..</a></p>
                           <p > <i class="fa-sharp fa-solid fa-location-dot px-2 golden-color"></i>Pune, Maharashtra, India</p>
                           <p  ><i class="fa-solid fa-clock px-2 golden-color"></i>  2023-05-19</p>
                           <p>Ashapurna NRI, a visionary real estate project, has been honoured as the</p>
                           <button class="text-white p-2 px-3 rounded-1 socialbtn" >Read More</button>
                        </div>
                      </div>
                  
                </div>

                <div class=" col-lg-4 col-md-6 item">
                    <div class="card shadow-lg border-none" >
                        <img src="image/rajasthan-gaurav-award-to-karan-singh-uchiyarda-1682576516.webp" class="card-img-top" alt=""/>
                        <div class="card-body">
                          <p > <a class="fs-6 golden-color text-decoration-none fw-bold" >आशापूर्णा बिल्डकॉन लिमिटेड के सीएमडी श्री करन सिंह </a></p>
                           <p > <i class="fa-sharp fa-solid fa-location-dot px-2 golden-color"></i>Jaipur, RJ, India</p>
                           <p  ><i class="fa-solid fa-clock px-2 golden-color"></i>  2023-04-04</p>
                           <p>संस्कृति युवा संस्थान द्वारा श्री करन सिंह उचियारड़ा (सीएमडी - आशापूर्णा बिल्डकॉन लिमिटेड) को "राजस्थान गौरव पद" से सम्मानि</p>
                           <button class="text-white p-2 px-3 rounded-1 socialbtn" >Read More</button>
                        </div>
                      </div>
                  
                </div>

                <div class=" col-lg-4 col-md-6  item">
                    <div class="card shadow-lg border-none" >
                        <img src="image/appraisal-event-ashapurna-1682586158.webp" class="card-img-top" alt=""/>
                        <div class="card-body">
                          <p > <a class="fs-6 golden-color text-decoration-none fw-bold" >Appraisal Event 2023 | Ashapurna Buildcon Li</a></p>
                           <p > <i class="fa-sharp fa-solid fa-location-dot px-2 golden-color"></i>HO, Circuit House Road, Ratanada, Jodhpur </p>
                           <p  ><i class="fa-solid fa-clock px-2 golden-color"></i>  2023-04-08</p>
                           <p>Glimpse of Appraisal Event 2023</p>
                           <button class="text-white p-2 px-3 rounded-1 socialbtn" >Read More</button>
                        </div>
                      </div>
                  
                </div>

                <div class=" col-lg-4 col-md-6 item">
                    <div class="card shadow-lg border-none" >
                        <img src="image/ashapurna-nri-site-office-inauguration--1682577988.webp" class="card-img-top" alt="buyersevebtimg"/>
                        <div class="card-body">
                          <p > <a class="fs-6 golden-color text-decoration-none fw-bold" >Ashapurna NRI site office inauguration </a></p>
                           <p > <i class="fa-sharp fa-solid fa-location-dot px-2 golden-color"></i>Ashapurna NRI, Main Jodhpur-Pali Highway</p>
                           <p  ><i class="fa-solid fa-clock px-2 golden-color"></i>  2023-02-11</p>
                           <p>It was a good evening spent at the Ashapurna NRI site office inauguration, on Saturday. The event marked the</p>
                           <button class="text-white p-2 px-3 rounded-1 socialbtn" >Read More</button>
                        </div>
                      </div>
                  
                </div> */}

            {/* <!-- </section> --> */}

        </div>
          
    </div>
</div>
<Footer/>
    </>
  )
}
