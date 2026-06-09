import React from 'react';
import { Link } from 'react-router-dom';

function OpemAccount() {
    return ( 
        <div className='container mt-5 p-5'>
        <div className='row text-center'>
           <h1 className='mt-3'>Open a Zerodha account</h1>
           <p className='mt-3'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
           <Link to={"/signup"} > <button style={{width:"30%", margin: "auto"}} className="btn btn-primary p-3 fs-5 mb-5 ">Sign Up for free</button></Link>
         
        </div>
       </div>
     );
}

export default OpemAccount;