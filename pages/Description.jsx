import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaStar, FaRupeeSign } from "react-icons/fa";
import { Badge } from 'react-bootstrap';
import { GoHeart } from "react-icons/go";

const Description = () => {
    let [singledata, setSingleData] = useState({});
    const params = useParams();

    const getData = () => {
        axios.get(` http://localhost:3000/newcart/${params.id}`)
            .then((res) => {
                setSingleData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getData();
    }, [params.id]);

    const addtocartFunction = () => {
        axios.post(" http://localhost:3000/onecart", singledata) 
            .then((res) => {
                console.log(res.data);
                alert("Item added to cart");
            })
            .catch((err) => console.log(err));

    };

    return (
        <div>
            <div style={{ margin: "auto", padding: "20px" }}>
                <div className="col-12 d-flex container bg-light p-4">
                    <div className="col-6">
                        <img src={singledata.image} alt="" />
                    </div>
                    <div className="col-5">
                        <h6>{singledata.name}</h6>
                        <p>{singledata.description}</p>
                        <h3><FaRupeeSign className='fs-4 mb-1' />{singledata.price}</h3>
                        <h5>{singledata.discount}</h5>
                        <p>
                            <Badge pill bg="success m-0">
                                {singledata.rating} <FaStar className='text-light' />
                            </Badge> | <span> reviews: {singledata.reviews}</span>
                        </p>
                        <hr />
                        <h4>Quantity: <span className='fs-5'> 285</span></h4>
                        <div>
                            <img className='m-auto' src={singledata.image} width={200} alt="" />
                        </div>
                        <div className='buttons'>
                            <Link to={"/addtocart"} ><button onClick={addtocartFunction} className='btn btn-primary addtocart'>ADD TO CART</button></Link>
                            <button className='btn btn-secondary wishlist'><GoHeart /> WISHLIST</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;
