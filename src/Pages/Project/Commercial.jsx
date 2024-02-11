import React from 'react'
import Header from '../../Component/Header';
import '../../Pages/Pages.css'
import { Link } from 'react-router-dom';

export default function Commercial() {
  return (
    <>
        <Header/>
        <div className="container-fluid  aboutbgimg">
                <div className="container bgheading ">
                    <div className="text-white fs-5 fw-medium ">HOME / PROJECTS</div>
                    <div className="golden-color mb-2 fs-2 fw-bold">Ashapurna Projects</div>
                </div>
        </div>
        <div className="container-fluid mt-5">
                <div className="conatiner">
                    <div className="row text-center">
                        <h2 className="fw-bold">Commercial Projects</h2>
                    </div>
               
                    <div class="projects-nav py-lg-3"><ul class="list-unstyled text-center">
                        <li class="mb-lg-3 mx-2 d-inline-block">
                            <Link class="text-decoration-none text-color d-flex align-items-center px-2 fs-15 " to={'/Residential'}>Residential</Link>
                        </li>
                        <li class="mb-lg-3 mx-2 d-inline-block">
                            <Link class="text-decoration-none text-color d-flex align-items-center px-2 fs-15 " to={'/Commercial'}>Commercial</Link>
                        </li>
                        <li class="mb-lg-3 mx-2 d-inline-block">
                            <Link class="text-decoration-none text-color d-flex align-items-center px-2 fs-15 " href="/hospitality">Hospitality</Link>
                        </li>
                        <li class="mb-lg-3 mx-2 d-inline-block">
                            <Link class="text-decoration-none text-color d-flex align-items-center px-2 fs-15 " href="/education">Education</Link>
                        </li>
                    </ul>
                    </div>
                    <div>
                    <div className='container'>
                        <div class="row my-4 ">
                          
                                    <div class="col-4 ">
                                <div class="projectblockinner shadow-lg position-relative">
                                    <div class=" rounded-1 projectimage2 position-relative">
                                        <img src={require('../../image/ashapurna-mall-1682073902.webp')}
                                            class="img-fluid rounded-1" alt="premium-budget-image" />
                                    </div>
                                    <div class="projectimageheading2 bg-primary bg-white p-2 rounded-1 shadow d-block ">

                                        <div class="d-flex"><img src={require('../../image/alllogo.png')} style={{ width: "35px" }} alt="" />
                                            <h6 class="mx-2 ">Ashapurna Mall</h6>
                                        </div>
                                        <div class="">
                                            <p class="mb-0"><i class="fa-solid fa-location-dot"></i> Near new high
                                                court,Jodhpur</p>
                                            <div class="d-flex text-start ">
                                                <p class="pe-5 projectbottom"> <i class="fa-solid fa-house-chimney"></i>
                                                    possession soon</p>
                                                <button class="projectinnerbtn projectbottom">see all</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4 ">
                                <div class="projectblockinner shadow-lg position-relative">
                                    <div class=" rounded-1 projectimage2 position-relative">
                                        <img src={require('../../image/ashapurna-mall-1682073902.webp')}
                                            class="img-fluid rounded-1" alt="premium-budget-image" />
                                    </div>
                                    <div class="projectimageheading2 bg-primary bg-white p-2 rounded-1 shadow d-block ">

                                        <div class="d-flex"><img src={require('../../image/alllogo.png')} style={{ width: "35px" }} alt="" />
                                            <h6 class="mx-2 ">Ashapurna Mall</h6>
                                        </div>
                                        <div class="">
                                            <p class="mb-0"><i class="fa-solid fa-location-dot"></i> Near new high
                                                court,Jodhpur</p>
                                            <div class="d-flex text-start ">
                                                <p class="pe-5 projectbottom"> <i class="fa-solid fa-house-chimney"></i>
                                                    possession soon</p>
                                                <button class="projectinnerbtn projectbottom">see all</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4 ">
                                <div class="projectblockinner shadow-lg position-relative">
                                    <div class=" rounded-1 projectimage2 position-relative">
                                        <img src={require('../../image/ashapurna-corporate-office-thumbnail-1682581068.webp')}
                                            class="img-fluid rounded-1" alt="premium-budget-image" />
                                    </div>
                                    <div class="projectimageheading2 bg-primary bg-white p-2 rounded-1 shadow d-block ">

                                        <div class="d-flex"><img src={require('../../image/alllogo.png')} style={{ width: "35px" }} alt="" />
                                            <h6 class="mx-2 ">Ashapurna Mall</h6>
                                        </div>
                                        <div class="">
                                            <p class="mb-0"><i class="fa-solid fa-location-dot"></i> Near new high
                                                court,Jodhpur</p>
                                            <div class="d-flex text-start ">
                                                <p class="pe-5 projectbottom"> <i class="fa-solid fa-house-chimney"></i>
                                                    possession soon</p>
                                                <button class="projectinnerbtn projectbottom">see all</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                              
                            




                        </div>
                        {/* sec row */}
                        <div class="row my-5 ">
                          
                          <div class="col-4 ">
                      <div class="projectblockinner shadow-lg position-relative">
                          <div class=" rounded-1 projectimage2 position-relative">
                              <img src={require('../../image/ashapurna-basera-flats-in-jodhpur-1682081467.webp')}
                                  class="img-fluid rounded-1" alt="premium-budget-image" />
                          </div>
                          <div class="projectimageheading2 bg-primary bg-white p-2 rounded-1 shadow d-block ">

                              <div class="d-flex"><img src={require('../../image/alllogo.png')} style={{ width: "35px" }} alt="" />
                                  <h6 class="mx-2 ">Ashapurna Mall</h6>
                              </div>
                              <div class="">
                                  <p class="mb-0"><i class="fa-solid fa-location-dot"></i> Near new high
                                      court,Jodhpur</p>
                                  <div class="d-flex text-start ">
                                      <p class="pe-5 projectbottom"> <i class="fa-solid fa-house-chimney"></i>
                                          possession soon</p>
                                      <button class="projectinnerbtn projectbottom">see all</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-4 ">
                      <div class="projectblockinner shadow-lg position-relative">
                          <div class=" rounded-1 projectimage2 position-relative">
                              <img src={require('../../image/ashapurna-mall-1682073902.webp')}
                                  class="img-fluid rounded-1" alt="premium-budget-image" />
                          </div>
                          <div class="projectimageheading2 bg-primary bg-white p-2 rounded-1 shadow d-block ">

                              <div class="d-flex"><img src={require('../../image/alllogo.png')} style={{ width: "35px" }} alt="" />
                                  <h6 class="mx-2 ">Ashapurna Mall</h6>
                              </div>
                              <div class="">
                                  <p class="mb-0"><i class="fa-solid fa-location-dot"></i> Near new high
                                      court,Jodhpur</p>
                                  <div class="d-flex text-start ">
                                      <p class="pe-5 projectbottom"> <i class="fa-solid fa-house-chimney"></i>
                                          possession soon</p>
                                      <button class="projectinnerbtn projectbottom">see all</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-4 ">
                      <div class="projectblockinner shadow-lg position-relative">
                          <div class=" rounded-1 projectimage2 position-relative">
                              <img src={require('../../image/ashapurna-empire-flats-in-jaipur-1681995100.webp')}
                                  class="img-fluid rounded-1" alt="premium-budget-image" />
                          </div>
                          <div class="projectimageheading2 bg-primary bg-white p-2 rounded-1 shadow d-block ">

                              <div class="d-flex"><img src={require('../../image/alllogo.png')} style={{ width: "35px" }} alt="" />
                                  <h6 class="mx-2 ">Ashapurna Mall</h6>
                              </div>
                              <div class="">
                                  <p class="mb-0"><i class="fa-solid fa-location-dot"></i> Near new high
                                      court,Jodhpur</p>
                                  <div class="d-flex text-start ">
                                      <p class="pe-5 projectbottom"> <i class="fa-solid fa-house-chimney"></i>
                                          possession soon</p>
                                      <button class="projectinnerbtn projectbottom">see all</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                    
                  




              </div>
                    </div>

                    </div>
                </div>
            </div>

    </>
  )
}
