import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import background from "../pages/cool-background.png";


function App() {
  const history = useNavigate()
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [balance] = useState('')

  async function registerUser(event) {
    event.preventDefault()

    const response = await fetch('http://localhost:1337/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        surname,
        email,
        password,
        balance
      })
    })

    const data = await response.json()

    if(data.status === 'ok') {
      history('/login')
    }
  }

  


  return (

    <div class="site-wrap" >

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
    
    <div class="site-blocks-cover overlay"style={{ backgroundImage: `url(${background})` }} data-aos="fade" id="home-section">
            <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-md-10 mt-lg-5 text-center">
                 
              </div>
            </div>
          </div>
    <div class="register-or-login">
    <div class="test1 overlay" data-aos="fade" id="home-section">
    <div class="container">
    <div class="row align-items-center justify-content-center">
    <div class="col-md-12 mt-lg-5 text-center">
      <h1 class="form__title">Register</h1>
      <form class="form" id="login" onSubmit={registerUser}>
        <input class="form__input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          autofocus placeholder="Name"
        /><br />
        <input class="form__input"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          type="text"
          autofocus placeholder="Surname"
        /><br />
        <input class="form__input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          autofocus placeholder="Email"
        /><br />
        <input class="form__input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          autofocus placeholder="Password"
        /><br />
        <button class="form__button" type="submit">Continue</button>
        <p class="form__text">
                <a class="form__link" href="login" id="linkLogin">Already have an account? Sign in</a>
        </p>
      </form>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );

}

export default App;
