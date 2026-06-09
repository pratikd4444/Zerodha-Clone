import React from 'react';

function Brokerage() {
  return (
    <div className="container my-5">
      
      <ul className="nav nav-tabs justify-content-start border-bottom-0 mb-4" id="pricingTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button 
            className="nav-link active fs-4 fw-normal px-4 pb-3" 
            id="equity-tab" 
            data-bs-toggle="tab" 
            data-bs-target="#equity-pane" 
            type="button" 
            role="tab"
            style={{ color: '#444' }}
          >
            Equity
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button 
            className="nav-link fs-4 fw-normal px-4 pb-3" 
            id="currency-tab" 
            data-bs-toggle="tab" 
            data-bs-target="#currency-pane" 
            type="button" 
            role="tab"
            style={{ color: '#444' }}
          >
            Currency
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button 
            className="nav-link fs-4 fw-normal px-4 pb-3" 
            id="commodity-tab" 
            data-bs-toggle="tab" 
            data-bs-target="#commodity-pane" 
            type="button" 
            role="tab"
            style={{ color: '#444' }}
          >
            Commodity
          </button>
        </li>
      </ul>

    
      <div className="tab-content" id="pricingTabContent">
        
        {/* --- EQUITY PANE --- */}
        <div className="tab-pane fade show active border rounded p-3 bg-white" id="equity-pane" role="tabpanel" aria-labelledby="equity-tab">
          <div className="table-responsive">
            <table className="table align-middle custom-pricing-table text-secondary mb-0">
              <thead>
                <tr className="border-bottom fs-5 ">
                  <th  scope="col" style={{ width: '15%', padding: '15px' }}></th>
                  <th className='text-muted'  scope="col" style={{ width: '21%', padding: '15px' }}>Equity delivery</th>
                  <th className='text-muted' scope="col" style={{ width: '21%', padding: '15px' }}>Equity intraday</th>
                  <th className='text-muted' scope="col" style={{ width: '21%', padding: '15px' }}>F&O - Futures</th>
                  <th className='text-muted' scope="col" style={{ width: '22%', padding: '15px' }}>F&O - Options</th>
                </tr>
              </thead>
              <tbody>
                <tr className='fs-5'>
                  <td  className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }}>Brokerage</td>
                  <td>Zero Brokerage</td>
                  <td>0.03% or Rs. 20/executed order whichever is lower</td>
                  <td>0.03% or Rs. 20/executed order whichever is lower</td>
                  <td>Flat Rs. 20 per executed order</td>
                </tr>
                <tr className='fs-5'>
                  <td className="fw-medium text-muted" style={{ padding: '30px 30px' }}>STT/CTT</td>
                  <td>0.1% on buy & sell</td>
                  <td>0.025% on the sell side</td>
                  <td>0.05% on the sell side</td>
                  <td>
                    <ul className="list-unstyled mb-0 lh-base">
                      <li className="mb-1">• 0.15% of the intrinsic value on options that are bought and exercised</li>
                      <li>• 0.15% on sell side (on premium)</li>
                    </ul>
                  </td>
                </tr>
                <tr className='fs-5'>
                  <td className="fw-medium text-muted" style={{ padding: '30px 30px' }}>Transaction charges</td>
                  <td>
                    NSE: 0.00307%<br />BSE: 0.00375%
                  </td>
                  <td>
                    NSE: 0.00307%<br />BSE: 0.00375%
                  </td>
                  <td>
                    NSE: 0.00183%<br />BSE: 0
                  </td>
                  <td>
                    NSE: 0.03553% (on premium)<br />
                    BSE: 0.0325% (on premium)
                  </td>
                </tr>
                 <tr className='fs-5'>
                  <td className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }}>GST</td>
                  <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                  <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                  <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                  <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                </tr>
                <tr className='fs-5'>
                  <td className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }}>SEBI charges</td>
                  <td>₹10 / crore</td>
                  <td>₹10 / crore</td>
                  <td>₹10 / crore</td>
                  <td>₹10 / crore</td>
                </tr>
                <tr className='fs-5'>
                  <td className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }}>Stamp charges</td>
                  <td>0.015% or ₹1500 / crore on buy side	</td>
                  <td>0.003% or ₹300 / crore on buy side</td>
                  <td>0.002% or ₹200 / crore on buy side</td>
                  <td>0.003% or ₹300 / crore on buy side</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* --- CURRENCY PANE --- */}
        <div className="tab-pane fade border rounded p-4 bg-white" id="currency-pane" role="tabpanel" aria-labelledby="currency-tab">
           <div className="table-responsive">
             <table className="table align-middle custom-pricing-table text-secondary mb-0">
               <thead>
                <tr className="border-bottom fs-5 ">
                  <th  scope="col" style={{ width: '15%', padding: '15px' }}></th>
                  <th className='text-muted'  scope="col" style={{ width: '21%', padding: '15px' }}>Currency futures</th>
                  <th className='text-muted' scope="col" style={{ width: '21%', padding: '15px' }}>Currency options</th>
                </tr>
                 </thead>
                <tbody>
                   <tr className="border-bottom fs-5">
                  <td className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }}>Brokerage</td>
                  <td>0.03% or ₹ 20/executed order whichever is lower</td>
                  <td>₹ 20/executed order</td>
                </tr>
                  <tr className="border-bottom fs-5">
                  <td className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }}>STT/CTT</td>
                  <td>No STT</td>
                  <td>No STT</td>
                </tr>
                  <tr className="border-bottom fs-5">
                  <td className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }}>Transaction charges</td>
                  <td>NSE: 0.00035% <br /> BSE: 0.00045%</td>
                  <td>NSE: 0.0311% <br /> BSE: 0.001%</td>
                </tr>
                  <tr className="border-bottom fs-5">
                  <td className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }}>GST</td>
                  <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                  <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                </tr>
                  <tr className="border-bottom fs-5">
                  <td className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }}>SEBI charges</td>
                  <td>	₹10 / crore</td>
                  <td>	₹10 / crore</td>
                </tr>
                  <tr className="border-bottom fs-5">
                  <td className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }}>Stamp charges</td>
                  <td>0.0001% or ₹10 / crore on buy side</td>
                  <td>0.0001% or ₹10 / crore on buy side</td>
                </tr>
                </tbody>
             </table>
           </div>
        </div>

        {/* --- COMMODITY PANE --- */}
        <div className="tab-pane fade border rounded p-4 bg-white" id="commodity-pane" role="tabpanel" aria-labelledby="commodity-tab">
         <div className="table-responsive">
             <table className="table align-middle custom-pricing-table text-secondary mb-0">
               <thead>
                <tr className="border-bottom fs-5 ">
                  <th  scope="col" style={{ width: '15%', padding: '15px' }}></th>
                  <th className='text-muted'  scope="col" style={{ width: '21%', padding: '15px' }}>Commodity futures</th>
                  <th className='text-muted' scope="col" style={{ width: '21%', padding: '15px' }}>Commodity options</th>
                </tr>
                 </thead>
                <tbody>
                   <tr className="border-bottom fs-5">
                  <td className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }}>Brokerage</td>
                  <td>0.03% or ₹ 20/executed order whichever is lower</td>
                  <td>₹ 20/executed order</td>
                </tr>
                  <tr className="border-bottom fs-5">
                  <td className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }}>STT/CTT</td>
                  <td>	0.01% on sell side (Non-Agri)</td>
                  <td>	0.05% on sell side</td>
                </tr>
                  <tr className="border-bottom fs-5">
                  <td className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }}>Transaction charges</td>
                  <td>MCX: 0.0021% <br /> NSE: 0.0001%</td>
                  <td>MCX: 0.0418% <br /> NSE: 0.001%</td>
                </tr>
                  <tr className="border-bottom fs-5">
                  <td className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }}>GST</td>
                  <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                  <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                </tr>
                  <tr className="border-bottom fs-5">
                  <td className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }}>SEBI charges</td>
                  <td> Agri: <br />₹1 / crore <br /> Non-agri: <br />₹10 / crore</td>
                  <td>	₹10 / crore</td>
                </tr>
                  <tr className="border-bottom fs-5">
                  <td className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }}>Stamp charges</td>
                  <td>0.002% or ₹200 / crore on buy side</td>
                  <td>0.003% or ₹300 / crore on buy side</td>
                </tr>
                </tbody>
             </table>
           </div>
        </div>
        <h1 className='fs-3 text-center mt-5 mb-5'><a  style={{textDecoration:"none"}} href='/'>Calculate your costs upfront </a> using out brokerage calculator</h1>
      </div>
    </div>
  );
}

export default Brokerage;