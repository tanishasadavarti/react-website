import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Badge } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa6';
import { MdCurrencyRupee } from "react-icons/md";


const Addtocart = () => {
  const [cart, setcart] = useState([])

  const fetchCartItems = () => {
    axios
      .get("http://localhost:3000/onecart")
      .then((res) => setcart(res.data))
      .catch((err) => console.log(err));
  };



  useEffect(() => {
    fetchCartItems();
  }, []);
  const handledelete = (id) => {
    axios.delete(`http://localhost:3000/onecart/${id}`)
      .then((res) => {
        alert("Deleted...")
        fetchCartItems()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <div className="onecart" style={{ width: "70%", margin: "auto" }}>
        
          {cart.map((item) => (
            <div key={item.id} className="container mt-5"  style={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
              <th className='d-flex  p-3'>
                <div className=''>
                  <tr>
                    <img src={item.image} width={150} alt='' />
                  </tr>
                </div>
                <div className=' ps-3'>
                  <p className='m-0 p-0' style={{ fontWeight: "500" }}>{item.name}</p>
                  <p ><b>{item.discount}</b> <span className='ps-3'> <MdCurrencyRupee /> {item.price} </span>   <s style={{ fontWeight: "300" }}>{item.original_price}</s>  </p>
                  <p>
                    <Badge pill bg="success m-0">
                      {item.rating} <FaStar className='text-light' />
                    </Badge> | <span> reviews: {item.reviews}</span>

                  </p>
                  <button onClick={()=>handledelete(item.id)} className='ps-2 pe-2'  style={{border:"none",borderRadius:"5px"}}  >remove</button>
                  <button  className='ps-2 pe-2 ms-3'  style={{border:"none",borderRadius:"5px"}}>wishlist</button>

                </div>
              </th>
            </div>
          ))}
        
      </div>
    </div>
  );
};

export default Addtocart;
