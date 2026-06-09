import React from 'react';

function Hero() {
    return ( 
        <div className='container  '>
       
        <div className='row p-3 mt-5'>
             <h2 className='text-center fs-2 mt-5 mb-3'>Charges</h2>
        <p className='text-center mb-5 text-muted fs-5' >List of all charges and taxes</p>
            <div className='col p-3 text-center'>
                <img className='mb-3'style={{ width: "90%", maxHeight: "200px" }} src='media/images/pricingEquity.svg' />
                <h1 className='fs-2 mb-3 mt-3'>Free equity delivery</h1>
                <p className='fs-5 text-muted'>All equity delivery investments (NSE, BSE),<br /> are absolutely free — ₹ 0 brokerage. </p>
            </div>
            <div className='col p-3'>
                <img className='mb-3' style={{ width: "90%", maxHeight: "200px" }} src='media/images/pricing2.svg' />
                <h1  className='fs-2 mb-3 mt-3'>Intraday and F&O trades</h1>
               <p className='fs-5 text-muted text-center lh-lg'>
    Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className='col p-3 text-center'>
                <img className='mb-3' style={{ width: "90%", maxHeight: "200px" }} src='media/images/pricingEquity.svg' />
                <h1  className='fs-2 mb-3 mt-3'>Free direct MF</h1>
                <p className='fs-5 text-muted '>All direct mutual fund investments are<br /> absolutely free — ₹ 0 commissions & DP<br /> charges.</p>
            </div>
        </div>
        </div>
     );
}

export default Hero;