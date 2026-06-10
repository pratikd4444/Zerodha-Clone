import React from 'react';
import { Link } from 'react-router-dom';

function Universe() {
    return ( 
        <div className='container ' >
            <div className='row text-center'>
                <h2 className='mt-5 mb-5'>The Zerodha Universe</h2>
                <p className='fs-5'>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-3 mt-5'>
                    <img className='mb-3' style={{width:"50%"}} src='media/images/zerodhaFundhouse - Copy - Copy.png' alt='zerodafundhouse' />
                    <p className='text-muted  mb-5'>Our asset management venture<br /> that is creating simple and transparent index<br /> funds to help you save for your goals.</p>
                    <img style={{width:"50%", marginTop:"20px", marginBottom:"15px"}}  src='media/images/streakLogo.png' alt='streaklogo' />
                    <p className='text-muted'>Systematic trading platform<br /> that allows you to create and backtest<br /> strategies without coding.</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img  className='mb-4' style={{width:"60%"}} src='media/images/sensibullLogo.svg' alt='sensibulllogo' />
                    <p className='text-muted  mb-5'>Options trading platform that lets you<br /> create strategies, analyze position, and examine<br /> data points like open interest, FII/DII, and more.</p>
                    <img style={{width:"60%", marginTop:"25px", marginBottom:"15px"}} src='media/images/smallcaseLogo.png' alt='smallcaselogo' />
                    <p className='text-muted  mb-5 mt-2'>Thematic investing platform<br /> that helps you invest in diversified<br /> baskets of stocks on ETFs</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img  className='mb-2' style={{width:"40%"}}   src='media/images/tijori.svg' alt='tijori' />
                    <p className='text-muted  mb-5'>Investment research platform<br /> that offers detailed insights on stocks,<br /> sectors,supply chains, and more.</p>
                    <img className='mb-5 mt-3' style={{width:"30%"}}   src='media/images/dittoLogo.png' alt='dittologo' />
                    <p className='text-muted'>Personalized advice on life<br />and health insureance.No spam<br />and no mis-selling.</p>
                </div>
                <Link to={"/signup"} > <button style={{width:"30%", margin: "auto"}} className="btn btn-primary p-3 fs-5 mb-5 ">Sign Up for free</button></Link>
                 
            </div>
        </div>
     );
}

export default Universe;