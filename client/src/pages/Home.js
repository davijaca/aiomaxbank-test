import React from "react";
import background from "../pages/cool-background.png";


class Home extends React.Component {
    render() {
        return (

    <div class="site-wrap" > 


      <div class="site-mobile-menu site-navbar-target">
        <div class="site-mobile-menu-header">
          <div class="site-mobile-menu-close mt-3">
            <span class="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div class="site-mobile-menu-body"></div>
      </div>
     
      
      <header class="site-navbar js-sticky-header site-navbar-target" role="banner">
  
        <div class="container">
          <div class="row align-items-center">
            <div class="col-6 col-xl-2">

              <h1 class="mb-0 site-logo"><a href="home" class="h2 mb-0">AioMax<span class="text-primary">Bank</span> </a></h1>
              
            </div>
  
            <div class="col-12 col-md-10 d-none d-xl-block">
              <nav class="site-navigation position-relative text-right" role="navigation">
  
                <ul class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li><a href="home" class="nav-link">Home</a></li>
                  <li class="has-children">
                    <a href="#about-section" class="nav-link">About Us</a>
                    <ul class="dropdown">
                      <li><a href="#team-section" class="nav-link">Team</a></li>
                      <li><a href="#pricing-section" class="nav-link">Checking</a></li>
                      <li class="has-children">
                        <a href="#">More Links</a>
                        <ul class="dropdown">
                          <li><a href="#">Menu One</a></li>
                          <li><a href="#">Menu Two</a></li>
                          <li><a href="#">Menu Three</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  
                  
                  <li><a href="login" class="nav-link">Sign In</a></li>
                  <li><a href="home#contact-section" class="nav-link">Contact</a></li>
                  <li class="social"><a href="http://www.facebook.com" class="nav-link"><span class="icon-facebook"></span></a></li>
                  <li class="social"><a href="http://www.twitter.com" class="nav-link"><span class="icon-twitter"></span></a></li>
                  <li class="social"><a href="http://www.linkedin.com" class="nav-link"><span class="icon-linkedin"></span></a></li>
                </ul>
              </nav>
            </div>
            
          </div>
        </div>
        
      </header>

      <div class="carousel overlay"style={{ backgroundImage: `url(${background})` }} data-aos="fade" id="home-section">
        <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-10 mt-lg-5 text-center">
              <div class="slide">
                <h1 class="text-uppercase" data-aos="fade-up">Banking for Humans</h1>
                <h1 class="text-uppercase" data-aos="fade-up">and Dogs</h1>
                <p class="mb-5 desc"  data-aos="fade-up" data-aos-delay="200">While we are the first Bark Bank in the world, we are still proud to offer banking solutions to our human best friends too.</p>
                <div data-aos="fade-up" data-aos-delay="200">
                  <a href="/register"  class="btn  btn-primary mr-2 mb-2">Open an Account</a>
                </div>
              </div>
          </div>
        </div>
      </div>

      <a href="#next" class="mouse smoothscroll">
        <span class="mouse-icon">
          <span class="mouse-wheel"></span>
        </span>
      </a>
      


    <div class="site-section cta-big-image" id="about-section">
      <div class="container">
        <div class="row mb-5 justify-content-center">
          <div class="col-md-8 text-center">
            <h2 class="section-title mb-3" data-aos="fade-up" data-aos-delay="">About Us</h2>
            <p class="lead" data-aos="fade-up" data-aos-delay="100">We're proud to be the first bone and treats bank in the world, delivering solutions to treat hoarding dogs around the globe.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="">
            <figure class="circle-bg">
            <img src="assets/images/img_2.jpg" alt="Free Website Template by Free-Template.co" class="img-fluid"/>
            </figure>
          </div>
          <div class="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="100">
            
            <h3>We Solve Your Treat Hiding Problems</h3>

            <p>No more digging around the backyard, no more hiding bones, treats and toys under the couch, or fighting off other dogs from your precious belongings. At AioMax Bank, your precious treats are safe.</p>

            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            
          </div>
        </div>    
        
      </div>  
    </div>

    <div class="site-section" id="next">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-4 text-center" data-aos="fade-up" data-aos-delay="">
            <img src="assets/images/flaticon-svg/svg/001-wallet.svg" alt="Free Website Template by Free-Template.co" class="img-fluid w-25 mb-4"/>
            <h3 class="card-title">Money Savings</h3>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
          <div class="col-md-4 text-center" data-aos="fade-up" data-aos-delay="100">
            <img src="assets/images/flaticon-svg/svg/004-cart.svg" alt="Free Website Template by Free-Template.co" class="img-fluid w-25 mb-4"/>
            <h3 class="card-title">Online Shoppings</h3>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
          <div class="col-md-4 text-center" data-aos="fade-up" data-aos-delay="200">
            <img src="assets/images/flaticon-svg/svg/006-credit-card.svg" alt="Free Website Template by Free-Template.co" class="img-fluid w-25 mb-4"/>
            <h3 class="card-title">Credit / Debit Cards</h3>
            <p>With our signature Credit and Debit cards, you can withdraw your bones on any authorized ATM in the globe</p>
          </div>

        </div>

        <div class="row">
          <div class="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="">
            <figure class="circle-bg">
            <img src="assets/images/card.png" alt="Free Website Template by Free-Template.co" class="img-fluid"/>
            </figure>
          </div>
          <div class="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="100">
            <div class="mb-4">
              <h3 class="h3 mb-4">Banking Solutions Is Our Priority</h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              
            </div>
              
            <div class="mb-4">
              <ul class="list-unstyled ul-check success">
                <li>Officia quaerat eaque neque</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipisicing elit</li>
              </ul>
              
            </div>

            
            
            
          </div>
        </div>
      </div>
    </div>

    

    
    <section class="site-section border-bottom" id="team-section">
      <div class="container">
        <div class="row mb-5 justify-content-center">
          <div class="col-md-8 text-center">
            <h2 class="section-title mb-3" data-aos="fade-up" data-aos-delay="">Meet the Team</h2>
            <p class="lead" data-aos="fade-up" data-aos-delay="100">More than a team, a family.</p>
          </div>
        </div>
        <div class="row">
          

          
          <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="">
            <div class="team-member">
              <figure>
                <ul class="social">
                  <li><a href="http://www.facebook.com"><span class="icon-facebook"></span></a></li>
                  <li><a href="http://www.twitter.com"><span class="icon-twitter"></span></a></li>
                  <li><a href="http://www.linkedin.com"><span class="icon-linkedin"></span></a></li>
                  <li><a href="http://www.instagram.com"><span class="icon-instagram"></span></a></li>
                </ul>
                <img src="assets/images/person_1.jpg" alt="Image" class="img-fluid"/>
              </figure>
              <div class="p-3">
                <h3>Davi Bentim</h3>
                <span class="position">CEO</span>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div class="team-member">
              <figure>
                <ul class="social">
                  <li><a href="http://www.facebook.com"><span class="icon-facebook"></span></a></li>
                  <li><a href="http://www.twitter.com"><span class="icon-twitter"></span></a></li>
                  <li><a href="http://www.linkedin.com"><span class="icon-linkedin"></span></a></li>
                  <li><a href="http://www.instagram.com"><span class="icon-instagram"></span></a></li>
                </ul>
                <img src="assets/images/person_2.jpg" alt="Image" class="img-fluid"/>
              </figure>
              <div class="p-3">
                <h3>Aioria</h3>
                <span class="position">Treats Specialist</span>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div class="team-member">
              <figure>
                <ul class="social">
                  <li><a href="http://www.facebook.com"><span class="icon-facebook"></span></a></li>
                  <li><a href="http://www.twitter.com"><span class="icon-twitter"></span></a></li>
                  <li><a href="http://www.linkedin.com"><span class="icon-linkedin"></span></a></li>
                  <li><a href="http://www.instagram.com"><span class="icon-instagram"></span></a></li>
                </ul>
                <img src="assets/images/person_3.jpg" alt="Image" class="img-fluid"/>
              </figure>
              <div class="p-3">
                <h3>Maximus</h3>
                <span class="position">Bark Specialist</span>
              </div>
            </div>
          </div>

          
          
        </div>
      </div>
    </section>

    <section class="site-section bg-light" id="pricing-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-center" data-aos="fade-up">
            <h2 class="section-title mb-3">Our Signature Accounts</h2>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="">
            <div class="pricing">
              <h3 class="text-center text-black">Bark Account</h3>
              <div class="price text-center mb-4 ">
                <span><span>$100 credit</span> / month</span>
              </div>
              <ul class="list-unstyled ul-check success mb-5">
                
                <li>No fees if two bones deposited each month</li>
                <li>No storage limits</li>
                <li class="remove">Stores perishable treats</li>
                <li class="remove">Unlimited toy storage</li>
                <li class="remove">Human money accepted too</li>
              </ul>
              <p class="text-center">
                <a href="#" class="btn btn-secondary">Buy Now</a>
              </p>
            </div>
          </div>

          <div class="col-md-6 mb-4 mb-lg-0 col-lg-4 pricing-popular" data-aos="fade-up" data-aos-delay="100">
            <div class="pricing">
              <h3 class="text-center text-black">Woof Account</h3>
              <div class="price text-center mb-4 ">
                <span><span>$200 credit</span> / month</span>
              </div>
              <ul class="list-unstyled ul-check success mb-5">
                
                <li>No fees if two bones deposited each month</li>
                <li>No storage limits</li>
                <li>Stores perishable treats</li>
                <li>Unlimited toy storage</li>
                <li class="remove">Human money accepted too</li>
              </ul>
              <p class="text-center">
                <a href="#" class="btn btn-primary">Buy Now</a>
              </p>
            </div>
          </div>

          <div class="col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div class="pricing">
              <h3 class="text-center text-black">Awooo Account</h3>
              <div class="price text-center mb-4 ">
                <span><span>$750 credit</span> / month</span>
              </div>
              <ul class="list-unstyled ul-check success mb-5">
                
                <li>No fees if two bones deposited each month</li>
                <li>No storage limits</li>
                <li>Stores perishable treats</li>
                <li>Unlimited toy storage</li>
                <li>Human money accepted too</li>
              </ul>
              <p class="text-center">
                <a href="#" class="btn btn-secondary">Buy Now</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="site-section bg-light" id="contact-section" data-aos="fade">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-center">
            <h2 class="section-title mb-3">Contact Us</h2>
          </div>
        </div>
        <div class="row mb-5">
          

          <div class="col-md-4 text-center">
            <p class="mb-4">
              <span class="icon-room d-block h2 text-primary"></span>
              <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
            </p>
          </div>
          <div class="col-md-4 text-center">
            <p class="mb-4">
              <span class="icon-phone d-block h2 text-primary"></span>
              <a href="#">+1 232 3235 324</a>
            </p>
          </div>
          <div class="col-md-4 text-center">
            <p class="mb-0">
              <span class="icon-mail_outline d-block h2 text-primary"></span>
              <a href="#">youremail@domain.com</a>
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 mb-5">

            

            <form action="#" class="p-5 bg-white">
              
              <h2 class="h4 text-black mb-5">Contact Form</h2> 

              <div class="row form-group">
                <div class="col-md-6 mb-3 mb-md-0">
                  <label class="text-black" for="fname">First Name</label>
                  <input type="text" id="fname" class="form-control"/>
                </div>
                <div class="col-md-6">
                  <label class="text-black" for="lname">Last Name</label>
                  <input type="text" id="lname" class="form-control"/>
                </div>
              </div>

              <div class="row form-group">
                
                <div class="col-md-12">
                  <label class="text-black" for="email">Email</label> 
                  <input type="email" id="email" class="form-control"/>
                </div>
              </div>

              <div class="row form-group">
                
                <div class="col-md-12">
                  <label class="text-black" for="subject">Subject</label> 
                  <input type="subject" id="subject" class="form-control"/>
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <label class="text-black" for="message">Message</label> 
                  <textarea name="message" id="message" cols="30" rows="7" class="form-control" placeholder="Write your notes or questions here..."></textarea>
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <input type="submit" value="Send Message" class="btn btn-primary btn-md text-white"/>
                </div>
              </div>

  
            </form>
          </div>
          
        </div>
      </div>
    </section>

    
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <div class="row">
              <div class="col-md-5">
                <h2 class="footer-heading mb-4">About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
              </div>
              <div class="col-md-3 ml-auto">
                <h2 class="footer-heading mb-4">Quick Links</h2>
                <ul class="list-unstyled">
                  <li><a href="#about-section" class="smoothscroll">Terms</a></li>
                  <li><a href="#about-section" class="smoothscroll">Policy</a></li>
                  <li><a href="#about-section" class="smoothscroll">About Us</a></li>
                  <li><a href="#services-section" class="smoothscroll">Services</a></li>
                  <li><a href="#testimonials-section" class="smoothscroll">Testimonials</a></li>
                  <li><a href="#contact-section" class="smoothscroll">Contact Us</a></li>
                </ul>
              </div>
              <div class="col-md-3 footer-social">
                <h2 class="footer-heading mb-4">Follow Us</h2>
                <a href="#" class="pl-0 pr-3"><span class="icon-facebook"></span></a>
                <a href="#" class="pl-3 pr-3"><span class="icon-twitter"></span></a>
                <a href="#" class="pl-3 pr-3"><span class="icon-instagram"></span></a>
                <a href="#" class="pl-3 pr-3"><span class="icon-linkedin"></span></a>
              </div>
            </div>
          </div>
        </div>
        <div class="row pt-5 mt-5 text-center">
          <div class="col-md-12">
            <div class="border-top pt-5">
  
              <p>Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made
                with <i class="icon-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
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