import React, { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom'
import background from "../pages/cool-background.png";

const Showall = () => {

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

  // delete a specific user by clicking the delete button

    const deleteUser = (id) => {
        fetch('https://aiomaxbank-test.herokuapp.com/api/showall' + id, {
            method: 'DELETE',
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

        <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh' }}>
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
                                            <th>Name</th>
                                            <th>Surname</th>
                                            <th>Email</th>
                                            <th>Balance</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user, index) => (
                                            <tr key={index}>
                                                <td>{user.name}</td>
                                                <td>{user.surname}</td>
                                                <td>{user.email}</td>
                                                <td>{user.balance}</td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => deleteUser(user.email)}>Delete</button>
                                                </td>
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
    )
}



       

export default Showall