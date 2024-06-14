import React from 'react'
// import './header.css';

function Header() {
  return (

    <div>
        <header id="header" className="fixed-top">
     
            <div className="container d-flex align-items-center justify-content-between">
                <h1 className="logo">
                    <a href="index.html">
                        <img src="assets/img/logo.png"/>
                    </a>
                </h1>  
                <nav id="navbar" className="navbar">
                    <ul> 
                        <li><a className="nav-link active d-font-family" href="index.html">Home</a></li>
                        <li><a className="nav-link d-font-family" href="about-us.html">About Us</a></li>
                        <li><a className="nav-link d-font-family" href="products.html">Products</a></li>
                        {/* <li><a className="nav-link d-font-family" href="javascript:void(0)" data-toggle="modal" data-target="#myModal">ISO Certificate</a></li>  */}
                        <li><a className="nav-link d-font-family" href="contact-us.html">Contact Us</a></li> 
                        <li><a className="getstarted d-font-family" href="tel:+919726294830">Call Now</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
            </header>        
   
    </div>
  )
}

export default Header
