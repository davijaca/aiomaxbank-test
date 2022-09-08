import React, { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom'
import background from "../pages/cool-background.png";



const Settings = () => {
    const history = useNavigate()
    const [name, displayName] = useState('')
    const [surname, displaySurname] = useState('')
    const [email, displayEmail] = useState('')
    const [displayPassword] = useState('')
    const [newName, setNewName] = useState('')
    const [newSurname, setNewSurname] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')



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

    async function updateName() {

        const req = await fetch('https://aiomaxbank-test.herokuapp.com/api/name', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token'),
            },
            body: JSON.stringify({
                name: newName
            }),
        })

        const data = await req.json()
        if(data.status === 'ok') {
            setNewName('')
            displayName(newName)
        } else {
            alert(data.error)
            window.location.href = '/home'
        }

    }


    //  SURNAME SECTION

    async function populateSurname() {
        const req = await fetch('https://aiomaxbank-test.herokuapp.com/api/surname', {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
        })
  
        const data = await req.json()
        if(data.status === 'ok') {
            displaySurname(data.surname)
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
                populateSurname()
            }
        }
    })

    async function updateSurname() {

        const req = await fetch('https://aiomaxbank-test.herokuapp.com/api/surname', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token'),
            },
            body: JSON.stringify({
                surname: newSurname
            }),
        })

        const data = await req.json()
        if(data.status === 'ok') {
            setNewSurname('')
            displaySurname(newSurname)
        } else {
            alert(data.error)
            window.location.href = '/home'
        }

    }

        //  EMAIL SECTION

        async function populateEmail() {
            const req = await fetch('https://aiomaxbank-test.herokuapp.com/api/email', {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                },
            })
      
            const data = await req.json()
            if(data.status === 'ok') {
                displayEmail(data.email)
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
                    populateEmail()
                }
            }
        })
    
        async function updateEmail() {
    
            const req = await fetch('https://aiomaxbank-test.herokuapp.com/api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.getItem('token'),
                },
                body: JSON.stringify({
                    email: newEmail
                }),
            })
    
            const data = await req.json()
            if(data.status === 'ok') {
                setNewEmail('')
                displayEmail(newEmail)
            } else {
                alert(data.error)
                window.location.href = '/home'
            }
    
        }


      // PASSWORD SECTION


  async function populatePassword() {
    const req = await fetch('https://aiomaxbank-test.herokuapp.com/api/password', {
        headers: {
            'x-access-token': localStorage.getItem('token'),
        },
    })

    const data = await req.json()
    if(data.status === 'ok') {
        displayPassword(data.password)
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
            populatePassword()
        }
    }
    })

    async function updatePassword() {
        

        const req = await fetch('https://aiomaxbank-test.herokuapp.com/api/password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token'),
            },
            body: JSON.stringify({
                password: newPassword
            }),
        })

        const data = await req.json()
        if(data.status === 'ok') {
            setNewPassword('')
            displayPassword(newPassword)
        } else {
            alert(data.error)
            window.location.href = '/home'
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
                  <li><a>Settings</a></li>
                    <li class="has-children">
                      <a href="#about-section" class="nav-link">{name}</a>
                      <ul class="dropdown">
                        <li><a href="/dashboard" class="nav-link">Dashboard</a></li>
                        <li><a href="/transfer" class="transfer">Transfer</a></li>
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

            <div class="settings_container ">
            <div class="update-name ">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-md-12 mt-lg-5 text-center">
                        <h2 class="form__title">First Name: {name}</h2>
                                <form onSubmit={updateName}>
                                    <input
                                        type='text'
                                        placeholder=''
                                        value={newName}
                                        onChange={(e) => setNewName(e.target.value)}
                                    />
                                <input class="confirm-button" type="submit" value="Update" />
                            </form>
                        <h2 class="form__title">Last Name: {surname}</h2>
                                <form onSubmit={updateSurname}>
                                    <input
                                        type='text'
                                        placeholder=''
                                        value={newSurname}
                                        onChange={(e) => setNewSurname(e.target.value)}
                                    />
                                    <input class="confirm-button" type="submit" value="Update" />
                            </form>
                        </div>
                    </div>
                </div>
            
            </div>

            <div class="update-email">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-md-12 mt-lg-5 text-center">
                        <h2 class="form__title">Email: {email}</h2>
                                <form onSubmit={updateEmail}>
                                    <input
                                        type='text'
                                        placeholder='Under Development'
                                        value={newEmail}
                                        
                                    />
                                    <input class="confirm-button" type="submit" value="Update" />
                            </form>
                            <h2 class="form__title">Password:</h2>
                                <form onSubmit={updatePassword}>
                                    <input
                                        type='text'
                                        placeholder=''
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                    <input class="confirm-button" type="submit" value="Update" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
        </div>
        </div>

        
    )
        
}

export default Settings