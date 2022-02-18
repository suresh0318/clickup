import React, { useState } from "react";
import "./login.css";
import {useNavigate} from "react-router-dom"
const Login = () => {
    let navigate = useNavigate();
  const [name, setName] = useState({});
  const onSubmit = () =>{
    window.sessionStorage.setItem("name", name)
navigate("/")
  }
  
  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card my-5">
              <form className="card-body cardbody-color p-lg-5" onSubmit={(e)=>{e.preventDefault()}}>
                <div className="text-center">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                    className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                    width="200px"
                    alt="profile"
                  ></img>
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="Username"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder="User Name"
                  ></input>
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="password"
                  ></input>
                </div>
                <div className="text-center">
                  <button
                  onClick={onSubmit}
                    type="submit"
                    className="btn btn-color px-5 mb-5 w-100"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
