import React, { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom'
import background from "../pages/cool-background.png";

const Showall = () => {

  const history = useNavigate()
  const [name, displayName] = useState('')


  // money formatter function

  function moneyFormatter(num) {
    let p = Number(num).toFixed(2).split('.');
    return (
      '$ ' + (p[0].split('')[0]=== '-' ? '-' : '') +
      p[0]
        .split('')
        .reverse()
        .reduce(function (acc, num, i, orig) {
          return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
        }, '') +
      '.' +
      p[1]
    );
  }



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


 // LOGOUT SECTION

  async function  logOut() {
      localStorage.clear();
      window.location.href = '/home';
  }

  // function to display all users from database

  const [users, setUsers] = useState([])
  useEffect(() => {
      fetch('https://aiomaxbank-test.herokuapp.com/api/showall')
          .then(res => res.json())
          .then(data => {
              setUsers(data)
          })
  }, [])


  // delete row's user from the database by clicking the delete button

    const deleteUser = (email) => {
        fetch('https://aiomaxbank-test.herokuapp.com/api/delete/' + email, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'ok') {
                    alert('User deleted successfully')
                    window.location.href = '/showall'
                } else {
                    alert(data.error)
                }
            })

    }








    return (

        <div class="site-blocks-cover overlay"style={{ backgroundImage: `url(${background})` }} data-aos="fade" id="home-section">
        <div class="dashboard_container">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">All Users</h3>
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Surname</th>
                                            <th>Email</th>
                                            <th>Balance</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user, index) => (
                                            <tr key={index}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.surname}</td>
                                                <td>{user.email}</td>
                                                <td>{moneyFormatter(user.balance)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}



       

export default Showall