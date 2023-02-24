import React, { useState, useEffect } from 'react'

import { getUsers } from '../api/Services';
import { useNavigate } from "react-router-dom";
import { useQuery } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';
function Users() {
  const [users, setUsers] = useState()

  const navigate = useNavigate();
  const { data, isError, isLoading, isFetching } = useQuery('users', getUsers);
  useEffect(() => {
    // get("https://reqres.in/api/users?page=2").then((response) => {
    //   setUsers(response.data.data)
    // })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // fetchData()

  }, [])
  // const fetchData = () => {
  //   getUsers().then((response) => {

  //     setUsers(response.data)
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  // }

  const logout = () => {

    localStorage.clear()
    navigate("/")
  }
  if (isError) {
    return toast.error('Fetching data  Failed');
  }
  console.log({ isFetching })

  return (
    <>
      <button data-testid="button-users" className="btn3 float-right" onClick={logout}>Logout</button>

      {typeof data != "undefined" ?
        <div className="d-flex justify-content-center container flex-wrap">
          {data.data.map((item, index) => {
            return [
              <>

                <div className="card" onClick={() => {
                  navigate(`/user/${item.id}`);
                }} key={index} style={{ width: "18rem" }}>
                  <img className="card-img-top" src={item.avatar} alt="Card image cap" />
                  <div className="card-body">
                    <h4 className="card-text">Name:{item.first_name}{item.last_name}</h4>
                    <p className="card-text">Email:{item.email}</p>
                  </div>
                </div>
              </>
            ]
          })

          }
        </div> : <div>Loading....</div>}

    </>
  )
}
export default Users