import React from "react";
import { Link } from "react-router-dom";



function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg bg-body-tertiary " style={{backgroundColor:"#ffff"}}>
        <div class="container p-3">
          <Link class="navbar-brand " to={"/"}>
            <img  src="media/images/logo.svg" style={{width:"30%"}} />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse fs-5 " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active text-muted" aria-current="page" to={"/signup"}>
                  SignUp
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active  text-muted" to={"/about"}>
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active  text-muted" to={"/products"}>
                  Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active  text-muted" to={"/pricing"}>
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active  text-muted" to={"/support"}>
                  Support
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active  text-muted" to={"/logout"}>
                  LogOut
                </Link>
              </li>
              </ul>
          </div>
        </div>
      </nav>
   
  );
}

   

export default Navbar;
