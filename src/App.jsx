
import './App.css'
import Banner from './Banner'
import Navber from './Navber'
import PricingSection from './PricingSection'
import Footer from './Footer'
import HowItWorks from './HowItWorks'
import StatsSection from './StatsSection'
import DigitalTools from './DigitalTools'
import Pricinghead from './Pricinghead'
import { useState } from 'react'
import Cart from './Cart'

const data = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

const productsdata = data();

function App() {

     const [activetab, setactivetab] = useState('product')
     const [cart, setcart] = useState([])
    //  console.log(cart)
  return (
    <>
     <Navber></Navber>
     <Banner></Banner>
     <StatsSection></StatsSection>
     <Pricinghead></Pricinghead>
       <div className="tabs tabs-box bg-transparent justify-center">
                            <input type="radio" name="my_tabs_1" className="tab bg-[#7C3AED] text-white rounded-full font-medium text-sm w-40" onClick={()=> setactivetab("product")} aria-label="Product" defaultChecked />
                            <input type="radio" name="my_tabs_1" className="tab text-gray-500 rounded-full font-medium w-40 " onClick={()=> setactivetab("cart")} aria-label="Cart" />

                        </div>
     {activetab === 'product' ? <DigitalTools productsdata ={productsdata} cart={cart} setcart={setcart}></DigitalTools> : null }
     {activetab === 'cart' ? <Cart cart={cart}></Cart> : null}
     <HowItWorks></HowItWorks>
     <PricingSection></PricingSection>
     <Footer></Footer>
     
 
     


     

     
    </>
  )
}

export default App
