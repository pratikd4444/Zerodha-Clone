import React from 'react';
import Brokerage from './Brokerage';
import Hero from './Hero';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Charges  from './Charges';
import ChargesExplain from './ChargesExplain'

function PricingPage() {
    return ( 
        <>
         <Hero />
        <Brokerage />
        <Charges />
        <ChargesExplain />
        
        
        </>
     );
}

export default PricingPage;