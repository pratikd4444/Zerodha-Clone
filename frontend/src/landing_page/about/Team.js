import React from 'react';
import { Link } from "react-router-dom";

function Team() {
    return ( 
           <div className="container">
      <div className="row p-5  mb-3 ">
        <h1 className=" text-center ">
          People
        </h1>
      </div>
      <div className="row p-5   ">
        <div className="col-6 fs-5 p-5 text-center ">
         <img src='media/images/pratik.jpg' style={{borderRadius:"100%", width:"70%"}} />
         <h4 className='mt-3'>Pratik Deshmukh</h4>
         <p className='mt-4'>Founder, CEO</p>
        </div>
        <div className=" col-6 fs-5 mt-3">
          <p>
           Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <br />
          <p>
           He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>{" "}
          <br />
          <p>
          Playing basketball is his zen.
          </p>{" "}
          <p>Connect on. <Link to={"/"} style={{textDecoration:"none"}}>Homepage / </Link><Link to={"/"} style={{textDecoration:"none"}}>TrendingQnA / </Link><Link to={"/"} style={{textDecoration:"none"}} >Twitter</Link></p>
          <br />
        </div>
      </div>
    </div>
  );
}


export default Team;