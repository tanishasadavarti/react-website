import React, { useEffect, useState } from 'react'
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
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
 
  const [search,setsearch]=useState([])

  return (
    <div >
      <header className='ms-5 me-5 mt-3 '>
        <div className="container-fluid  d-flex justify-content-between m-auto">
          <div className="logo d-flex ">
            {/* <input value={search} className='pe-5 ps-3' type="text" placeholder='What are you look for?' />
            <div  className="searchicon fs-4 "><CiSearch /></div> */}
            <img src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1728010487_p-icon-square-appfirst-.svg" alt="" />
          </div>
         <Link to={"/"}>
         <div className="img ms-5">
            <img src="https://media6.ppl-media.com/static/purplle/img/purplle-logo-1.svg" width={120} alt="" />
          </div></Link>
          <div className="headericon d-flex">
            <Link className="heart fs-2 ms-3 mt-2 text-secondary"><GoHeart /></Link>
            <Link to={"/addtocart"} className="cart fs-2 ms-3 mt-2 text-secondary text-decoration-none"><LiaCartArrowDownSolid  /> <sup className='text-dark fs-6'></sup></Link>
            <Dropdown >
              <Dropdown.Toggle variant="" id="dropdown-basic" >
                <Link className="smile fs-2  text-secondary "><CiFaceSmile /></Link>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1"> <Link to={"/login"} style={{textDecoration:"none",color:"black"}}>  account </Link></Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </div>
        </div>
      </header>
      <hr />
      <div className="navbar">
      <Link to={"/"} className='text-dark text-decoration-none'>SHOP CATEGORIES</Link>
      <Link to={"/brands"} className='text-dark text-decoration-none'>BRANDS</Link>
      <Link to={"/offers"} className='text-dark text-decoration-none'>OFFERS</Link>
      <Link to={"/new"} className='text-dark text-decoration-none'>NEW</Link>
      <Link to={"/spurgy"} className='text-dark text-decoration-none'>SPLURGY</Link>
      <Link to={"/magazine"}className='text-dark text-decoration-none'>MAGAZINE</Link>
      <Link to={"/eliteoffers"} className='text-dark text-decoration-none'>ELITE OFFERS</Link>
      </div>

      
    </div>

  )
}

export default Navbar
