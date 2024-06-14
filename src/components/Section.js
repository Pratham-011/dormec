import React from 'react'
// import './section.css';


function Section() {
  return (
    <div>
         <section id="hero">
            <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>
                <div class="carousel-inner" role="listbox"> 
                    <div class="carousel-item active" style="background-image: url(assets/img/slider/D101%20Classic.jpg)">
                        <div class="carousel-container">
                            <div class="container">
                                <h2 class="animate__animated animate__fadeInDown d-font-family">Committed to Give Best Quality <br/>and Satisfaction to Our Customer</h2>  
                                <a href="about-us.html" class="btn-get-started animate__animated animate__fadeInUp scrollto d-font-family">Read More</a>
                            </div>
                        </div>
                    </div> 
                    <div class="carousel-item" style="background-image: url(assets/img/slider/D102%20Performance.jpg)">
                        <div class="carousel-container">
                            <div class="container">
                                <h2 class="animate__animated animate__fadeInDown d-font-family">- Reliable<br/>- Unmatched Product Quality<br/>- Competative Rates</h2>
                                <a href="about-us.html" class="btn-get-started animate__animated animate__fadeInUp scrollto d-font-family">Read More</a>
                            </div>
                        </div>
                    </div> 
                    <div class="carousel-item" style="background-image: url(assets/img/slider/D103%20Power.jpg)">
                        <div class="carousel-container">
                            <div class="container">
                                <h2 class="animate__animated animate__fadeInDown d-font-family">- PAN India Customer Base<br/>- Excellent after Sales and Service</h2>
                                <a href="about-us.html" class="btn-get-started animate__animated animate__fadeInUp scrollto d-font-family">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" style="background-image: url(assets/img/slider/D104%20Pelm%20Arm.jpg)">
                        <div class="carousel-container">
                            <div class="container">
                                <h2 class="animate__animated animate__fadeInDown d-font-family">Timely Deliveries <br/>- On Time, Every Time</h2>
                                <a href="about-us.html" class="btn-get-started animate__animated animate__fadeInUp scrollto d-font-family">Read More</a>
                            </div>
                        </div>
                    </div> 
                </div>
                <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                </a> 
                <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                </a>
            </div>
        </section>
       <main id="main"> 
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">                     
                    <div className="row content">
                        <div className="col-lg-8">
                            <div className="section-title">
                                <p className="d-font-family"><strong>About Dormec</strong></p>
                                <h2 className="d-font-family">Welcome to Dormec</h2> 
                            </div>
                            <p className="p-space d-font-family">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Dormec</strong> is Rajkot based company, manufacturing door closer since 2001. We have the lastest machines & have developed special purpose machines to manufacture the best in the door closing devices. All the products are made in - house & nothing is our sourced. Our products comply with European Standards. We believe that quality is never the result of chance, but a sustained effort & determination</p>
                            <p className="p-space d-font-family">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It is our motto to give the best at the least. We know that you put your reputation on the line when you endorse a specific brand of door closer. Consquently we ensure that when you choose Dormec, you get the best. All our closers are built to provide years of trouble free operation.</p>
                            <p className="p-space d-font-family">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The product range we have is suitable for every need & it ranges from the aesthetic for interiors to heavy duty for elevator doors, service doors fire doors and hotel entrance doors. Our products are not only best in appearances but also the best in efficiency. We believe that equality is never the result of chance, but a sustained effore determination</p> 
                        </div>
                        <div className="col-lg-4 pt-4 pt-lg-0">
                            <img src="assets/img/Doormac%201234.png" width="100%" className="p-space"/>
                        </div>
                    </div> 
                </div>
            </section>  
            <section id="testimonials" className="testimonials section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2 className="d-font-family">Testimonials</h2>
                        <p className="d-font-family">Our Customers Review</p>
                    </div>
                    <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="testimonial-wrap">
                                    <div className="testimonial-item">
                                        <img src="/assets/img/profile.png" className="testimonial-img" alt=""/>
                                        <h3 className="d-font-family">Parag Desai</h3>
                                        <h4 className="d-font-family">Rajkot</h4>
                                        <p className="d-font-family">
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Good Quality. Valuable product. Much cheaper than local market. Easy to install. Myself installed without any problem. Working beautifully.
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </div>
                            </div> 
                            <div className="swiper-slide">
                                <div className="testimonial-wrap">
                                    <div className="testimonial-item">
                                        <img src="/assets/img/profile.png" className="testimonial-img" alt=""/>
                                        <h3 className="d-font-family">Nitin Patel</h3>
                                        <h4 className="d-font-family">Benguluru</h4>
                                        <p className="d-font-family">
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Great and easy to Install working 💪 Great highly recommend. Thanks Dormec
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </div>
                            </div> 
                            <div className="swiper-slide">
                                <div className="testimonial-wrap">
                                    <div className="testimonial-item">
                                        <img src="/assets/img/female.png" className="testimonial-img" alt=""/>
                                        <h3 className="d-font-family">Nidhi Patroda</h3>
                                        <h4 className="d-font-family">Pune</h4>
                                        <p className="d-font-family">
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Compared to the other closers which I used earlier, I found this to be smoother operation and hence very silent.  
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </div>
                            </div> 
                            <div className="swiper-slide">
                                <div className="testimonial-wrap">
                                    <div className="testimonial-item">
                                        <img src="/assets/img/profile.png" className="testimonial-img" alt=""/>
                                        <h3 className="d-font-family">Raj Hirani</h3>
                                        <h4 className="d-font-family">New Delhi</h4>
                                        <p className="d-font-family">
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Very good quality Door closer also the door position lock function is very good
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </div>
                            </div> 
                            <div className="swiper-slide">
                                <div className="testimonial-wrap">
                                    <div className="testimonial-item">
                                        <img src="/assets/img/profile.png" className="testimonial-img" alt=""/>
                                        <h3 className="d-font-family">Vivek Shah</h3>
                                        <h4 className="d-font-family">Bhopal</h4>
                                        <p className="d-font-family">
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            I like the gauge and very easy to close & open. I highly recommend this product and value for money
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div className="swiper-pagination"></div>
                    </div> 
                </div>
            </section> 
        </main>
    </div>
  )
}

export default Section
