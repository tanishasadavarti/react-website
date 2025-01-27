import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";



const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
            <div className="col-12 d-flex mt-5">
                <div className="col-4 text-center ">
                    <img src="https://media6.ppl-media.com/mediafiles/ecomm/home/1499247950_secure-payment.jpg" alt="" />
                    < h5 className='fs-5 m-0 pt-3'>100% secure payments</h5>
                    <p>All major  credit & debit cards accepted.</p>
                </div>
                <div className="col-4 text-center ">
                    <img src="https://media6.ppl-media.com/mediafiles/ecomm/home/1499247975_beauty-assistant.jpg" alt="" />
                    <h5 className='fs-5 m-0 pt-3'>Beauty Assistant</h5>
                    <p>Tell me what you are looking for and i will work my magic to help you find your perfect match.</p>
                </div>
                <div className="col-4 text-center ">
                    <img src="https://media6.ppl-media.com/mediafiles/ecomm/home/1499247997_help-center.jpg" alt="" />
                    <h5 className='fs-5 m-0 pt-3'>Help Center</h5>
                    <p>Got a question? Look no further. Browse FAQs or submit your query.</p>
                </div>
            </div>
        </div>
      </div>

    <div className="spotlight mt-5 bg-light ">
        <div className="col-12 container d-flex text-center">
            <div className="col-6">
                <h4 className='mb-5 mt-5'>Spotlight</h4>
                <iframe src="https://player.vimeo.com/progressive_redirect/playback/897095146/rendition/720p/file.mp4?loc=external&signature=5cf8273eeb7f22232df8709ffa3554b346203d0703c3732541da162d44925089" frameborder="0" width={400} height={300}></iframe>
            </div>
            <div className="col-6"><h4 className='mb-5 mt-5'>Shop on the go</h4><img src="https://media6.ppl-media.com/mediafiles/ecomm/home/1703149844_download-app.jpg" alt="" /></div>
        </div>
    </div>

    <div className="container bg-light   p-5 mt-5">
        <div className='footertext '>
        <div className="text1 d-flex">
            <h6 className='col-2 m-0 p-0 text-secondary'>Discover:</h6>
            <p className='' > <a href="" className=' text-decoration-none ' >Nail Art/</a><a href="" className=' text-decoration-none' > Eye Makeup /</a><a href="" className=' text-decoration-none' > Bridal Makeup /</a><a href="" className=' text-decoration-none' >  How To Do Makeup /</a><a href="" className=' text-decoration-none' >  Pimples  /</a> <a href="" className=' text-decoration-none' >Stretchmark Removal /</a><a href="" className=' text-decoration-none' > Best Eye Creams /</a><a href="" className=' text-decoration-none' > Hairstyles / </a><a href="" className=' text-decoration-none' > Burgundy Hair Colors / </a><a href="" className=' text-decoration-none' > Best Facewashes For Men / </a><a href="" className=' text-decoration-none' > Best Perfumes For Men / </a><a href="" className=' text-decoration-none' > Skincare Tips </a></p>   
        </div>
        <div className="text1 d-flex">
            <h6 className='col-2 m-0 p-0 text-secondary'>SHOP MAKEUP:</h6>
            <p className=' ' > <a href="" className=' text-decoration-none ' >Lakme/</a><a href="" className=' text-decoration-none' >  Maybelline  /</a><a href="" className=' text-decoration-none' >  Colorbar  /</a><a href="" className=' text-decoration-none' >   L'oreal  /</a><a href="" className=' text-decoration-none' >  Revlon  /</a> <a href="" className=' text-decoration-none' > Avon  /</a><a href="" className=' text-decoration-none' >  Elle18  /</a></p>   
        </div>
        <div className="text1 d-flex">
            <h6 className='col-2 m-0 p-0 text-secondary'>SKIN CARE:</h6>
            <p className='' > <a href="" className=' text-decoration-none ' > Bio Oil /</a><a href="" className=' text-decoration-none' >  Olay  /</a><a href="" className=' text-decoration-none' >  Neutrogena  /</a><a href="" className=' text-decoration-none' >   Lotus Herbals  /</a><a href="" className=' text-decoration-none' >  VLCC  /</a> <a href="" className=' text-decoration-none' > Kaya  /</a><a href="" className=' text-decoration-none' >  Vichy  /</a><a href="" className=' text-decoration-none' >  Nivea  / </a><a href="" className=' text-decoration-none' >  Gillette  / </a></p>   
        </div>
        <div className="text1 d-flex">
            <h6 className='col-2 m-0 p-0 text-secondary'>HAIR PRODUCTS:</h6>
            <p className='' > <a href="" className=' text-decoration-none ' >  L'oreal Professionnel  /</a><a href="" className=' text-decoration-none' > Schwarzkopf /</a><a href="" className=' text-decoration-none' >   Matrix Biolage   /</a><a href="" className=' text-decoration-none' >   Livon Hair Gain  /</a><a href="" className=' text-decoration-none' >  Biotique  /</a> <a href="" className=' text-decoration-none' > Roots  /</a></p>   
        </div>
        <div className="text1 d-flex">
            <h6 className='col-2 m-0 p-0 text-secondary'>FRAGRANCE:</h6>
            <p className='' > <a href="" className=' text-decoration-none ' > Davidoff  /</a><a href="" className=' text-decoration-none' >  Hugo Boss  /</a><a href="" className=' text-decoration-none' >   Calvin Klein    /</a><a href="" className=' text-decoration-none' >  Elizabeth Arden  /</a><a href="" className=' text-decoration-none' >   Jaguar   /</a> <a href="" className=' text-decoration-none' >  Victoria's Secret   /</a></p>   
        </div>
        <div className="text1 d-flex">
            <h6 className='col-2 m-0 p-0 text-secondary'>ELECTRONICS:</h6>
            <p className='' > <a href="" className=' text-decoration-none' >  Philips  /</a><a href="" className=' text-decoration-none' >   Wahl   /</a><a href="" className=' text-decoration-none' >   Braun    /</a><a href="" className=' text-decoration-none' >   Remington  /</a></p>   
        </div>
        
        </div>
    </div>

    {/* foursection */}
    <div className="container">
        <div className="col-12 d-flex ps-5 pe-5 pt-5  mt-5 ms-5 me-5">
            <div className="col-3">
                <h5>Purplle</h5>
                <p className='m-0'>About Us</p>
                <p className='m-0'>Our Team</p>
                <p className='m-0'>Careers</p>
                <p className='m-0'>Press</p>
                <p className='m-0'>sitemap</p>
                <p className='m-0'>Compliance</p>
            </div>
            <div className="col-3">
                <h5>Purplle Bussiness</h5>
                <p className='m-0'>Sell on Purplle</p>
                
            </div>
            <div className="col-3">
                <h5>Privacy Info</h5>
                <p className='m-0'>privacy Police</p>
                <p className='m-0'>Team of use</p>
                <p className='m-0'>Return & Cancellation Policy</p>
            </div>
            <div className="col-3">
                <h5>Need Help?</h5>
                <p className='m-0'>FAQ's</p>
                <p className='m-0'>Contact Us</p>
            </div>
        </div>
    </div>
    <hr />
    <div className="container ">
        <div className="col-12 d-flex mt-5 ms-5  ">
            <div className="col-6 d-flex ">
                <h5 className='ps-3'>Payments</h5>
                <img className='ms-3' src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1499177379_tt.jpg" width={300} alt="" />
            </div>
            <div className="col-6 d-flex ">
                <h5 className='ps-3 mt-1 me-3'>Connect</h5>
                <div className="footericons d-flex">
                    <div style={{color:"white",borderRadius:"50%",backgroundColor:"blue",padding:"1px 5px",margin:"5px"}}> <FaFacebookF /> </div>
                    <div  style={{color:"white",borderRadius:"50%",backgroundColor:"teal",padding:"1px 5px",margin:"5px"}}><FaTwitter /></div>
                    <div  style={{color:"white",borderRadius:"50%",backgroundColor:"red",padding:"1px 5px",margin:"5px"}}><FaGooglePlusG /></div>
                    <div style={{color:"white",borderRadius:"50%",backgroundColor:"darkred",padding:"1px 5px",margin:"5px"}}><FaPinterestP /></div>
                    <div style={{color:"white",borderRadius:"50%",backgroundColor:"rgb(77, 77, 77)",padding:"1px 5px",margin:"5px"}}><MdOutlineEmail /></div>
                    <div style={{color:"white",borderRadius:"50%",backgroundColor:"red",padding:"1px 5px",margin:"5px"}}><CiYoutube /></div>
                    <div style={{color:"white",borderRadius:"50%",backgroundColor:"rgb(245, 14, 253)",padding:"1px 5px",margin:"5px"}}><FaInstagram /></div>
                    <div style={{color:"white",borderRadius:"50%",backgroundColor:" rgb(35, 35, 255)",padding:"1px 5px",margin:"5px"}}><FaLinkedinIn /></div>
                </div>
            </div>
            
        </div>
    </div>

    <div className="lastfooter container m-auto text-center pt-3 pb-5">
        <p>Copyright © 2020 Purplle. All Rights Reserved.</p>
    </div>








    </div>
  )
}

export default Footer
