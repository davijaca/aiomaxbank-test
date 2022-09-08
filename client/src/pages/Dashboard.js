import React, { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom'
import background from "../pages/cool-background.png";

const Dashboard = () => {
    const history = useNavigate()
    const [name, displayName] = useState('')
    const [balance, displayBalance] = useState('')
    const [newDeposit, setNewDeposit] = useState('')
    const [newWithdraw, setNewWithdraw] = useState('')


    async function populateName() {
        const req = await fetch('http://localhost:1337/api/name', {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
        })

        const data = await req.json()
        if(data.status === 'ok') {
            displayName(data.name)
        } else {
            alert(data.error)
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



    async function populateBalance() {
        const req = await fetch('http://localhost:1337/api/balance', {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
        })

        const data = await req.json()
        if(data.status === 'ok') {
            displayBalance(data.balance)
        } else {
            alert(data.error)
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

    async function Deposit() {

        const req = await fetch('http://localhost:1337/api/balance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token'),
            },
            body: JSON.stringify({
                balance: +balance + +newDeposit,
            }),
        })

        const data = await req.json()
        if(data.status === 'ok') {
            setNewDeposit('')
            displayBalance(newDeposit)
        } else {
            alert(data.error)
        }

    }

    async function Withdraw() {

        const req = await fetch('http://localhost:1337/api/balance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token'),
            },
            body: JSON.stringify({
                balance: +balance - +newWithdraw,
            }),
        })

        const data = await req.json()
        if(data.status === 'ok') {
            setNewWithdraw('')
            displayBalance(newWithdraw)
        } else {
            alert(data.error)
        }

    }

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
                  <li><a>Dashboard</a></li>
                    <li class="has-children">
                      <a href="#about-section" class="nav-link">{name}</a>
                      <ul class="dropdown">
                        <li><a href="/transfer" class="transfer">Transfer</a></li>
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
                <div class="container">
                <div class="row align-items-center justify-content-center">
                  <div class="col-md-10 mt-lg-5 text-center">
                     
                  </div>
                </div>
              </div>
        <div class="dashboard_container">

        <div class="balance"><h1>Your balance: ${balance || '0'}</h1></div>    
        <div class="deposit">
            <div class="test1 overlay" id="home-section">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-md-12 mt-lg-5 text-center">
                        <h1 class="form__title">Deposit</h1>
                                <form onSubmit={Deposit}>
                                    <input
                                        type='number'
                                        placeholder='Amount'
                                        value={newDeposit}
                                        onChange={(e) => setNewDeposit(e.target.value)}
                                    />
                                <input class="confirm-button" type="submit" value="Confirm" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="withdraw">
            <div class="test1 overlay" id="home-section">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-md-12 mt-lg-5 text-center">
                        <h1 class="form__title">Withdraw</h1>
                                <form onSubmit={Withdraw}>
                                    <input
                                        type='number'
                                        placeholder='Amount'
                                        value={newWithdraw}
                                        onChange={(e) => setNewWithdraw(e.target.value)}
                                    />
                                    <input class="confirm-button" type="submit" value="Confirm" />
                            </form>

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

export default Dashboard