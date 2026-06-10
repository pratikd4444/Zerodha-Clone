import React from 'react';

function RightSection({ImageUrl , productName , productDesription , learnMore }) {
    return ( 
        <div className='container  mt-5 p-5 '>
            <div className='row mt-5 p-5 '>
                <div className='col-6 mt-5 p-5 '>
                    <h1>{productName}</h1>
                    <p className='mt-5 fs-5'>{productDesription}</p>
                    <div className='mt-3 fs-5'>
                    <a href={learnMore} style={{ textDecoration:"none"}}>Learn More→</a>
                </div>
                </div>
                <div className='col-6  mt-5 '>
                 <img  src={ImageUrl} alt='url' style={{width:"120%"}}  />
                </div>
                
            </div>
        </div>
     );
}

export default RightSection;