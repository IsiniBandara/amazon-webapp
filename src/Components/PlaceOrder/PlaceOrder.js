import React, { useContext, useEffect, useState } from "react"
import "./PlaceOrder.css"
import Grid from "@mui/material/Grid"
import Rating from "@mui/material/Rating"
import Paper from "@mui/material/Paper"
import { Link, useParams } from "react-router-dom"
import { CartContext } from "../CartContext"

function PlaceOrder(props) {
  const { item, size, increment } = useContext(CartContext)
  const [productDetails, setProductDetails] = useState([])
  let { id } = useParams()
  const addToCart = function () {
    increment(productDetails)
  }
  useEffect(() => {
    //api call
    let list = [
      {
        id: 123456789,
        name: "New Apple iPhoneX",
        rating: "53",
        review: "44",
        emi: "57.43",
        delivery: "Wednesday, Mar 18",
        price: "999",
        image:
          "https://ik.imagekit.io/amazonimages34/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65__UuXeBQYKu2C.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643176860767",
        about: [
          "This pre owned product is not Apple certified but has been professionally inspected tested and cleaned by Amazon qualified suppliers",
          "This pre owned product is not Apple certified but has been professionally inspected tested and cleaned by Amazon qualified suppliers",
          "This pre owned product is not Apple certified but has been professionally inspected tested and cleaned by Amazon qualified suppliers",
          "This pre owned product is not Apple certified but has been professionally inspected tested and cleaned by Amazon qualified suppliers",
        ],
      },
      {
        id: 213456789,
        name: "iPhone11",
        rating: "822",
        review: "119",
        emi: "44.23",
        delivery: "Wednesday, Aug 18",
        price: "489",
        image:
          "https://ik.imagekit.io/amazonimages34/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__YS2jvZrMU.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643176863856",
        about: [
          "This pre owned product is not Apple certified but has been professionally inspected tested and cleaned by Amazon qualified suppliers",
          "This pre owned product is not Apple certified but has been professionally inspected tested and cleaned by Amazon qualified suppliers",
          "This pre owned product is not Apple certified but has been professionally inspected tested and cleaned by Amazon qualified suppliers",
          "This pre owned product is not Apple certified but has been professionally inspected tested and cleaned by Amazon qualified suppliers",
        ],
      },
      {
        id: 321456789,
        name: "iPhone12",
        rating: "923",
        review: "126",
        emi: "100",
        delivery: "Friday, Aug 25",
        price: "599",
        image:
          "https://ik.imagekit.io/amazonimages34/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65__CpNYq2qVDM1.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643176862135",
        about: [
          "This pre owned product is not Apple certified but has been professionally inspected tested and cleaned by Amazon qualified suppliers",
          "This pre owned product is not Apple certified but has been professionally inspected tested and cleaned by Amazon qualified suppliers",
          "This pre owned product is not Apple certified but has been professionally inspected tested and cleaned by Amazon qualified suppliers",
          "This pre owned product is not Apple certified but has been professionally inspected tested and cleaned by Amazon qualified suppliers",
        ],
      },
      {
        id: 432156789,
        name: "iPhone13",
        rating: "200",
        review: "500",
        emi: "117.43",
        delivery: "Wednesday, Dec 18",
        price: "1304",
        image:
          "https://ik.imagekit.io/amazonimages34/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__4806lfyV4q.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643176864425",
        about: [
          "This pre owned product is not Apple certified but has been professionally inspected tested and cleaned by Amazon qualified suppliers",
          "This pre owned product is not Apple certified but has been professionally inspected tested and cleaned by Amazon qualified suppliers",
          "This pre owned product is not Apple certified but has been professionally inspected tested and cleaned by Amazon qualified suppliers",
          "This pre owned product is not Apple certified but has been professionally inspected tested and cleaned by Amazon qualified suppliers",
        ],
      },
      // {
      //   id: 123456789,
      //   name: "IphoneX",
      //   rating: "3429",
      //   price: "369",
      //   image:
      //     "https://ik.imagekit.io/amazonimages34/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65__UuXeBQYKu2C.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643176860767",
      // },
      // {
      //   id: 213456789,
      //   name: "Iphone11",
      //   rating: "3500",
      //   price: "569",
      //   image:
      //     "https://ik.imagekit.io/amazonimages34/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__YS2jvZrMU.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643176863856",
      // },
      // {
      //   id: 321456789,
      //   name: "Iphone12",
      //   rating: "4000",
      //   price: "859",
      //   image:
      //     "https://ik.imagekit.io/amazonimages34/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65__CpNYq2qVDM1.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643176862135",
      // },
      // {
      //   id: 432156789,
      //   name: "Iphone13",
      //   rating: "5005",
      //   price: "1200",
      //   image:
      //     "https://ik.imagekit.io/amazonimages34/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__4806lfyV4q.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643176864425",
      // },
      // {
      //   id: 543216789,
      //   name: "Iphone12",
      //   rating: "4000",
      //   price: "859",
      //   image:
      //     "https://ik.imagekit.io/amazonimages34/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65__CpNYq2qVDM1.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643176862135",
      // },
      // {
      //   id: 123456789,
      //   name: "Iphone13",
      //   rating: "5005",
      //   price: "1200",
      //   image:
      //     "https://ik.imagekit.io/amazonimages34/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__4806lfyV4q.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643176864425",
      // },
    ]
    //filter fake API
    let item = list.filter((item) => {
      if (item.id == id) return item
    })
    console.log(item)
    setProductDetails(item[0])
  }, [])

  return (
    <div>
      <Grid container>
        <Grid item xs={5}>
          <img className='placeorder_image' src={productDetails.image} />
        </Grid>
        <Grid item xs={4}>
          <div className='placeorder_description'>
            <div
              style={{ fontSize: "24px", lineHeight: "32px", fontWeight: 500 }}
            >
              {productDetails.name}
            </div>
            <div>
              <Rating
                name='read-only'
                value='3'
                style={{ fontSize: "15px" }}
                readOnly
              />
              {productDetails.ratings} ratings | {productDetails.review}+
              answered questions
            </div>
            <hr></hr>
            <div>
              <div className='textgap'>
                Price:
                <span className='pricetag'> ${productDetails.price}</span>
              </div>
              <div className='textgap'>
                FREE delivery: <strong>{productDetails.delivery}</strong>
              </div>
              <div className='textgap'>
                EMI starts at $ {productDetails.emi}. No Cost EMI available
              </div>
              <br />
              <br />
              <div style={{ fontSize: "24px" }} className='textgap'>
                About this item
              </div>
              <div>
                <ul>
                  {productDetails.about != undefined ? (
                    productDetails.about.map((item) => <li>{item}</li>)
                  ) : (
                    <span></span>
                  )}
                </ul>
                {/* <li>
                    This pre-owned product is not Apple certified, but has been
                    professionally inspected, tested and cleaned by
                    Amazon-qualified suppliers.
                  </li>
                  <li>
                    There will be no visible cosmetic imperfections when held at
                    an arm’s length.
                  </li>
                  <li>
                    This product will have a battery which exceeds 80% capacity
                    relative to new.
                  </li>
                  <li>
                    Accessories may not be original, but will be compatible and
                    fully functional. Product may come in generic Box.
                  </li> */}
                {/* </ul> */}
                {/* - This pre-owned product is not Apple certified, but has been
                professionally inspected, tested and cleaned by Amazon-qualified
                suppliers. <br />- There will be no visible cosmetic
                imperfections when held at an arm’s length.
                <br />- This product will have a battery which exceeds 80%
                capacity relative to new.
                <br />- Accessories may not be original, but will be compatible
                and fully functional. Product may come in generic Box. */}
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <Paper variant='outlined' className='placeorder_order'>
            <div className='textgap'>
              <span className='pricetag'>Price: $1,017.89</span>
            </div>
            <div className='textgap'>
              $97.96 Shipping & Import Fees Deposit to Sri Lanka Details
            </div>
            <div className='textgap'>
              Delivery <strong>February 1 - 10</strong>
            </div>
            <div className='textgap'>
              <strong
                style={{
                  color: "green",
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                }}
              >
                In Stock
              </strong>
            </div>

            <button className='placeorder_button addtocart' onClick={addToCart}>
              Add to Cart
            </button>

            <Link to='/checkout'>
              <button className='placeorder_button buynow'>Buy Now</button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default PlaceOrder
