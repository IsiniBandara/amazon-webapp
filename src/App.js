import "./App.css"
import Checkout from "./Components/Checkout/Checkout"
import DisplayContent from "./Components/DisplayContent/DisplayContent"
import MainPage from "./Components/HomePage/MainPage"
import NavBar from "./Components/NavBar/Navigation"
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import CartContextProvider from "./Components/CartContext"

function App() {
  return (
    <Router>
      <div className='App'>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path='/display' element={<DisplayContent />} />
            <Route path='/order/:id' element={<PlaceOrder />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/' element={<MainPage />} />

            {/* <MainPage /> */}

            {/* <Route path='/display'>
            <DisplayContent />
          </Route>
          <Route path='/order'>
            <PlaceOrder />
          </Route>
          <Route path='/checkout'>
            <Checkout />
          </Route> */}
          </Routes>
        </CartContextProvider>
        {/* <MainPage /> */}
        {/* <DisplayContent />
      <PlaceOrder /> */}
        {/* <Checkout /> */}
      </div>
    </Router>
  )
}

export default App
