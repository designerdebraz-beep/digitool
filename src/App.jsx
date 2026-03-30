
import './App.css'
import Banner from './Banner'
import Navber from './Navber'
import PricingSection from './PricingSection'
import Footer from './Footer'
import HowItWorks from './HowItWorks'
import StatsSection from './StatsSection'
import DigitalTools from './DigitalTools'

const data = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

const productsdata = data();

function App() {


  return (
    <>
     <Navber></Navber>
     <Banner></Banner>
     <StatsSection></StatsSection>
     <DigitalTools productsdata ={productsdata}></DigitalTools>
     <HowItWorks></HowItWorks>
     <PricingSection></PricingSection>
     <Footer></Footer>
     
 
     


     

     
    </>
  )
}

export default App
