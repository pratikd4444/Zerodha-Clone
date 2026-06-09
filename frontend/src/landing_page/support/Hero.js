import React from 'react';

function Hero() {
    return ( 
        <div className='main' style={{backgroundColor:"#f5f3f4"}}>
        <div className='container ' >
          <div className='row'>
            <div className='col-6 mt-3'>
                <h1>Support Portal</h1>
            </div>
             <div className='col-6 mt-4 text-end'>
                <button type="button" class="btn btn-primary" style={{width:"20%", height:"40px", fontSize:"18px"}}> <b>My ticket</b></button>
             </div>
              <form class="d-flex mt-5 mb-5" style={{height:"50px"}} role="search">
        <input class="form-control me-2" type="search" placeholder="Eg: How do I open my account, How do I activite F&N..." aria-label="Search"/>
        <button class="btn btn-outline-primary" type="submit">Search</button>
      </form>
          </div>
        </div>
        </div>
     );
}

export default Hero;