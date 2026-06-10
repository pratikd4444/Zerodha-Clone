import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
   const handleKiteClick = () => {
      window.location.href = "https://your-kite-dashboard.netlify.app" ;
   } ;
    return ( 
       <div className='container mb-5'>
        <div className='row text-center'>
           <img src='media/images/homeHero.png' alt='hero img' className='p-5' />
           <h1 className='mt-5'>Invest in everything</h1>
           <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
           <button onClick={handleKiteClick} >Kie Dashboard</button>
           <Link to={"/signup"}><button style={{width:"30%", margin: "auto"}} className="btn btn-primary p-3 fs-5 mb-5 ">Sign Up for free</button></Link>
        
        </div>
       </div>
     );
}

export default Hero;