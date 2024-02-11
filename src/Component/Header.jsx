import React, { useState } from 'react'
import '../Component/Header.css'
import logo from '../image/ec33214d-e643-4f45-bbb8-50ee61b830ec-1673703981.webp'
import { NavLink, } from 'react-router-dom'
export default function Header() {
  
  return (
    <div>
         <div className="container-fluid bg-white position-sticky top-0 header">
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid ">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo" title='logoimg' />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav justify-content-end flex-grow-1 p-2 me-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <NavLink to={'/'} className="nav-link  " aria-current="page"     >Home</NavLink>
                        </li>
                        <li className="nav-item dropdown ">
                            <NavLink to={'/aboutus'} className="nav-link   ">
                                About Us
                            </NavLink>
                            <ul className="dropdown-menu menuborder">
                                <li><NavLink className="dropdown-item" to={'/aboutus'} >About us</NavLink></li>
                                <li><NavLink className="dropdown-item" to={'/Ourjourney'}>Our journey</NavLink></li>
                                <li><NavLink className="dropdown-item" to={ '/Managment' } >Management Speaks</NavLink></li>
                                <li><NavLink className="dropdown-item" to={'/Ourteam'}>Our team</NavLink></li>
                                <li><NavLink className="dropdown-item" to={'/Socialrep'} >CSR Social responsibility</NavLink></li>
                                <li><NavLink className="dropdown-item" to={'/Newsletter'} >Newsletter</NavLink></li>
                                <li><NavLink className="dropdown-item" to={'/Nri'}>NRI Corner</NavLink></li>
                                <li><NavLink className="dropdown-item" to={'/Jodhpurinvest'} >Why invest in Jodhpur</NavLink></li>
                                <li><a className="dropdown-item" href="#">Cororate Profile</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link  " href="#">
                                Projects
                            </a>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to={'/Residential'} >Residential</NavLink></li>
                                <li><NavLink className="dropdown-item" to={'/Commercial'}>Commercial</NavLink></li>
                                <li><NavLink className="dropdown-item" to={'/Rentallease'} >Rental & lease</NavLink></li>
                                <li><NavLink className="dropdown-item" to={'/Hospitality'}>Hospitality</NavLink></li>
                                <li><NavLink className="dropdown-item" to={'/Education'}>Education</NavLink></li>
                                <li><NavLink className="dropdown-item" to={'/Windmills'}>Windmills</NavLink></li>
                                <li><NavLink className="dropdown-item" to={'/NRI'}>NRI township</NavLink></li>
                                <li><NavLink className="dropdown-item" to={'/Upcoming'}>Upcoming projects</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/Mediaandevent'}>Media and Events</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to={'/blog'} >Blogs</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/Contactus'} >Contact Us</NavLink>
                        </li>
                        <button type="button"
                            className="text-uppercase enquiryBtn rounded-1 mt-0 ms-4 btn  fw-500 text-white">enquire</button>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    </div>
  )
}
