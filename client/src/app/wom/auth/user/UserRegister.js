import React from 'react'
import { Link } from 'react-router-dom'
import './auth.css'

function UserRegister() {
  return (
    <div className="container-fluid body">
    <div className="row justify-content-center">
      <div className="col-12 col-sm-10 col-md-12 col-lg-11 col-xl-10">
        <div className="card d-flex mx-auto my-5">
          <div className="row">
            <div className="col-md-5 col-sm-12 col-xs-12 c1 p-5">
              <div className="row mb-5 m-3">
                {" "}
                <img
                  src="https://icons.veryicon.com/png/o/construction-tools/industrial-category-icon/auto-parts-2.png"
                  width="70vw"
                  height="55vh"
                  alt=""
                />{" "}
              </div>{" "}
              <img
              src="https://png.pngtree.com/png-vector/20221011/ourmid/pngtree-frame-and-parts-of-a-car-spares-illustrated-in-vector-vector-png-image_39603838.png"
              width="350vw"
              height="250vh"
              className="mx-auto d-flex"
              alt="Teacher"
            /> 
              <div className="row justify-content-center">
                <div className="w-75 mx-md-5 mx-1 mx-sm-2 mb-5 mt-4 px-sm-5 px-md-2 px-xl-1 px-2">
                  <h1 className="wlcm">Welcome to <span style={{color:"#ff4133"}}>User</span> Register</h1>{" "}
                  <span className="sp1">
                    {" "}
                    <span className="px-3 bg-danger rounded-pill"></span>{" "}
                    <span className="ml-2 px-1 rounded-circle"></span>{" "}
                    <span className="ml-2 px-1 rounded-circle"></span>{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-sm-12 col-xs-12 c2 px-5 pt-5">
              <div className="row">
                <nav className="nav font-weight-500 mb-1 mb-sm-2 mb-lg-5 px-sm-2 px-lg-5">
                  {" "}
                  {/* <Link className="a nav-link" to="/vendor_login">
                    Vendor
                  </Link>{" "} */}
                  <Link className="a nav-link ac" to="/user_login">
                    User
                  </Link>{" "}
                  {/* <Link className="a nav-link" to="/admin_login">
                    Admin
                  </Link>{" "} */}
                </nav>
              </div>

              <form
                action=" "
                onsubmit="event.preventDefault()"
                name="myform"
                className="px-5 pb-5"
              >
                <div className="d-flex">
                  {" "}
                  <img
                    src="https://www.shutterstock.com/image-vector/vector-car-parts-tire-isolated-600nw-1962329059.jpg"
                    height="32px"
                    width="32px"
                    alt=""
                    className="mr-3 mt-1"
                  />
                  <h3 className="font-weight-bold">Register</h3>
                </div>{" "}
                <input
                  type="text"
                  name="user"
                  id="#"
                  placeholder="User Name"
                />{" "}
                <input
                  type="email"
                  name="userid"
                  id="#"
                  placeholder="User Email"
                />{" "}
                <input type="password" name="passw" placeholder="Password" />
                {/* <span className="ac" id="forgot">Forgot?</span> */}
                <button className="text-white text-weight-bold bt">
                  Continue
                </button>
                <p>Already have an account? <Link to="/user_login" className="ac" id="register"  style={{border:"none"}}>
                  Login
                </Link></p>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserRegister
