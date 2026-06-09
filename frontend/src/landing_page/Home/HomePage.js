import React from 'react';
import Hero from './Hero'
import Awards from './Awards'
import Stats  from './Stats'
import Pricing from './Pricing'
import Education from './Education'
import OpemAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';

function HomePage() {
    return ( 
        <>
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpemAccount />
        </>
     );
}

export default HomePage;