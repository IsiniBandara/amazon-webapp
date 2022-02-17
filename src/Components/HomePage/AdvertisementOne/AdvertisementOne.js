import React from "react"
import { Link } from "react-router-dom"
import "./AdvertisementOne.css"

function AdvertisementOne(props) {
  return (
    <div className='AdvertisementOne_main'>
      <div className='AdvertisementOne_header'>
        Up to 70% off | Electronics clearance store
      </div>
      <div className='AdvertisementOne_body'>
        <Link to={"/display"}>
          <img
            src='https://ik.imagekit.io/amazonimages34/amazon-image/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204__fBO0yDCQxHT.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1643176860374'
            width='260px'
            height='227px'
          />
        </Link>
      </div>
      <div className='AdvertisementOne_footer'>See more</div>
    </div>
  )
}

export default AdvertisementOne
