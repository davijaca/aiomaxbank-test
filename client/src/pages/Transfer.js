import React, { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom'
import background from "../pages/cool-background.png";

const Transfer = () => {
    const history = useNavigate()
    const [name, displayName] = useState('')



    // NAME SECTION


    async function populateName() {
        const req = await fetch('https://aiomaxbank-test.herokuapp.com/api/name', {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
        })

        const data = await req.json()
        if(data.status === 'ok') {
            displayName(data.name)
        } else {
            alert(data.error)
            window.location.href = '/home'
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.decode(token)
            if(!user) {
                localStorage.removeItem('token')
                history.replace('/login')
            } else {
                populateName()
            }
        }
    })
    

    // Display the current balance of the logged in user

    const [balance, displayBalance] = useState('')
    async function populateBalance() {
        const req = await fetch('https://aiomaxbank-test.herokuapp.com/api/balance', {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
        })

        const data = await req.json()
        if(data.status === 'ok') {
            displayBalance(data.balance)
        } else {
            alert(data.error)
            window.location.href = '/home'
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.decode(token)
            if(!user) {
                localStorage.removeItem('token')
                history.replace('/login')
            } else {
                populateBalance()
            }
        }
    })


    // create a transfer of balance between two users without token

    async function transferBalance(e) {

        e.preventDefault();

        const req = await fetch('https://aiomaxbank-test.herokuapp.com/api/transfer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: document.getElementById('from').value,
                to: document.getElementById('to').value,
                amount: document.getElementById('amount').value,
            }),
        })

        const data = await req.json()
        if(data.status === 'ok') {
            alert(data.message)
        } else {
            alert(data.error)
        }
    }



   // LOGOUT SECTION

    async function  logOut() {
        localStorage.clear();
        window.location.href = '/home';
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
                  <li><a>Transfer</a></li>
                    <li class="has-children">
                      <a href="#about-section" class="nav-link">{name}</a>
                      <ul class="dropdown">
                        <li><a href="/dashboard" class="nav-link">Dashboard</a></li>
                        <li><a href="/settings" class="nav-link">Settings</a></li>
                        <li><a onClick={logOut} class="nav-link">Log Out</a></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              
            </div>
          </div>
          
        </header>
        <div class="site-blocks-cover overlay"style={{ backgroundImage: `url(${background})` }} data-aos="fade" id="home-section">
            <div class="transfer_container">
            <div class="row align-items-center justify-content-center"><h1>Transfer</h1></div> 
                <div class="test1 overlay" data-aos="fade" id="home-section">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-12 mt-lg-5 text-center">
                            <div class="transfer">
                                <div class="row align-items-center justify-content-center">
                                    <div class="col-md-12 mt-lg-5 text-center">
                                        <form onSubmit={transferBalance}>
                                            <input type="text" id="from" placeholder="From" required/>
                                            <input type="text" id="to" placeholder="To" required/>
                                            <input type="numeric" id="amount" placeholder="Amount" required/>
                                            <button type="submit">Transfer</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
        </div>

    )
}

export default Transfer


//<div class="transfer_form">
/* <label htmlFor="from">From</label>
<input type="text" class="form-control" id="from" placeholder="From" />
</div>
<div class="transfer_form">
<label htmlFor="to">To</label>
<input type="text" class="form-control" id="to" placeholder="To" />
</div>
<div class="transfer_form">
<label htmlFor="amount">Amount</label>
<input type="text" class="form-control" id="amount" placeholder="Amount" />
</div>
<button type="submit" class="confirm-button" onClick={transferBalance}>Transfer</button> */