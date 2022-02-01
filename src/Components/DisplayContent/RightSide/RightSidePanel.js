import React, { useEffect, useState } from "react"
import "./RightSide.css"
import { Link } from "react-router-dom"

import Product from "./Product"

function RightSidePanel(props) {
  const [listOfProduct, setListOfProducts] = useState([])
  useEffect(() => {
    let list = [
      {
        id: 123456789,
        name: "IphoneX",
        rating: "3429",
        price: "369",
        image:
          "https://ik.imagekit.io/amazonimages34/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65__UuXeBQYKu2C.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643176860767",
      },
      {
        id: 213456789,
        name: "Iphone11",
        rating: "3500",
        price: "569",
        image:
          "https://ik.imagekit.io/amazonimages34/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__YS2jvZrMU.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643176863856",
      },
      {
        id: 321456789,
        name: "Iphone12",
        rating: "4000",
        price: "859",
        image:
          "https://ik.imagekit.io/amazonimages34/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65__CpNYq2qVDM1.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643176862135",
      },
      {
        id: 432156789,
        name: "Iphone13",
        rating: "5005",
        price: "1200",
        image:
          "https://ik.imagekit.io/amazonimages34/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__4806lfyV4q.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643176864425",
      },
      {
        id: 543216789,
        name: "Iphone12",
        rating: "4000",
        price: "859",
        image:
          "https://ik.imagekit.io/amazonimages34/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65__CpNYq2qVDM1.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643176862135",
      },
      {
        id: 123456789,
        name: "Iphone13",
        rating: "5005",
        price: "1200",
        image:
          "https://ik.imagekit.io/amazonimages34/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__4806lfyV4q.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643176864425",
      },
    ]
    setListOfProducts(list)
  }, [])

  return (
    <div className='RightSide_main'>
      {/* <Product
        rating='234444'
        price='21342'
        name='iphone 11'
        image='https://ik.imagekit.io/amazonimages34/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__YS2jvZrMU.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643176863856'
      />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product /> */}

      {listOfProduct.map((item) => [
        <Link to={"/order/" + item.id}>
          <Product
            definition={item}
            // rating={item.rating}
            // name={item.name}
            // image={item.image}
            // price={item.price}
          />
        </Link>,
      ])}
    </div>
  )
}

export default RightSidePanel
