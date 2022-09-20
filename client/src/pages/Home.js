import React from "react";
import background from "../pages/cool-background.png";
import Map from "./Map";



class Home extends React.Component {
    render() {
        return (

    <div className="site-wrap" > 


      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>
     
      
      <header className="site-navbar js-sticky-header site-navbar-target" role="banner">
  
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-xl-2">

              <h1 className="mb-0 site-logo"><a href="home" className="h2 mb-0">AioMax<span className="text-primary">Bank</span> </a></h1>
              
            </div>
  
            <div className="col-12 col-md-10 d-none d-xl-block">
              <nav className="site-navigation position-relative text-right" role="navigation">
  
                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li><a href="home" className="nav-link">Home</a></li>
                  <li className="has-children">
                    <a href="#about-section" className="nav-link">About Us</a>
                    <ul className="dropdown">
                      <li><a href="#team-section" className="nav-link">Team</a></li>
                      <li><a href="#pricing-section" className="nav-link">Checking</a></li>
                      <li className="has-children">
                        <a href="#">More Links</a>
                        <ul className="dropdown">
                          <li><a href="#">Menu One</a></li>
                          <li><a href="#">Menu Two</a></li>
                          <li><a href="#">Menu Three</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  
                  
                  <li><a href="login" className="nav-link">Sign In</a></li>
                  <li><a href="home#contact-section" className="nav-link">Contact</a></li>
                  <li className="social"><a href="http://www.facebook.com" className="nav-link"><span className="icon-facebook"></span></a></li>
                  <li className="social"><a href="http://www.twitter.com" className="nav-link"><span className="icon-twitter"></span></a></li>
                  <li className="social"><a href="http://www.linkedin.com" className="nav-link"><span className="icon-linkedin"></span></a></li>
                </ul>
              </nav>
            </div>
            
          </div>
        </div>
        
      </header>

      <div className="carousel overlay"style={{ backgroundImage: `url(${background})` }} data-aos="fade" id="home-section">
        <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-10 mt-lg-5 text-center">
              <div className="slide">
                <h1 className="text-uppercase" data-aos="fade-up">Banking for Humans</h1>
                <h1 className="text-uppercase" data-aos="fade-up">and Dogs</h1>
                <p className="mb-5 desc"  data-aos="fade-up" data-aos-delay="200">While we are the first Bark Bank in the world, we are still proud to offer banking solutions to our human best friends too.</p>
                <div data-aos="fade-up" data-aos-delay="200">
                  <a href="/register"  className="btn  btn-primary mr-2 mb-2">Open an Account</a>
                </div>
              </div>
          </div>
        </div>
      </div>

      <a href="#next" className="mouse smoothscroll">
        <span className="mouse-icon">
          <span className="mouse-wheel"></span>
        </span>
      </a>
      


    <div className="site-section cta-big-image" id="about-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="section-title mb-3" data-aos="fade-up" data-aos-delay="">About Us</h2>
            <p className="lead" data-aos="fade-up" data-aos-delay="100">We're proud to be the first bone and treats bank in the world, delivering solutions to treat hoarding dogs around the globe.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="">
            <figure className="circle-bg">
            <img src="assets/images/img_2.jpg" alt="Free Website Template by Free-Template.co" className="img-fluid"/>
            </figure>
          </div>
          <div className="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="100">
            
            <h3>We Solve Your Treat Hiding Problems</h3>

            <p>No more digging around the backyard, no more hiding bones, treats and toys under the couch, or fighting off other dogs from your precious belongings. At AioMax Bank, your precious treats are safe.</p>

            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            
          </div>
        </div>    
        
      </div>  
    </div>

    <div className="site-section" id="next">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-4 text-center" data-aos="fade-up" data-aos-delay="">
            <img src="assets/images/flaticon-svg/svg/001-wallet.svg" alt="Free Website Template by Free-Template.co" className="img-fluid w-25 mb-4"/>
            <h3 className="card-title">Money Savings</h3>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
          <div className="col-md-4 text-center" data-aos="fade-up" data-aos-delay="100">
            <img src="assets/images/flaticon-svg/svg/004-cart.svg" alt="Free Website Template by Free-Template.co" className="img-fluid w-25 mb-4"/>
            <h3 className="card-title">Online Shoppings</h3>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
          <div className="col-md-4 text-center" data-aos="fade-up" data-aos-delay="200">
            <img src="assets/images/flaticon-svg/svg/006-credit-card.svg" alt="Free Website Template by Free-Template.co" className="img-fluid w-25 mb-4"/>
            <h3 className="card-title">Credit / Debit Cards</h3>
            <p>With our signature Credit and Debit cards, you can withdraw your bones on any authorized ATM in the globe</p>
          </div>

        </div>

        <div className="row">
          <div className="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="">
            <figure className="circle-bg">
            <img src="assets/images/card.png" alt="Free Website Template by Free-Template.co" className="img-fluid"/>
            </figure>
          </div>
          <div className="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="100">
            <div className="mb-4">
              <h3 className="h3 mb-4">Banking Solutions Is Our Priority</h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              
            </div>
              
            <div className="mb-4">
              <ul className="list-unstyled ul-check success">
                <li>Officia quaerat eaque neque</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipisicing elit</li>
              </ul>
              
            </div>

            
            
            
          </div>
        </div>
      </div>
    </div>

    

    
    <section className="site-section border-bottom" id="team-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="section-title mb-3" data-aos="fade-up" data-aos-delay="">Meet the Team</h2>
            <p className="lead" data-aos="fade-up" data-aos-delay="100">More than a team, a family.</p>
          </div>
        </div>
        <div className="row">
          

          
          <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="">
            <div className="team-member">
              <figure>
                <ul className="social">
                  <li><a href="http://www.facebook.com"><span className="icon-facebook"></span></a></li>
                  <li><a href="http://www.twitter.com"><span className="icon-twitter"></span></a></li>
                  <li><a href="http://www.linkedin.com"><span className="icon-linkedin"></span></a></li>
                  <li><a href="http://www.instagram.com"><span className="icon-instagram"></span></a></li>
                </ul>
                <img src="assets/images/person_1.jpg" alt="Image" className="img-fluid"/>
              </figure>
              <div className="p-3">
                <h3>Davi Bentim</h3>
                <span className="position">CEO</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="team-member">
              <figure>
                <ul className="social">
                  <li><a href="http://www.facebook.com"><span className="icon-facebook"></span></a></li>
                  <li><a href="http://www.twitter.com"><span className="icon-twitter"></span></a></li>
                  <li><a href="http://www.linkedin.com"><span className="icon-linkedin"></span></a></li>
                  <li><a href="http://www.instagram.com"><span className="icon-instagram"></span></a></li>
                </ul>
                <img src="assets/images/person_2.jpg" alt="Image" className="img-fluid"/>
              </figure>
              <div className="p-3">
                <h3>Aioria</h3>
                <span className="position">Treats Specialist</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="team-member">
              <figure>
                <ul className="social">
                  <li><a href="http://www.facebook.com"><span className="icon-facebook"></span></a></li>
                  <li><a href="http://www.twitter.com"><span className="icon-twitter"></span></a></li>
                  <li><a href="http://www.linkedin.com"><span className="icon-linkedin"></span></a></li>
                  <li><a href="http://www.instagram.com"><span className="icon-instagram"></span></a></li>
                </ul>
                <img src="assets/images/person_3.jpg" alt="Image" className="img-fluid"/>
              </figure>
              <div className="p-3">
                <h3>Maximus</h3>
                <span className="position">Bark Specialist</span>
              </div>
            </div>
          </div>

          
          
        </div>
      </div>
    </section>

    <section className="site-section bg-light" id="pricing-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center" data-aos="fade-up">
            <h2 className="section-title mb-3">Our Signature Accounts</h2>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="">
            <div className="pricing">
              <h3 className="text-center text-black">Bark Account</h3>
              <div className="price text-center mb-4 ">
                <span><span>$100 credit</span> / month</span>
              </div>
              <ul className="list-unstyled ul-check success mb-5">
                
                <li>No fees if two bones deposited each month</li>
                <li>No storage limits</li>
                <li className="remove">Stores perishable treats</li>
                <li className="remove">Unlimited toy storage</li>
                <li className="remove">Human money accepted too</li>
              </ul>
              <p className="text-center">
                <a href="#" className="btn btn-secondary">Buy Now</a>
              </p>
            </div>
          </div>

          <div className="col-md-6 mb-4 mb-lg-0 col-lg-4 pricing-popular" data-aos="fade-up" data-aos-delay="100">
            <div className="pricing">
              <h3 className="text-center text-black">Woof Account</h3>
              <div className="price text-center mb-4 ">
                <span><span>$200 credit</span> / month</span>
              </div>
              <ul className="list-unstyled ul-check success mb-5">
                
                <li>No fees if two bones deposited each month</li>
                <li>No storage limits</li>
                <li>Stores perishable treats</li>
                <li>Unlimited toy storage</li>
                <li className="remove">Human money accepted too</li>
              </ul>
              <p className="text-center">
                <a href="#" className="btn btn-primary">Buy Now</a>
              </p>
            </div>
          </div>

          <div className="col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="pricing">
              <h3 className="text-center text-black">Awooo Account</h3>
              <div className="price text-center mb-4 ">
                <span><span>$750 credit</span> / month</span>
              </div>
              <ul className="list-unstyled ul-check success mb-5">
                
                <li>No fees if two bones deposited each month</li>
                <li>No storage limits</li>
                <li>Stores perishable treats</li>
                <li>Unlimited toy storage</li>
                <li>Human money accepted too</li>
              </ul>
              <p className="text-center">
                <a href="#" className="btn btn-secondary">Buy Now</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="site-section bg-light" id="contact-section" data-aos="fade">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="section-title mb-3">Contact Us</h2>
          </div>
        </div>
        <div className="row mb-5">
          

          <div className="col-md-4 text-center">
            <p className="mb-4">
              <span className="icon-room d-block h2 text-primary"></span>
              <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
            </p>
          </div>
          <div className="col-md-4 text-center">
            <p className="mb-4">
              <span className="icon-phone d-block h2 text-primary"></span>
              <a href="#">+1 232 3235 324</a>
            </p>
          </div>
          <div className="col-md-4 text-center">
            <p className="mb-0">
              <span className="icon-mail_outline d-block h2 text-primary"></span>
              <a href="#">youremail@domain.com</a>
            </p>
          </div>
        </div>
        <div className="map">

        <Map />
        
        </div>
      </div>
    </section>

    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-5">
                <h2 className="footer-heading mb-4">About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
              </div>
              <div className="col-md-3 ml-auto">
                <h2 className="footer-heading mb-4">Quick Links</h2>
                <ul className="list-unstyled">
                  <li><a href="#about-section" className="smoothscroll">Terms</a></li>
                  <li><a href="#about-section" className="smoothscroll">Policy</a></li>
                  <li><a href="#about-section" className="smoothscroll">About Us</a></li>
                  <li><a href="#services-section" className="smoothscroll">Services</a></li>
                  <li><a href="#testimonials-section" className="smoothscroll">Testimonials</a></li>
                  <li><a href="#contact-section" className="smoothscroll">Contact Us</a></li>
                </ul>
              </div>
              <div className="col-md-3 footer-social">
                <h2 className="footer-heading mb-4">Follow Us</h2>
                <a href="#" className="pl-0 pr-3"><span className="icon-facebook"></span></a>
                <a href="#" className="pl-3 pr-3"><span className="icon-twitter"></span></a>
                <a href="#" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
                <a href="#" className="pl-3 pr-3"><span className="icon-linkedin"></span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12">
            <div className="border-top pt-5">
  
              <p>Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made
                with <i className="icon-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
              </p>
        
        
            </div>
          </div>
          
        </div>
      </div>
    </footer>
      </div>
   
    </div>
        )
    }
}

export default Home