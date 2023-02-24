import React, { useState, useEffect } from 'react'

import { login } from '../api/Services';
import { ToastContainer, toast } from 'react-toastify';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");
  const [usernameerror, setUsernameerror] = useState("");
  const [passworderror, setPassworderror] = useState("")
  const { mutate, isLoading } = useMutation(login, {
    onSuccess: response => {
      console.log(response);
      toast.success('Login Succesfull');
      localStorage.setItem("token", response.token)
      navigate("/users")
    },
    onError: () => {
      toast.error('Login Failed');
    }
  })
  const changeHandler = (e) => {
    console.log("firing")
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
    console.log("firing")
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

      // login(data).then((response) => {
      //   console.log("response", response)
      //   toast.success('Login Succesfull');
      //   localStorage.setItem("token", response.token)
      //   navigate("/users")
      // }).catch((error) => {
      //   console.log("error", error)
      //   toast.error('Login Failed');
      // })

      mutate(data)

    }
  }

  return (
    <>
      <section className="Form my-4 mx-5">
        <div className="container no-gutters">
          <div className="row no-gutters">
            <div className="col-lg-5">
              <img role="img" src="https://images.unsplash.com/photo-1664575601786-b00156752b61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8d29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" className="img-fluid" alt="image"></img>
            </div>
            <div className="col-lg-7 px-5 pt-5" >
              <h4 data-testid="heading">Login</h4>
              <form>
                <div className="form-row mb-4">
                  <div className="col-lg-7">
                    <input role="input" name="username" data-testid="username" type="email" placeholder="Enter email" onChange={(e) => changeHandler(e)} className="form-control my-3 p-2" />
                    <p role="error" style={{ color: "red" }}>{usernameerror}</p>
                  </div>
                </div>

                <div className="form-row mb-4">
                  <div className="col-lg-7">
                    <input role="input" name="password" type="password" data-testid="password" placeholder="********" onChange={(e) => changeHandler(e)} className="form-control my-3 p-2 " />
                    <p role="error" style={{ color: "red" }}>{passworderror}</p>

                  </div>
                </div>

                <div className="form-row">
                  <div className="col-lg-7">
                    <button type="button" data-testid="button" onClick={formHandler} className="btn1 mt-3 mb-5">Login</button>
                  </div>
                </div>
                {/* <a href="#">Forgot password</a> */}
                <p role="error" style={{ color: "red" }}>{userError}</p>
                <p>Don't have an account? <a href="/signup">Register here</a></p>

              </form>
            </div>


          </div>
        </div>
      </section>

    </>
  )
}
export default Login