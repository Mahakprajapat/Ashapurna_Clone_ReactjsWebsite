import React, { useEffect, useState } from 'react'
import Header from '../Component/Header';
import '../Pages/Pages.css';
import Footer from '../Component/Footer';
import axios, { toFormData } from 'axios';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

export default function Contactus() {
    let [userlist,setuserlist] = useState([])
    let [userform,setuserfrom]= useState({
        name:'',
        email:'',
        mobile:'',
        password:'',
        id:''
    })
    let handleSubmit=(event)=>{
        let name = userform.name;
        let email = userform.email;
        let mobile = userform.mobile;
        let password = userform.password;

        let userData = {name,email,mobile,password}
        axios.post('https://raipradeep.in/form-api/saveUser.php', toFormData(userData))
        .then((res)=>res.data)
        .then((finalRes)=>{
            console.log(finalRes)
            // getUser();
            setuserfrom({
                name:'',
                email:'',
                mobile:'',
                password:'',
                id:''
            })
            NotificationManager.success('Data saved')
        })

    }

    let getValue=(event)=>{
        let inputName = event.target.name;
        let finalObj={...userform}
        finalObj[inputName]=event.target.value;
        setuserfrom(finalObj)
    } 
    let getUser=()=>{
        axios.get('https://raipradeep.in/form-api/viewUser.php')
        .then((res)=>res.data)
        .then((finalres)=>{
            setuserlist(finalres.dataList)
        })
    }
    
    // let DeleteRow=(id)=>{
    //     axios.get(`https://raipradeep.in/form-api/deleteUser.php?enid=${id}`)
    //     .then((res)=>{
    //         getUser();
    //     })
    // }
    
    // let editRow=(id)=>{
    //     axios.get(`https://raipradeep.in/form-api/viewUser.php?editId=${id}`)
    //     .then((res)=>{
    //         console.log(res.data.dataList)
    //         setuserfrom({
    //             name:res.data.dataList.en_name,
    //             email:res.data.dataList.en_email,
    //             mobile:res.data.dataList.en_contact,
    //             password:res.data.dataList.en_password,
    //             id:id
    //         })
    //     })
    // }

    useEffect(()=>{
        getUser();
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
                    <div className="text-white fs-5 fw-medium ">HOME / CONTACT US</div>
                    <div className="golden-color mb-2 fs-2 fw-bold">Contact Us</div>
                </div>
            </div>
            {/* <!-- Ashapurna Team --> */}
<div className="container-fluid my-5">
    <div className="conatiner  ">
        <div className="row text-center">
            <h2 className="fw-semibold">Get In Touch</h2>
            <p>To request a quote, contact us directly or fill out the form and we will get back to you promptly.</p>
        </div>
        <div className="row">
            <div className="col-4  ">
                
                <div className=" mt-2 p-2 contactcol rounded-1 d-flex">
                    <div className="text-white mt-1 py-4 px-3"><svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg></div>
                    <div>
                        <div className="text-black fw-semibold mt-1 fs-4 py-1 px-1">Email</div>
                    <div className="text-white mt-1 fs-6 px-1">marketing@ashapurna.com</div>
                    </div>
                    
                </div>
            </div>
            <div className="col-4">
                <div className=" mt-2 p-2 contactcol rounded-1 d-flex">
                    <div className="text-white mt-1 py-4 px-3"><svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg></div>
                    <div>
                        <div className="text-black fw-semibold mt-1 fs-4 py-1 px-1">Address</div>
                    <div className="text-white mt-1 fs-6 px-1">4A, EAST PATEL NAGAR, CIRCUIT HOUSE ROAD, OPPOSITE LIC OFFICE, Jodhpur, Rajasthan, 342011</div>
                    </div>
                    
                </div>

            </div>
            <div className="col-4">
                <div className=" mt-2 p-2 contactcol rounded-1 d-flex">
                    <div className="text-white mt-1 py-4 px-3"><svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg></div>
                    <div>
                        <div className="text-black fw-semibold mt-1 fs-4 py-1 px-1">Support</div>
                    <div className="text-white mt-1 fs-6 px-1">9314041747, 0291-2514747, 9610383747</div>
                    </div>
                    
                </div>

            </div>
        </div>
        
          
    </div>
</div>    
<div className="container-fluid">
    <div className="container">
        <div className="row my-3">
            <div className="col-6">
                <h3>Find US On Map</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.486915048059!2d73.03463707514804!3d26.27831078706612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3941f34ed8648e03%3A0x35b840646df082cc!2sAshapurna%20Buildcon%20Ltd%20Corporate%20office!5e0!3m2!1sen!2sin!4v1697636877481!5m2!1sen!2sin" style={{width:600,height:450,border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='map'></iframe>
            </div>
            <div className="col-6">
                <div className=" nriform rounded-1 shadow-sm">
                    <span className="text-uppercase subtitle position-relative mt-3 ms-4 mb-2 pe-3">Write to us!</span>

                    <h3 className="mt-3 ms-4">Login to Us</h3>
                    
    
                    <div className="containerform">
                      <form action="" id="contactForm2" onSubmit={handleSubmit}>
                       
                        <input type="text" id="name" name="name" placeholder="Your first name.." value={userform.name} onChange={getValue}/>
     
                        <input type="email" id="email" name="email" placeholder="Your email.."  value={userform.email} onChange={getValue} />

                        <input type="text" id="mobile" name="mobile" placeholder="Your phone.." value={userform.mobile} onChange={getValue} />
                         
                        <input type="text" id="password" name="password" placeholder="password" value={userform.password} onChange={getValue} />
                        
                        <button type="submit"
                                    className="text-uppercase enquiryBtn rounded-1 mt-2 ms-4 btn golden-color fw-500 text-white" value={userform.id=="" ? "submit" : "update" } >Submit</button>
                        {/* <input type="submit" value="Submit" className="golden-color " /> */}
                        
                      </form>

                    </div>
    
                </div>
                {/* table for the curd operation */}
                {/* <table className="table border table-striped table-dark my-5 container">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">mobile</th>
                        <th scop="col">password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userlist.length > 0 ?
                            userlist.map((user, i) => {
                                return (
                                    <tr>
                                        <td scope="col">{user.en_id}</td>
                                        <td scope="col">{user.en_name}</td>
                                        <td scope="col">{user.en_email}</td>
                                        <td scope="col">{user.en_contact}</td>
                                        <td scop="col">{user.en_password}</td>
                                        <th><button onClick={()=>DeleteRow(user.en_id)} >Del</button><button onClick={()=>editRow(user.en_id)} >edit</button></th>

                                    </tr>
                                )
                            })
                            :
                            "no data"
                    }

                </tbody>
            </table> */}
            <NotificationContainer/>
            </div>
        </div>
    </div>
</div>
<Footer/>
    </>
  )
}
