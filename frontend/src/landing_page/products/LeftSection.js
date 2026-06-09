import React from 'react';


function LeftSection({ImageUrl , productName , productDesription , tryDemo , learnMore , googlePlay , appStore }) {
    return ( 
        <div className='container  '>
            <div className='row mt-5 '>
                <div className='col-6 mt-5 mb-5 '>
                    <img  src={ImageUrl} />
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p className='mt-4 fs-5'>{productDesription}</p>
                    <div className='mt-3 fs-5'>
                    <a href={tryDemo} style={{textDecoration:"none"}} >Try Demo→</a>
                    <a href={learnMore} style={{marginLeft:"50px", textDecoration:"none"}}>Learn More→</a>
                    </div>
                    <div className='mt-3 mb-5 '>
                    <a href={googlePlay} style={{width:"10%"}}><img src='media/images/googlePlayBadge.svg'/></a>
                    <a href={appStore} style={{marginLeft:"50px", width:"50%" }}><img src='media/images/appstore-badge-light.svg' /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;