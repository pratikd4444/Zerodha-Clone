import React from "react";

function CreateTicket() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-9 mt-5">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            {/* ITEM 1: Account Opening */}
            <div className="accordion-item mb-4">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed d-flex align-items-center gap-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <i className="fa-solid fa-circle-plus text-primary"></i>
                  <span className="fs-5">Account Opening</span>
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <ul className="fs-6 " style={{color:"blue"}}>
                    {" "}
                    <li className="mb-3">
                      <a
                        href="/"
                        style={{ textDecoration: "none" }}
                      >
                        Resident individual
                      </a>
                    </li>
                    <li className="mb-3">
                      <a   href="/"
                        style={{ textDecoration: "none" }}>Minor</a>
                    </li>
                    <li className="mb-3">
                      <a   href="/"
                        style={{ textDecoration: "none" }}>Non Resident Indian (NRI)</a>
                    </li>
                    <li className="mb-3">
                      <a   href="/"
                        style={{ textDecoration: "none" }}>Company, Partnership,HUF and LLP</a>
                    </li>
                    <li className="mb-3">
                      <a   href="/"
                        style={{ textDecoration: "none" }}>Glossary</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item mb-4">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed d-flex align-items-center gap-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  <i className="fa-solid fa-user text-primary"></i>
                  <span className="fs-5">Your Zerodha Account</span>
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  {" "}
                  <ul className="fs-6 " style={{color:"blue"}}>
                    {" "}
                    <li  className="mb-3">
                      <a
                        href="/"
                        style={{ textDecoration: "none" }}
                      >
                        Your Profile
                      </a>
                    </li >
                    <li  className="mb-3">
                      <a  href="/"
                        style={{ textDecoration: "none" }}>Account modification</a>
                    </li>
                    <li  className="mb-3">
                      <a  href="/"
                        style={{ textDecoration: "none" }}>Client Master Report (CMR) and Depository Participant (DP)</a>
                    </li>
                    <li  className="mb-3">
                      <a  href="/"
                        style={{ textDecoration: "none" }}>Nomination</a>
                    </li>
                    <li  className="mb-3">
                      <a  href="/"
                        style={{ textDecoration: "none" }}>Transfer and Conversion  Security</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* ITEM 3: Kite */}
            <div className="accordion-item mb-4">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed d-flex align-items-center gap-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  <i className="fa-solid fa-at text-primary"></i>
                  <span className="fs-5">Kite</span>
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  {" "}
                  <ul className="fs-6 " style={{color:"blue"}}>
                    {" "}
                    <li  className="mb-3">
                      <a
                        href="/"
                        className="mb-2"
                        style={{ textDecoration: "none" }}
                      >
                        IPO
                      </a>
                    </li>
                    <li  className="mb-3">
                      <a  href="/"
                        style={{ textDecoration: "none" }}>F&N</a>
                    </li>
                    <li  className="mb-3">
                      <a  href="/"
                        style={{ textDecoration: "none" }}>Margin Trading Facility(MTF) and Margins</a>
                    </li>
                    <li  className="mb-3">
                      <a  href="/"
                        style={{ textDecoration: "none" }}>Charts and Orders</a>
                    </li>
                    <li  className="mb-3">
                      <a  href="/"
                        style={{ textDecoration: "none" }}>General</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* ITEM 4: Funds */}
            <div className="accordion-item mb-4">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed d-flex align-items-center gap-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  <i className="fa-solid fa-indian-rupee-sign text-primary"></i>
                  <span className="fs-5">Funds</span>
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  {" "}
                  <ul className="fs-6 " style={{color:"blue"}}>
                    {" "}
                    <li  className="mb-3">
                      <a
                        href="/"
                        className="mb-2"
                        style={{ textDecoration: "none" }}
                      >
                        Add money
                      </a>
                    </li>
                    <li  className="mb-3">
                      <a  href="/"
                        style={{ textDecoration: "none" }}>Withdraw money</a>
                    </li>
                    <li  className="mb-3">
                      <a  href="/"
                        style={{ textDecoration: "none" }}>Add bank accounts</a>
                    </li>
                    <li  className="mb-3">
                      <a  href="/"
                        style={{ textDecoration: "none" }}>eMandates</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* ITEM 5: Console */}
            <div className="accordion-item mb-4">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed d-flex align-items-center gap-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  <i className="fa-solid fa-sliders text-primary"></i>
                  <span className="fs-5">Console</span>
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  {" "}
                  <ul className="fs-6 " style={{color:"blue"}}>
                    {" "}
                    <li  className="mb-3">
                      <a
                        href="/"
                        className="mb-2"
                        style={{ textDecoration: "none" }}
                      >
                        Portfoilo
                      </a>
                    </li>
                    <li  className="mb-3">
                      <a  href="/"
                        style={{ textDecoration: "none" }}>Corporate</a>
                    </li>
                    <li  className="mb-3">
                      <a  href="/"
                        style={{ textDecoration: "none" }}>Funds statement</a>
                    </li>
                    <li  className="mb-3">
                      <a  href="/"
                        style={{ textDecoration: "none" }}>Reports</a>
                    </li>
                    <li  className="mb-3">
                      <a  href="/"
                        style={{ textDecoration: "none" }}>Profile</a>
                    </li>
                      <li  className="mb-3">
                      <a  href="/"
                        style={{ textDecoration: "none" }}>Segments</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item mb-5">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed d-flex align-items-center gap-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSix"
                  aria-expanded="false"
                  aria-controls="flush-collapseSix"
                >
                  <i className="fa-solid fa-coins text-primary"></i>
                  <span className="fs-5">Coin</span>
                </button>
              </h2>
              <div
                id="flush-collapseSix"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  {" "}
                  <ul className="fs-6 " style={{color:"blue"}}>
                    <li  className="mb-3">
                      <a
                        href="/"
                        style={{ textDecoration: "none" }}
                      >
                        Mutual funds
                      </a>
                    </li>
                    <li  className="mb-3">
                      <a  href="/"
                        style={{ textDecoration: "none" }}>National Pension Scheme(NPS)</a>
                    </li>
                    <li  className="mb-3">
                      <a  href="/"
                        style={{ textDecoration: "none" }}>Fixed Deposit (FD)</a>
                    </li>
                    <li  className="mb-3">
                      <a  href="/"
                        style={{ textDecoration: "none" }}>Features on Coin</a>
                    </li>
                     <li  className="mb-3">
                      <a  href="/"
                        style={{ textDecoration: "none" }}>Payments and Orders</a>
                    </li>
                    <li  className="mb-3">
                      <a  href="/"
                        style={{ textDecoration: "none" }}>General</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 mt-5 ">
          <div className="ticket" >
            <ul className="fs-6" style={{color:"blue"}}>
              <li className="mb-3 mt-3"><a  href="/">Trading holiday on<br />account of Diwale on Nov 17 , 2026</a></li>
              <li><a  href="/">Current takeovers and<br /> Delisting - May 2026</a></li>
            </ul>
          </div>
          <div className="table-responsive mt-3">
                     <table className="table align-middle mb-0" style={{ tableLayout: 'fixed', width: '100%' }}>
                <thead>
                <tr className="border-bottom border-top fs-6 ">
                  <th className="text-muted"  scope="col" style={{ width: '100%', padding: '20px 24px' }}>Quick Links</th>
                </tr>
              </thead>
              <tbody>
                 <tr className='mt-2'>
                  <td  className="fw-medium text-muted fs-6 mt-2 " ><a style={{textDecoration:"none"}} href="/">1. Track account opening</a></td>
                </tr>
                 <tr className='fs-6'>
                  <td  className="fw-medium text-muted fs-6" ><a style={{textDecoration:"none"}} href="/">2. Track segment activation</a></td>
                </tr>
                 <tr className='fs-6'>
                  <td  className="fw-medium text-muted fs-6" ><a style={{textDecoration:"none"}} href="/">3. Intraday margins</a></td>
                </tr>
                 <tr className='fs-6'>
                  <td  className="fw-medium text-muted fs-6" ><a style={{textDecoration:"none"}} href="/">4. Kite user manual</a></td>
                </tr>
                 <tr className='fs-6'>
                  <td  className="fw-medium text-muted fs-6" ><a style={{textDecoration:"none"}} href="/">5. Learn how to create a ticket</a></td>
                </tr>
              </tbody>
              </table>
              </div>
              
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
