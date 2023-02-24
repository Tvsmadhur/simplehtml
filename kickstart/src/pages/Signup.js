import React, { useState, useEffect } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from 'react-query';
import { signup } from '../api/Services';

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");
  const [usernameerror, setUsernameerror] = useState("");
  const [passworderror, setPassworderror] = useState("");
  const { mutate, isLoading } = useMutation(signup, {
    onSuccess: response => {
      console.log(response);
      toast.success('Registration Succesfull');
      localStorage.setItem("token", response.token)
      navigate("/users")
    },
    onError: () => {
      toast.error('Registration failed');
    }
  })

  const changeHandler = (e) => {
    setPassworderror("");
    setUserError("");
    setUsernameerror("")
    if (e.target.name == "username") {
      setUsername(e.target.value)
    }
    else if (e.target.name == "password") {
      setPassword(e.target.value)
    }
  }
  const formHandler = () => {
    if (username == "" && password == "") {
      setUserError('All fields are required')
    }
    else if (username == "") {
      setUsernameerror("Username is required")
    }
    else if (password == "") {
      setPassworderror("Password is required");
    }
    else {
      const data = {
        email: username,
        password: password
      }
      // signup(data).then((response) => {
      //   console.log("response", response)
      //   toast.success('Registration Succesfull');
      //   localStorage.setItem("token", response.token)
      //   navigate("/users")
      // }).catch((error) => {
      //   console.log("error", error)
      //   toast.error('Registration Failed');
      // })
      mutate(data)
    }

  }
  return (
    <>
      <section className="Form my-4 mx-5">
        <a href="/"> <button className="btn2" data-testid="back">Back</button></a>
        <div className="container no-gutters">
          <div className="row no-gutters">
            <div className="col-lg-5">
              <img src="https://images.unsplash.com/photo-1664575601786-b00156752b61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8d29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" className="img-fluid" alt="image"></img>
            </div>
            <div className="col-lg-7 px-5 pt-5" >
              <h4>Register</h4>
              <form>
                <div className="form-row mb-4">
                  <div className="col-lg-7">
                    <input name="username" type="email" placeholder="Enter email" onChange={changeHandler} className="form-control my-3 p-2" />
                    <p style={{ color: "red" }}>{usernameerror}</p>
                  </div>
                </div>

                <div className="form-row mb-4">
                  <div className="col-lg-7">
                    <input name="password" type="password" placeholder="Password" onChange={changeHandler} className="form-control my-3 p-2 " />

                    <p style={{ color: "red" }}>{passworderror}</p>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <button type="button" className="btn1 mt-3 mb-5" onClick={formHandler}>Register</button>
                  </div>
                </div>
                <p style={{ color: "red" }}>{userError}</p>


              </form>
            </div>


          </div>
        </div>
      </section>

    </>
  )
}
export default Signup