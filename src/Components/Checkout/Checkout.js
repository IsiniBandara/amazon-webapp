import React, { useContext } from "react"
import "./Checkout.css"
import Grid from "@mui/material/Grid"
import CheckoutItems from "./CheckoutItems"
import { CartContext } from "../CartContext"

function Checkout(props) {
  const { item, size, increment } = useContext(CartContext)

  const cartValue = function () {
    let price = 0
    for (let i = 0; i < item.length; i++) {
      price += parseInt(item[i].price)
    }
    return price
  }

  return (
    <div className='checkout_body'>
      <Grid container>
        <Grid item={10}>
          <div className='checkout_container'>
            <div
              style={{
                fontSize: "30px",
                fontWeight: "500",
                padding: "20px 0px 0px 20px",
              }}
            >
              Shopping Cart
            </div>
            <div>
              {item.map((value) => (
                <CheckoutItems definition={value} />
              ))}
              {/* <CheckoutItems />
              <CheckoutItems />
              <CheckoutItems /> */}
            </div>
          </div>
        </Grid>
        <Grid item={2}>
          <div
            style={{
              width: "300px",
              height: "200px",
              padding: "20px",
              marginTop: "25px",
              backgroundColor: "white",
            }}
          >
            <div style={{ fontSize: "26px" }}>
              Subtotal ( {size} items): <strong>{cartValue()}</strong>
            </div>
            <div style={{ paddingTop: "25px" }}>
              <button className='placeorder_button'>Proceed to Buy</button>
            </div>
          </div>
        </Grid>
        <div></div>
      </Grid>
    </div>
  )
}

export default Checkout
