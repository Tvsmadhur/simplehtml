import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";

import { getuserById, getUsers } from '../api/Services'
import { useQuery } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';
function User() {
  const params = useParams();
  const [user, setUser] = useState()
  const navigate = useNavigate();

  const { data, isError, isLoading } = useQuery(['user', params.id], () => getuserById(params.id));



  useEffect(() => {

    //   const getUser = () => {
    //     getuserById(params.id).then((response) => {
    //       console.log("1")
    //       setUser(response.data)
    //     }).catch((error) => {
    //       console.log(error)
    //     })
    //   }
    //   getUser()
    // setUser(data)


  }, [])

  const logout = () => {

    localStorage.clear()
    navigate("/")
  }
  if (isError) {
    return toast.error('Fetching data Failed');
  }


  return (
    <>
      <button className="btn3 float-right" onClick={logout}>Logout</button>
      <div className="d-flex justify-content-center container">
        {typeof data != "undefined"
          ?
          <>
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={data.data.avatar} alt="Card image cap" />
              <div className="card-body">
                <h4 className="card-title">Name:{data.data.first_name}{data.data.last_name}</h4>
                <p className="card-text">Email:{data.data.email}</p>

              </div>
            </div>
          </> : <div>Loading</div>}
      </div>

    </>
  )
}
export default User