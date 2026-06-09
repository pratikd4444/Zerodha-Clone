import React from 'react';
import { Link } from "react-router-dom";

function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center mt-5 text-muted'>
                <h1 className='mb-3'>Zerodha Products</h1>
                <h3 className='mb-3'>Sleek, modern, and intuitive trading platforms</h3>
                <p className='mb-5 fs-4'>Check out our <Link to={"/"} style={{textDecoration:"none"}}>investment offerings →</Link></p>
            </div>
        </div>
     );
}

export default Hero;