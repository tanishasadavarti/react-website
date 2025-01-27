import { Badge, Button, Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useCart } from 'react-use-cart';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { FaRegHeart } from "react-icons/fa6";
import { CiSearch } from 'react-icons/ci';



const New = () => {

  const [newcart, setnewcart] = useState([])
  const [order, setorder] = useState(null)
  const [catagory, setcatagory] = useState(null);
  const [page, setpage] = useState(1)
  const [search, setsearch] = useState("")


  const newdata = () => {
    axios.get(" http://localhost:3000/newcart", {
      params: {
        _page: page,
        _limit: 8,
        _order: order,
        catagory: catagory,
        q: search

      }
    })
      .then((res) => {
        setnewcart(res.data)
      })
      .catch((err) => {
        console.log(err)
      })

  }
  useEffect(() => {
    newdata()
  }, [page, order, catagory, search])


  return (
    <div>
      <div>
        {/* <div className="btns m-2">
          <button onClick={() => setorder("asc")} style={{ backgroundColor: "black", color: "whitesmoke", marginLeft: "5%", padding: "5px 10px" }}>LowtoHigh</button>
          <button onClick={() => setorder("desc")} style={{ backgroundColor: "black", color: "whitesmoke", marginLeft: "3%", padding: "5px 10px" }}>HightoLow</button>
        </div> */}
        <div style={{ display: "flex" }}>
          <div className="search d-flex " style={{ marginLeft: "75%", marginTop: "10px", }}>
            <input className='pe-5 ps-3' value={search} onChange={(e) => setsearch(e.target.value)} type="text" placeholder='What are you look for?' />
            <div className="searchicon fs-4 pb-3 "><CiSearch /></div>
          </div>

        </div>

      </div>

      <div className="newheader">
        <div className="container d-flex col-3  mt-3">
          <Link className='d-flex text-decoration-none' ><p className=''>Home  <MdKeyboardArrowRight /></p><p>Offers <MdKeyboardArrowRight /> </p> </Link><p >New Launches At Purplle</p>
        </div>
        <div className="h3 text-center">New Launches At Purplle</div>
        <p className='text-center'> Showing  <span style={{ color: " rgb(230, 0, 180)", fontWeight: "bold" }}>356</span> Products</p>
      </div>

      <div className="container mt-5">
        <div className="newcart d-flex  align-item-center ps-4 flex-wrap col-12">
          {newcart.map((el) => (
            <div key={el.id} className='m-2'>

              <div className=' p-1' style={{ width: '14rem', margin: '10px' }}>
                <Link to={`/description/${el.id}`} className='text-decoration-none text-dark'>
                  <Card.Img variant="top" src={el.image} height={230} />
                  <Card.Body>
                    <Card.Text style={{ height: "170px" }}>
                      <p className='m-0 ' style={{ fontSize: "14px" }}>{el.name}</p>
                      <p className='m-0'>{el.volume}</p>
                      <p className='p-0 m-0'> <span className='fs-5' style={{ fontWeight: "bold" }}>{el.original_price}</span> <s className='text-secondary'>{el.price}</s> <span className='text-success ' style={{ fontWeight: "bold" }}>{el.discount}</span></p>
                      <p > <Badge pill bg="success  m-0"> {el.rating} <FaStar className='text-light' /></Badge> </p>
                    </Card.Text>
                  </Card.Body>
                </Link>
              </div>
              <Button variant="outline p-1" style={{ width: "70%", borderRadius: "10px", margin: "auto", border: "2px solid rgb(70, 10, 148)", color: "rgb(70, 10, 148)" }}> <h6> Add to Cart</h6></Button> <span className='p-3' style={{ fontSize: "25px" }}><FaRegHeart /></span>


            </div>

          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "10px", marginLeft: "42%", marginBottom: "10px", width: "200px" }}>
        <button disabled={page == 1} style={{ padding: "6px 10px" }} onClick={() => setpage(page - 1)}><FaChevronLeft /></button>
        <span style={{ border: "1px solid black", padding: "10px 15px" }}>{page}</span>
        <button disabled={page == 4} style={{ padding: "6px 10px" }} onClick={() => setpage(page + 1)}><FaChevronRight /></button>
      </div>
    </div>
  )
}

export default New
