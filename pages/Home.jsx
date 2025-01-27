import React from 'react'
import  { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import Button from 'react-bootstrap/Button';
import { GoHeart } from "react-icons/go";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { CiFaceSmile } from "react-icons/ci";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { IoMdArrowForward } from "react-icons/io";
import Card from 'react-bootstrap/Card';
import axios from 'axios';

const Home = () => {
  const [product, setproduct] = useState([])
  const [bestsaller,setbestsaller]= useState([])
  const [pairing,setpairing]=useState([])
  const [beauty,setbeauty]=useState([])
  const getdata = () => {
    axios.get("http://localhost:3000/products",)
      .then((res) => {
        setproduct((res.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const sallerdata=()=>{
    axios.get("http://localhost:3000/saller",)
    .then((res) => {
      setbestsaller((res.data))
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const pairingdata=()=>{
    axios.get("http://localhost:3000/pairings",)
    .then((res) => {
      setpairing((res.data))
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const beautydata=()=>{
    axios.get("http://localhost:3000/beauty",)
    .then((res) => {
      setbeauty((res.data))
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getdata(),sallerdata(),pairingdata(),beautydata()
  }, [])
  return (
    <div>
        {/* sliderone */}
        <div className="sliderone ps-5 pe-5">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1722260494_lakme_makeup_primer_2596x836.jpeg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1722261443_aclt_30th-july-takeover-tc-web2x-2.jpg"
              alt="Second slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1722321008_exclusivestamp01_hpweb.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1722322220_gv-milk-face-wash-web.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1722237378_mamaearth_rm_shampoo_hair_2596x836.jpeg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1722084108_global_store_skinmakeup_and_hair_2596x836.jpeg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/finder/misc/1722278602_web-81.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1722003829_blue_heaven_eyeshadow_stick_makeup_2596x836.jpeg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1722320602_web-hero_1298x418.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1722084105_dotandkey_skincare_barrier_2596x836.jpeg"
              alt="Third slide"
            />
          </Carousel.Item>

        </Carousel>
      </div>

      {/* slider2 */}

      <div className="slidertwo mt-5 ms-5 me-5">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1721986864_web.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1722062667_aclt_top-new-arrivals-of-the-day-thin-strip-web-2-1.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* fetures */}
      <div className="features  mt-5">
        <div className="container-fluid text-center">
          <h3 className=''>FETURES</h3>
          <Link className='text-decoration-none view' ><h6>view all <IoMdArrowForward />   </h6></Link>
        </div>
        <div className="featurecart d-flex  align-item-center ps-4">
          {product.map((el) => (
            <Link to={"/description"} className='text-decoration-none'>
              <div key={el.id} className='m-2'>
                <Card style={{ width: '15rem' }}>
                  <Card.Img variant="top" src={el.image_url} height={200} />
                  <Card.Body>
                    <Card.Text style={{ height: "120px" }}>
                      <p className='m-0 '>{el.name}</p>
                      <p className='m-0'>{el.volume}</p>
                      <h5>{el.original_price} <s className='text-secondary'>{el.price}</s> <span className='text-success'>{el.discount}</span></h5>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* slider3 */}
      <div className="sliderthree mt-5 ms-5 me-5">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1721195936_limited_web-1.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1722408008_web-6.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>


      {/* slider4*/}
      <div className="sliderfour mt-5 ms-5 me-5">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1721807344_happy-hair_web.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1719571080_aclt_new-launch-final-thick-strip-web.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1721741362_web-1.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1722340383_fiama-web-copy.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1719468359_aclt_combo-bau-thick-strip-web.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* image section 1 */}
          <div className="imagesectionone">
            <div className=" col-12 d-flex mt-5">
              <div className="col-6 text-center ps-5  ">
                <img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722167612_hul_skin_1476x1028.jpeg" alt="" width={620}/>
              </div>
              <div className="col-6 text-center pe-5">
                <img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722169077_maybelline_lipsticks_makeup_1476x1028.jpeg" alt=""width={620} />
              </div>
            </div>
            <div className=" col-12 d-flex mt-2">
              <div className="col-6 text-center ps-5  ">
                <img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722004168_mamaearth_ubtan_facewash_1476x1028.jpeg" alt="" width={620}/>
              </div>
              <div className="col-6 text-center pe-5">
                <img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722004239_thedermaco_snailmuchin_skincare_1476x1028.jpeg" alt=""width={620} />
              </div>
            </div>
            <div className=" col-12 d-flex mt-2">
              <div className="col-6 text-center ps-5  ">
                <img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722004233_swiss_beauty_-_monsoon_makeup_1476x1028.jpeg" alt="" width={620}/>
              </div>
              <div className="col-6 text-center pe-5">
                <img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722069741_minimalist_spf_50_skin_1476x1028.jpeg" alt=""width={620} />
              </div>
            </div>
            <div className=" col-12 d-flex mt-2">
              <div className="col-6 text-center ps-5  ">
                <img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722401550_gv-milk-face-wash-app.jpg" alt="" width={620}/>
              </div>
              <div className="col-6 text-center pe-5">
                <img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722279767_exclusivestamp01_hpapp-copy-8-1.jpg" alt=""width={620} />
              </div>
            </div>
            <div className=" col-12 d-flex mt-2">
              <div className="col-6 text-center ps-5  ">
                <img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722329236_app-hero-banner-size-738x514-copy-2.jpg" alt="" width={620}/>
              </div>
              <div className="col-6 text-center pe-5">
                <img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722364088_738x514-copy-2-6.jpg" alt=""width={620} />
              </div>
            </div>
          </div>

    {/* alert free gift */}
    <div className="col-12 m-auto ps-5 mt-3">
      <img src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1722405619_31st-july-web_.jpg" alt="" />
    </div>

    {/* best saller */}

    <div className="features  mt-5">
        <div className="container-fluid text-center">
          <h4 className=''>BEST SALLERS</h4>
        </div>
        <div className="featurecart d-flex  align-item-center ps-4">
          {bestsaller.map((el) => (
            <Link className='text-decoration-none'>
              <div key={el.id} className='m-2'>
                <Card style={{ width: '15rem' }}>
                  <Card.Img variant="top" src={el.image_url} height={200} />
                  <Card.Body>
                    <Card.Text style={{ height: "120px" }}>
                      <p className='m-0 '>{el.name}</p>
                      <p className='m-0'>{el.volume}</p>
                      <h5>{el.discounted_price} <s className='text-secondary'>{el.price}</s> <span className='text-success'>{el.discount}</span></h5>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Link>
          ))}
        </div>
    </div>
        {/* imagesectiontwo */}
        <div className="imagesectiontwo">
            <div className=" col-12 d-flex mt-5">
              <div className="col-6 text-center ps-5  ">
                <img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722411524_fem_1_copy_1_1476x1028.jpeg" alt="" width={620}/>
              </div>
              <div className="col-6 text-center pe-5">
                <img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722440664_plum-_multi_category_1476x1028.jpeg" alt=""width={620} />
              </div>
            </div>
            <div className=" col-12 d-flex mt-2">
              <div className="col-6 text-center ps-5  ">
                <img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1719468359_aclt_combo-header-blush-tc-app2x.jpg" alt="" width={620}/>
              </div>
              <div className="col-6 text-center pe-5">
                <img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722004084_aqualogica_hydragelhero__skincare_1476x1028.jpeg" alt=""width={620} />
              </div>
            </div>
            <div className=" col-12 d-flex mt-2">
              <div className="col-6 text-center ps-5  ">
                <img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722440651_garnier_pooja_night_serum_1476x1028.jpeg" alt="" width={620}/>
              </div>
              <div className="col-6 text-center pe-5">
                <img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722093622_faces_canada_storbe_cream-1476x1028-1.jpeg" alt=""width={620} />
              </div>
            </div>
            <div className=" col-12 d-flex mt-2">
              <div className="col-6 text-center ps-5  ">
                <img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722004127_global_store_skinmakeup_and_hair_1476x1028.jpeg" alt="" width={620}/>
              </div>
              <div className="col-6 text-center pe-5">
                <img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722004120_dr.sheth_rosemaryserum_skincare_1476x1028.jpeg" alt=""width={620} />
              </div>
            </div>
            <div className=" col-12 d-flex mt-2">
              <div className="col-6 text-center ps-5  ">
                <img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722188548_brand-banner-17-nov-2023carmesi-banner_app-2.jpg" alt="" width={620}/>
              </div>
              <div className="col-6 text-center pe-5">
                <img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722169089_loreal_professional_haircare_arl_1476x1028.jpeg" alt=""width={620} />
              </div>
            </div>
      </div>
     
      

      {/* best pairings */}
      <div className="features  mt-5">
        <div className="container-fluid text-center">
          <h4 className=''>PERFECT PAIRINGS, MEGA SAVINGS</h4>
          <Link className='text-decoration-none view' ><h6>view all <IoMdArrowForward />   </h6></Link>
        </div>
        <div className="pairingcart d-flex  align-item-center ps-5">
          {pairing.map((el) => (
            <Link className='text-decoration-none'>
              <div key={el.id} className='m-2'>
                <Card style={{ width: '15rem' }}>
                  <Card.Img variant="top" src={el.image_url} height={200} />
                  <Card.Body>
                    <Card.Text style={{ height: "120px" }}>
                      <p className='m-0 'style={{fontSize:"14px"}}>{el.name}</p>
                      <p className='m-0'>175 ml</p>
                      <h5>{el.volume} <s>{el.price}</s> <span className='text-success'>{el.discount}</span></h5>
                    </Card.Text>
                    <Button variant="outline p-1"  style={{width:"100%",borderRadius:"10px",border:"2px solid rgb(70, 10, 148)",color:"rgb(70, 10, 148)"}}> <h6> Add to Cart</h6></Button>
                  </Card.Body>
                </Card>
              </div>
            </Link>
          ))}
        </div>
      </div>
        {/* slider5 */}
        <div className="sliderfour mt-5 ms-5 me-5">
          <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1721911338_web-thick-strip_.png"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1719329257_clearance_web.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1719329308_halfprice_web.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1719329384_exclusive_web.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1719468359_aclt_combo-bau-thick-strip-web.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          </Carousel>
        </div>

      {/* beauty bff */}
      <div className="beaty  mt-5">
        <div className="container-fluid text-center">
          <h4 className=''> YOUR NEW BEATY BFF</h4>
          <Link className='text-decoration-none view' ><h6>view all <IoMdArrowForward />   </h6></Link>
        </div>
        <div className="beautycart d-flex  align-item-center ps-5">
          {beauty.map((el) => (
            <Link className='text-decoration-none'>
              <div key={el.id} className='m-2'>
                <Card style={{ width: '15rem' }}>
                  <Card.Img variant="top" src={el.image} height={230} />
                  <Card.Body>
                    <Card.Text style={{ height: "120px" }}>
                      <p className='m-0 'style={{fontSize:"14px"}}>{el.name}</p>
                      <p className='m-0'>175 ml</p>
                      <h5>{el.volume} <s>{el.price}</s> <span className='text-success'>{el.discount}</span></h5>
                    </Card.Text>
                    <Button variant="outline p-1"  style={{width:"100%",borderRadius:"10px",border:"2px solid rgb(70, 10, 148)",color:"rgb(70, 10, 148)"}}> <h6> Add to Cart</h6></Button>
                  </Card.Body>
                </Card>
              </div>
            </Link>
          ))}
        </div>
      </div>

    <div className="makeupimg mt-5 ms-2">
      <div className="col-12  d-flex container-fluid">
        <div className="col-3  "><img  src="https://media6.ppl-media.com/tr:w-320,ar-16-13,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1711625080_web_01.jpg" alt="" /></div>
        <div className="col-3 "><img src="https://media6.ppl-media.com/tr:w-320,ar-16-13,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1711625081_web_02.jpeg" alt="" /></div>
        <div className="col-3"><img src="https://media6.ppl-media.com/tr:w-320,ar-16-13,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1711625081_web_03.jpeg" alt="" /></div>
        <div className="col-3"><img src="https://media6.ppl-media.com/tr:w-320,ar-16-13,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1711625082_web_04.jpg" alt="" /></div>
      </div>
      
    </div>
    
  <div className="destination mt-5">
    <div className="slidertitle">
      <img src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1663748349_har-brand-ka-destination_web.jpg" alt="" />
    </div>
    <div className="col-12 d-flex container-fluid ps-5">
      <div className="col-4"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722528180_renee_600x838.jpeg" alt="" width={400} /></div>
      <div className="col-4"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722528176_joy_600x838.jpeg" alt="" width={400} /></div>
      <div className="col-4"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722528185_ucanbe_600x838.jpeg" alt="" width={400}/></div>
    </div>
    <div className="col-12 d-flex container-fluid ps-5">
      <div className="col-4"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722528172_everyuth_600x838.jpeg" alt="" width={400} /></div>
      <div className="col-4"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722528181_rire_600x838.jpeg" alt="" width={400} /></div>
      <div className="col-4"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722528168_bronso_professional_600x838.jpeg" alt="" width={400}/></div>
    </div>
    <div className="col-12 d-flex container-fluid ps-5">
      <div className="col-4"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722528179_lux_600x838.jpeg" alt="" width={400} /></div>
      <div className="col-4"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722528166_bella_vosta_600x838.jpeg" alt="" width={400} /></div>
      <div className="col-4"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722528170_dr.rashels_600x838.jpeg" alt="" width={400}/></div>
    </div>

  </div>
  
  {/* slider5 */}
  <div className="sliderfour mt-5 ms-5 me-5">
          <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1719402493_paisa-vasool.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1719402492_free-gift-on-all-order-copy.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722165917_tresemme_haircare-_smooth_and_shiny_2596x836-1.jpeg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1719402490_free-gift-and-cod.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          </Carousel>
        </div>
    
    {/* brands */}
    <div className="brands">
      <h4 className='text-center mt-5'>Top Brands For You</h4>
      <div className="col-12 d-flex flex-wrap container-fluid ps-5  ">
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722450724_tfs_rice_kushi_644x968.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722083836_kaja_chelly_charm_644x968.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722578615_brwn_644x968.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722083833_cosrx_644x968.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722536055_dot__key_sunkissed_644x968.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722450721_bioderma_new_644x968.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722083837_purito_644x968.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1720877046_klairs_644x968.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722524802_kanvar_728x992-1.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722433840_khadi_natural_728x992.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722081948_purito_728x992.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722524803_sugar_pop__728x992-2.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722524801_o3_728x992.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722433846_renee_728x992.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722156687_yash_trading_728x992.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722433843_lotus_herbals_728x992.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722081944_kaja_728x992.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722433838_hyphen_728x992.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722081946_love_beauty__planet_728x992.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722433840_jovees_728x992.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722433837_dermafique_728x992.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722433850_wella_professional_728x992.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722081952_roundlab__use_728x992.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722433846_rire_728x992.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722081947_ponds_glow_728x992.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722433842_livon_728x992.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722081943_ikonic_professional_728x992.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722433831_bella_vita_organics_728x992.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722433834_cuffs_and_lashes_728x992.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722501590_aya_728x992-1.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722433830_beauty_glazed_728x992.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722433835_dabur_728x992.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722156424_ronzille_728x992.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722433848_staze_728x992.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722433843_nature_essence_728x992.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722081954_vaseline_new_728x992.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722433849_tnw_728x992.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722433832_bella_vote_concealer_728x992.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722433838_florozone_728x992.jpeg" alt=""width={300} /></div>
          <div className="col-3 mb-3"><img src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1722081946_l.a_shield_728x992.jpeg" alt=""width={300} /></div>

      </div>
    </div>






    </div>
  )
}

export default Home
