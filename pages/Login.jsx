import React from 'react'
import { Link } from 'react-router-dom'
import { RiDeleteBin6Line } from "react-icons/ri";

const Login = () => {
  return (
    <div>
      <div className="container-form m-auto ">
        <div className='pt-5 ps-5'>
          <h6 className=" m-0">Hey there!</h6>
          <p className='p-0 m-0'>Login/Signup to manage your orders and a lot more</p>
        </div>
        <Link to={"/signup"} style={{ textDecoration: "none", color: "white" }}>  <button className=' loginbtn fs-5 p-1 ms-5'>   Login/Signup  </button></Link>
        <hr />
        <div className='ps-5 pt-3 pb-3 '>
          <Link className='text-decoration-none text-dark '>
            <div className="h6 m-0 text-left">Hey there!</div>
            <p className='pb-2 m-0'>Track, cancel and return orders</p>
          </Link>
          <Link className='text-decoration-none text-dark'>
            <div className="h6 m-0 text-left">Customer Support</div>
            <p className='pb-2 m-0'>Help regarding your purchase</p>
          </Link>
          <Link className='text-decoration-none text-dark'>
            <div className="h6 m-0 text-left">Elite Membership</div>
            <p className='pb-2 m-0'>Offers and rewards</p>
          </Link>
          
        </div>
        <hr />
        <div className='ps-5 pt-3 pb-3 '>
          <Link className='text-decoration-none text-dark'>
            <div className="h6 m-0 text-left">Purplle Credit</div>
            <p className='pb-2 m-0'>Manage your refunds and gift cards</p>
          </Link>
          <div className='logindelete mt-3'>
          <Link className='text-decoration-none '>
            <div>
            <h6 className="h6 m-0 text-center">Delete Account</h6>
            <p className='pb-2 m-0 text-center'>Delete your purplle account</p>
            </div>
            {/* <div className="delete "><RiDeleteBin6Line /></div> */}
          </Link>
          </div>
          
        </div>
        <hr />

      </div>

    </div>
  )
}

export default Login
