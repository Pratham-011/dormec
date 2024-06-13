import React from 'react'
import './header.css';

function Header() {
  return (

    <div>
        <header id="header" className="fixed-top">
     
            <div className="container d-flex align-items-center justify-content-between">
                <h1 className="logo">
                    <a href="index.html">
                        <img src="../assets/img/logo.png"/>
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
    <style>{`
#header .logo img {
    max-height: 65px;
}
.p-space {
    margin: 0px 10px!important;
    text-align: justify!important;
}
.d-font-family {
    font-family: "Roboto", sans-serif, serif!important;
}
.mb-5 {
    margin-bottom: 8px!important;
} 
 #hero {
    height: 85vh!important;
}
@media only screen and (max-width: 600px) {
    #hero {
        height: 42vh!important;
    }
    .carousel-item {
        background-size: 460px 360px!important;
    }
    #hero h2 {
        font-size: 17px;
        text-align: left;
    }
    h2.animate__animated.animate__fadeInDown.d-font-family {
        margin-top: 40px!important;
    }
    a.carousel-control-prev, a.carousel-control-next {
        margin-top: 60px!important;
    }
    .navbar {
        position: fixed!important;
    }
} 
`}</style>
    </div>
  )
}

export default Header
