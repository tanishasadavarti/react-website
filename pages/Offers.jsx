import React from 'react'
import { Carousel } from 'react-bootstrap'

const Offers = () => {
  return (
    <div>
      <div className=" m-auto">
        <img src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1563364997_offers-for-you-d.jpg" alt="" />
      </div>

      <div className="sliderone">
      <div className="sliderfour mt-5 ms-5 me-5">
          <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1722677041_faces_canada_storbe_cream_copy_1-2596x836-2.jpeg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1722679612_gv-ubtan-night-cream-banner_web.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1722677366_ag-pu_webhp.jpg"
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
      </div>
    </div>
  )
}

export default Offers
