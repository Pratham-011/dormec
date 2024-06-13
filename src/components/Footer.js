import React from 'react'
import './header.css';


function Footer() {
  return (
    <div>
       <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-info">
                                <h3 className="d-font-family">Dormec</h3>
                                <p className="pb-3 d-font-family">Dormec strength is a forward -Looking Company. Technology is always been a key element in our Strategy and important driver of our Growth</p> 
                            </div>
                        </div> 
                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4 className="d-font-family">Useful Links</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="index.html" className="d-font-family">Home</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="about-us.html" className="d-font-family">About us</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="products.html" className="d-font-family">Products</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="contact-us.html" className="d-font-family">Contact Us</a></li> 
                            </ul>
                        </div> 
                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="index.html" className="d-font-family">Home</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="about-us.html" className="d-font-family">About us</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="products.html" className="d-font-family">Products</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="contact-us.html" className="d-font-family">Contact Us</a></li> 
                            </ul>
                        </div> 
                        <div className="col-lg-4 col-md-6 footer-newsletter">  
                            <p className="d-font-family mb-5"><strong>Address:</strong> Shed No.2 Survey No. 251P4, Priyang Industrial Area, B/h. Sardar Patra, Kothariya, Rajkot, Gujrat, 360-022</p>
                            <p className="d-font-family mb-5"><strong>Phone:</strong> +91 972-629-4830/ +91 987-926-2945</p>
                            <p className="d-font-family mb-5"><strong>Email:</strong> dormecllp@gmail.com</p> 
                            <div className="social-links mt-3">
                                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright d-font-family">
                    &copy; Copyright <strong><span>Dormec</span></strong>. All Rights Reserved
                </div>
                <div className="credits d-font-family">
                    Designed by <a href="https://pheasantinc.com/" target="_blank">Pheasant Inc.</a>
                </div>
            </div>
        </footer> 
    </div>
  )
}

export default Footer
