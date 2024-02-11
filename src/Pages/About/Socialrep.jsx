import React from 'react'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'

export default function Socialrep() {
    return (
        <>
            <Header />
            <div class="circlearrow">
            <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512"><path d="M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4 .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z"/></svg>
            </div>
            {/* <!-- back-image --> */}
            <div className="container-fluid  aboutbgimg">
                <div className="container bgheading ">
                    <div className="text-white fs-5 fw-medium ">HOME / SOCIAL RESPONSIBILITY</div>
                    <div className="golden-color mb-2 fs-2 fw-bold">Social Responsibility</div>
                </div>
            </div>
            {/* <!-- Ashapurna Team --> */}
            <div className="container-fluid mt-5">
                <div className="conatiner">
                    <div className="row ">
                        <div className="col px-5"><span className="text-uppercase subtitle position-relative mb-2 pe-3">CSR</span></div>
                        <h2 className="fw-semibold px-5">Social Events</h2>
                        <p className="pt-3 px-5">Shri Karan Singh Uchiyarda with his zeal and enthusiasm to work for social upliftment of poor people has established a trust named as ‘Shree Magmohan Charitable Trust’, with the association of Ashapurna Buildcon Ltd. works for the welfare of General public by organizing medical camps, social events like large scale marriage functions, Housing and other donations to poor and needy people, charitable activities etc.</p>
                        <p className="pt-1 px-5">In Jan -2011 Many families suffered due to illicit liquor tragedy and No. of families ruined because death of young families members. Ashapurna Decided to help out some of poorest families and help them morally and monetary on 28 Aug 2011 in the presence of Honorable M.P (Pali) Sh. Badhri Ram Jakhar.</p>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="container-fluid">
                <div className="conatiner mt-5">
                    <div className="row px-4">
                        <div className="col-6">
                            <span className="text-uppercase subtitle position-relative mb-2 pe-3">BY SHRI KARAN SINGH UCHIYARDA</span>
                            <h2>Donated 5 VIllas In Uchiayrda</h2>
                            <p className="pt-2">Shri Karan Singh Uchiyarda (Chairman and Managing Director of Ashapurna Buildcon ltd.) and businessman Mr. Arjun Singh Uchiyarda Uchiyarda has decided to give free "Mohankutir" to 5 families in Uchiyarda village in the memory of his father Mohansingh Khinchi. Mr Karan Singh also said it was his father’s dream that nobody in Uchiyarda village should remain homeless. In Uchiyarda there are 5 families who didnn’t shelter for their livelihood, those 5 families are Beejaram Bheel, Gurdaram Bheel, Kesharam Bheel, Gordhan Bheel, and Kaluram Meghwal.</p>
                            <p>To complete father’s dream the houses names as MOHANKUTEER and their foundation are laid in the presence of all the 36 communities of the village. </p>
                            <p>During the foundation of houses, Mr Arjun Singh Uchiyarda, Malam singh, Hanwant singh, Kesar singh, Parbat singh, Jitendra singh, Gaj singh, Bhawani singh, Lun singh, Chandan Singh, Hariram prajapar and Bhakar ram dewasi were present.</p>
                        </div>
                        <div className="col-6 border csrdiv " >
                            <img src={require('../../image/CSR-1676448221.jpg')} alt="csrimg" className="img-fluid mt-4 csrimage" />
                        </div>
                    </div>

                    <div className="row mt-5 px-4">
                        <div className="col-6 border csrdiv " >
                            <img src={require('../../image/gifting_bunglow.webp')} alt="bunglowimg" className="img-fluid mt-4 csrimage" />
                        </div>
                        <div className="col-6 mt-5">
                            <span className="text-uppercase subtitle position-relative mb-2 pe-3">BY SMT. PRATHIBA DEVI SINGH PATIL</span>
                            <h2>Gifting Bungalow To Widow</h2>
                            <p>Her Excellency Smt. Pratibha Devi Singh Patil, the then Governor of Rajasthan and later the Honourable President of India, was there during the gifting of a bungalow to a widow at Ashapurna City on 7th Feb 2007. Commenting on the occasion she said “Everbody wants to earn money but only a few execute their social responsibility well. There are many great people but there are very few good people. Karan Singh, you are both good and great. An invaluable compliment of a lifetime.</p>
                        </div>
                    </div>

                    <div className="row px-4 mt-5">
                        <div className="col-6 mt-5">
                            <span className="text-uppercase subtitle position-relative mb-2 pe-3">FLAT HANDING OVER</span>
                            <h2>Samajik Sarokar</h2>
                            <p className="pt-2">On 8th Dec 2010, Shri Digvijay Singh, General secratery, Congress and past CM of Madhya Pradesh, handed over the keys of a 2 BHK flat in Ashapurna Valley to a poor lady who lost her family members in Mehrangarh Temple rampage in Jodhpur</p>

                        </div>
                        <div className="col-6 border csrdiv  " >
                            <img src={require('../../image/samajik_sarokar.webp')} alt="samajikimg" className="img-fluid mt-4 csrimage" />
                        </div>
                    </div>

                    <div className="row mt-5 px-4">
                        <div className="col-6 border csrdiv " >
                            <img src={require('../../image/covid19.webp')} alt="covidimg" className="img-fluid mt-4 csrimage" />
                        </div>
                        <div className="col-6 mt-5">
                            <span className="text-uppercase subtitle position-relative mb-2 pe-3">BATTLE AGAINST CORONA</span>
                            <h2>COVID-19 Relief</h2>
                            <p>While the world was battling COVID-19 pandemic issue, Ashapurna Buildcon stood in solidarity with the nation. During the COVID-19 pandemic, Magmohan Charitable Trust stood in solidarity with the nation and served society with all its might. Apart from establishing a much needed oxygen plant during the lockdown, the trust served more than 75,000 food packets in Uchiyarda during the tough lockdown times and donated 11,11,111 to the Chief Minister Relief Fund. Special quarantine facilities were arranged at 4 star Ashapurna Hotel with 80 beds and 200 beds at Architectural collage Buddha Group, Udaipur during covid-19 epidemic.</p>
                        </div>
                    </div>


                    <div className="row px-4 my-5">
                        <div className="col-6 mt-5">
                            <span className="text-uppercase subtitle position-relative mb-2 pe-3">DONATE BLOOD SAVE LIVES</span>
                            <h2>Blood Donation Camp</h2>
                            <p className="pt-2">Ashapurna Buildcon Limiteds CMD Karan Singh Uchiyarda has urged people from all walks of life to donate blood and save lives. As part of CSR service activities, he inaugurated a blood donation camp in the Ashapurna Enclave.</p>

                        </div>
                        <div className="col-6 border csrdiv " >
                            <img src={require('../../image/blood_donation.webp')} alt="blood_donationimg" className="img-fluid mt-4 csrimage" />
                        </div>
                    </div>
                    {/* <!-- condivend --> */}
                </div>
            </div>
            {/* <!-- Social Updates --> */}
            <div className="container-fluid">
                <div className="conatiner">
                    <div className="row text-center">
                        <h2 className="fw-bold">Social Updates</h2>
                    </div>
                    <div className="row">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col-lg-4 col-md-6">
                                <div className="card h-100 ">
                                    <div className="p-2 m-1 socialdiv">
                                        <img src={require('../../image/blanket_distribution.webp')} className="card-img-top socialimg" alt="..." />
                                    </div>

                                    <div className="card-body bg-light">
                                        <h5 className="card-title">Blanket Distribution</h5>
                                        <p className="golden-color">#By Director of Ashapurna</p>
                                        <p className="card-text">On 21st december 2021, Ashapurna group director Shri Harshwardhan Singh distributed blankets and food to the....</p>
                                        <button className="text-white p-2 px-3 rounded-1 socialbtn">Read More</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card h-100">
                                    <div className=" p-2 m-1 socialdiv">
                                        <img src={require('../../image/food_distribution.webp')} className="card-img-top socialimg" alt="..." />
                                    </div>

                                    <div className="card-body bg-light">
                                        <h5 className="card-title">Blanket And Food Distribution</h5>
                                        <p className="golden-color">#Ashapurna Apna Ghar</p>
                                        <p className="card-text">To include the less priviliged people as part of the 25th anniversary celebration, Ashapurna distributed blankets</p>
                                        <button className="text-white p-2 px-3 rounded-1 socialbtn">Read More</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card h-100">
                                    <div className="p-2 m-1  socialdiv" >
                                        <img src={require('../../image/housing_problem_seminar.webp')} className="card-img-top socialimg" alt="..." />
                                    </div>

                                    <div className="card-body bg-light">
                                        <h5 className="card-title">Seminar On Housing Problems</h5>
                                        <p className="golden-color">#Samajik Sarokar of Ashapurna</p>
                                        <p className="card-text">Addressing the housing problem issues, Ashapurna Group organised a seminar on housing problems. Various issues...</p>
                                        <button className="text-white p-2 px-3 rounded-1 socialbtn">Read More</button>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- </div>
        </div> -->
        <!-- 2 -->
        <!-- <div className="row mt-3">
            <div className="row row-cols-1 row-cols-md-3 g-4"> --> */}

                            <div className="col-lg-4 col-md-6">
                                <div className="card h-100 ">
                                    <div className="p-2 m-1 socialdiv">
                                        <img src={require('../../image/labour_housing.webp')} className="card-img-top socialimg" alt="..." />
                                    </div>

                                    <div className="card-body bg-light">
                                        <h5 className="card-title">Seminar Labour Housing Solution</h5>
                                        <p className="golden-color">#Industrialist and Builders</p>
                                        <p className="card-text">Addressing the housing problem issues, Ashapurna Group organised a seminar on housing problems. Various issues...</p>
                                        <button className="text-white p-2 px-3 rounded-1 socialbtn">Read More</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card h-100">
                                    <div className=" p-2 m-1 socialdiv">
                                        <img src={require('../../image/widow_scheme.webp')} className="card-img-top socialimg" alt="..." />
                                    </div>

                                    <div className="card-body bg-light">
                                        <h5 className="card-title">Widow Free Flat Scheme</h5>
                                        <p className="golden-color">#Samajik Sarokar OF Ashapurna</p>
                                        <p className="card-text">On the auspicious occasion of Basera Bhoomi Pujan, Ashapurna Group’s CSR wing Shree Mag Mohan Charitable..</p>
                                        <button className="text-white p-2 px-3 rounded-1 socialbtn">Read More</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card h-100">
                                    <div className="p-2 m-1  socialdiv" >
                                        <img src={require('../../image/awarding_residence.webp')} className="card-img-top socialimg" alt="..." />
                                    </div>

                                    <div className="card-body bg-light">
                                        <h5 className="card-title">Awarding Residence</h5>
                                        <p className="golden-color">#Under VMAY 2019</p>
                                        <p className="card-text">The programme was presided over by Honourable Shri Govind Mathur, former Chief Justice, Allahabad High Court...</p>
                                        <button className="text-white p-2 px-3 rounded-1 socialbtn">Read More</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>




                    {/* <!-- 2 --> */}
                </div>
            </div>
            <Footer />
        </>
    )
}
