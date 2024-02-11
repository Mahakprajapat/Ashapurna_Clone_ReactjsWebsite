import React from 'react'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'

export default function Managment() {
    return (
        <>
            <Header />
            <div class="circlearrow">
            <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512"><path d="M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4 .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z"/></svg>
            </div>
            {/* <!-- back-image --> */}

            <div className="container-fluid  aboutbgimg">
                <div className="container bgheading ">
                    <div className="text-white fs-5 fw-medium ">HOME / MANAGEMENT SPEAKS</div>
                    <div className="golden-color mb-2 fs-2 fw-bold">OUR MANAGEMENT</div>
                </div>
            </div>
            {/* <!-- Board Of Directors section --> */}
            
<div className="container-fluid">
    <div className="conatiner my-5">
        <div className="row text-center"> <h1 className="fw-semibold">Board Of Directors</h1></div>
        <p className="px-5 pt-3">Ashapurna Group is a socially responsible company. The group is active in almost all spheres of society and works on the ground level to bring about meaningful change. Ashapurna has worked in the fields of health, education, social awareness, and environment. During the challenging time of Covid, the group has worked hand in hand with government and non-government agencies. Ashapurna understands its responsibility and always strives hard to be with society in times of need.</p>
    </div>
    <div className="row  mb-5  ">
        <div className="col-lg-7 ">
            <div className="bg-light rounded-2 px-5 py-2">
                <span className="text-uppercase subtitle position-relative mb-2 pe-3">CMD</span>
                <h3 className="fw-bold pb-2 ">Shri Karan Singh Uchiyarda</h3>
                <p>Ashapurna Buildcon Ltd. was envisaged and founded by Shri Karan Singh Uchiyarda a visionary with crystal clear foresight and blessed with a strong sense of business acumen. Karan Singh Uchiyarda is a practical man and with his sharp visualization has set forth an enviable legacy. “There is a certain divinity that shapes all ends”. His past projects have all been very well accepted. Every project speaks the shining story itself. The mission statement of the company is “WHERE DREAMS MEET REALITY”.. Ashapurna always tries for the best quality housing at a minimum and reasonable cost which otherwise may not be possible if a customer builds his own house. Shri Karan Singh Uchiyarda with his</p>
                 <button type="button" className=" text-white footercolor rounded-1 py-2 px-3 " data-bs-toggle="modal" data-bs-target="#exampleModal"> Read More </button>
                 <div className="text-end"><img src={require('../../image/quotes.png')} alt="quotesimg" /></div>
            </div>
        </div>
        <div className="col-lg-5 ">
            <img src={require('../../image/6e449cbb-2eb8-4888-b0d6-bd7d77d8f039-1669299130.jpg')} alt="CMD image" className="directorimg"/>
        </div>
    </div>
    {/* <!-- 2 --> */}
    <div className="row  mb-5">
        <div className="col-lg-5 ">
            <img src={require('../../image/c28d2e5b-7f72-4378-9421-ad2cb6099f77-1669299122.jpg')} alt="Director image" className="directorimg"/>
        </div>


        <div className="col-lg-7">
            <div className="bg-light rounded-2  px-5 py-2">
                <span className="text-uppercase subtitle position-relative mb-2 pe-3">DIRECTOR</span>
                <h3 className="fw-bold pb-2 ">Mr Harshvardhan Singh Uchiyarda</h3>
                <p>Regarding their surging success, the Director asserts, “I believe that achievements are what make us and define us and no achievement can be attained without the seed of a dream. Ashapurna Group is a perfect example of this vary philosophy. “Apart from this, he accredits the company’s commendable success to the blessings of their ‘Kuldevi’- Maa Ashapurna. She has been the prime motivation to name the organization as- ‘Ashapurna Buildcon’. As a sign of their utmost gratitude towards their adored goddess-the group always ensures to establish a small temple for her at every project they establish. Being the changing face of Ashapurna Group, Harshvardhan Singh Uchiyarda is leading the</p>
                 <button type="button" className=" text-white footercolor rounded-1 py-2 px-3 " data-bs-toggle="modal" data-bs-target="#exampleModal2"> Read More </button>
                 <div className="text-end"><img src={require('../../image/quotes.png')} alt="quotesimg"/></div>
            </div>
        </div>
       
    </div>
</div>
<Footer/>

{/* <!-- modal --> */}
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable  modal-dialog-centered mt-5 p-5">
          <div className="modal-content">
            <div className="modal-header">
               
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Shri Karan Singh Uchiyarda
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body ">
                Ashapurna Buildcon Ltd. was envisaged and founded by Shri Karan Singh Uchiyarda a visionary with crystal clear foresight and blessed with a strong sense of business acumen. Karan Singh Uchiyarda is a practical man and with his sharp visualization has set forth an enviable legacy. “There is a certain divinity that shapes all ends”. His past projects have all been very well accepted. Every project speaks the shining story itself. The mission statement of the company is “WHERE DREAMS MEET REALITY”.. Ashapurna always tries for the best quality housing at a minimum and reasonable cost which otherwise may not be possible if a customer builds his own house. Shri Karan Singh Uchiyarda with his zeal and enthusiasm to work for the social upliftment of poor people has established a trust named ‘Shree Mag Mohan Charitable Trust’, which, with the association of Ashapurna Buildcon Ltd. works for the welfare of the general public by organizing medical camps, social events like large scale marriage functions, housing and other donations to poor and needy people, charitable activities etc. Ashapurna has the best talents on its staff rolls. It also has its self-integrated modern state-of-art infrastructure to support the manpower. Highly skilled intelligent architects have to date produced real wonders; their scintillating and stunning designs have captivated and awed many people in Rajasthan. Ashapurna has redefined the Building and Construction Business with unique modern designs and preserving the rich heritage and the traditional and cultural values of India. It is obvious to conclude that the group has in its humble way tried to enrich the quality of life and living standards of the people in general. For customers, Ashapurna Constructs has a wide range of requirements and offers the best suitable options.
            </div>
            
          </div>
        </div>
      </div>
      {/* <!-- modal-2 --> */}
      <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable  modal-dialog-centered mt-5 p-5">
          <div className="modal-content">
            <div className="modal-header">
               
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Mr Harshvardhan Singh Uchiyarda
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body ">
                Regarding their surging success, the Director asserts, “I believe that achievements are what make us and define us and no achievement can be attained without the seed of a dream. Ashapurna Group is a perfect example of this vary philosophy. “Apart from this, he accredits the company’s commendable success to the blessings of their ‘Kuldevi’- Maa Ashapurna. She has been the prime motivation to name the organization as- ‘Ashapurna Buildcon’. As a sign of their utmost gratitude towards their adored goddess-the group always ensures to establish a small temple for her at every project they establish. Being the changing face of Ashapurna Group, Harshvardhan Singh Uchiyarda is leading the Group by keeping technology at the forefront. The Team at Ashapurna Buildcon Limited has a mission to deliver the best workmanship, in both product and service, by maintaning the highest level of professionalism while dealing with employees and customers.
            </div>
            
          </div>
        </div>
      </div>
        </>
    )
}
