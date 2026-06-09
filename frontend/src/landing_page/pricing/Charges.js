import React from "react";


function Charges() {
    return (
        <div className="container mt-5">
            <h1 className=" fs-3 mb-5">Charges for account opening</h1>
            <div className="tab-pane fade show active border rounded p-3 bg-white " id="equity-pane" role="tabpanel" aria-labelledby="equity-tab">
                  <div className="table-responsive">
                     <table className="table align-middle mb-0" style={{ tableLayout: 'fixed', width: '100%' }}>
                <thead>
                <tr className="border-bottom fs-6 ">
                  <th className="text-muted"  scope="col" style={{ width: '75%', padding: '20px 24px' }}>Type of account</th>
                  <th className='text-muted text-end ' scope="col" style={{ width: '25%', padding: '20px 24px' }}>Charges</th>
                </tr>
              </thead>
              <tbody>
                 <tr className='fs-6'>
                  <td  className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }}>Online account</td>
                  <td className="text-end" style={{color:"green"}}>Free</td>
                </tr>
                 <tr className='fs-6'>
                  <td  className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }}>Offline account</td>
                  <td className="text-end" style={{color:"green"}}>Free</td>
                </tr>
                 <tr className='fs-6'>
                  <td  className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }}>NRI account (offline only)</td>
                  <td className="text-end">₹ 500</td>
                </tr>
                 <tr className='fs-6 '>
                  <td  className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }}>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                  <td className="text-end">₹ 500</td>
                </tr>
              </tbody>
                     </table>
                 </div>
             </div>
             <h2 className="mt-5 mb-5">Demat AMC (Annual Maintenance Charge)</h2>
              <div className="tab-pane fade show active border rounded p-3 bg-white " id="equity-pane" role="tabpanel" aria-labelledby="equity-tab">
                  <div className="table-responsive">
                     <table className="table align-middle mb-0" style={{ tableLayout: 'fixed', width: '100%' }}>
                <thead>
                <tr className="border-bottom fs-6 ">
                  <th className="text-muted"  scope="col" style={{ width: '75%', padding: '20px 24px' }}>Value of holdings</th>
                  <th className='text-muted ' scope="col" style={{ width: '25%', padding: '20px 24px' }}>AMC</th>
                </tr>
              </thead>
              <tbody>
                 <tr className='fs-6'>
                  <td  className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }}>Up to ₹4 lakh</td>
                  <td  style={{color:"green"}}>Free</td>
                </tr>
                 <tr className='fs-6'>
                  <td  className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }}>₹4 lakh - ₹10 lakh</td>
                  <td >	₹ 100 per year, charged quarterly*</td>
                </tr>
                 <tr className='fs-6'>
                  <td  className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }}>Above ₹10 lakh</td>
                  <td >₹ 300 per year, charged quarterly</td>
                </tr>
              </tbody>
                     </table>
                 </div>
             </div>
              <p  style={{fontSize:"14px", marginTop:"15px"}}>* Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA,</p>
              <h2 className="mt-5 mb-5">Charges for optional value added services</h2>
               <div className="tab-pane fade show active border rounded p-3 bg-white " id="equity-pane" role="tabpanel" aria-labelledby="equity-tab">
                  <div className="table-responsive">
                     <table className="table align-middle mb-0" style={{ tableLayout: 'fixed', width: '100%' }}>
                <thead>
                <tr className="border-bottom fs-6 ">
                  <th className="text-muted"  scope="col" style={{ width: '30%', padding: '20px 24px' }}>Serivce</th>
                  <th className='text-muted ' scope="col" style={{ width: '30%', padding: '20px 24px' }}>Billing Frequency</th>
                   <th className='text-muted ' scope="col" style={{ width: '30%', padding: '20px 24px' }}>Charges</th>
                </tr>
              </thead>
              <tbody>
                 <tr className='fs-6'>
                  <td  className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }}>Tickertape</td>
                  <td  className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }} >Monthly / Annual</td>
                  <td  className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }} >Free: 0 | Pro: 249/2399</td>
                </tr>
                 <tr className='fs-6'>
                  <td  className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }}>Smallcase</td>
                  <td  className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }} >	Per transaction	</td>
                  <td  className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }} >	Buy & Invest More: 100 | SIP: 10</td>
                </tr>
                 <tr className='fs-6'>
                  <td  className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }}>Above ₹10 lakh</td>
                   <td  className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }} > Monthly	</td>
                  <td  className="fw-medium text-muted fs-6" style={{ padding: '30px 30px' }} >		Connect: 500 | Personal: Free</td>
                </tr>
              </tbody>
                     </table>
                 </div>
             </div>
        </div>
    )
       
    
}

export default Charges ;