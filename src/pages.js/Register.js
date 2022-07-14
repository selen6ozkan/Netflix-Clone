import React from 'react'
import { Redirect, Link } from "react-router-dom";

const Register = (props) => {
    let {email,setEmail,pass,setPass}=props;
    
    return (
       
         
      <header className="showcase-content"     style={{ 
        backgroundImage: `url("https://springboard-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225-xl.jpg" )` , 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width:'100%' ,
        height:'100vh'
      }}>
        <div className="logo">
        <img src="https://i.ibb.co/r5krrdz/logo.png" />
      </div>

      <div className="showcase-content">
        <div className="formm">
          <form>
            <h1>Register</h1>
            <div className="info">
              <input
                className="email"
                type="email"
                placeholder="Email or phone number"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="email"
                type="password"
                placeholder="Password"
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <div className="btn">
            <Link to="/login">
              <button class="btn-danger" >
                Register
              </button>
              </Link>


              <Link to="/login">
              <button class="btn-primary" >
                Login
              </button>
              </Link>
            </div>

            <div class="help">
              <div>
                <input value="true" type="checkbox" />
                <label>Remember me</label>
              </div>

              <a href="https://www.netflix.com/dz-en/LoginHelp">Need Help ?</a>
            </div>
          </form>
        </div>
        </div>
      </header>
      
    )
}

export default Register
