import { PricingPage } from "@/screens/Pricing/PricingPage";

import { Metadata } from 'next'
 

export const metadata: Metadata = {
  title: 'pricing',
}


const Pricing = () => {
  return (<PricingPage/>)
}

export default Pricing;