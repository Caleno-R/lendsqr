import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import "../../styles/loginSheet.css";

const LoginPage = () => {
    const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-logo-loti">
        <div className="">
        </div>
        <div>
        </div>
      </div>
      <div className="login-head-form">
        <div className="login-head-info">
          <h3 className="login-head">Welcome!</h3>
          <p className="login-info">Enter details to login.</p>
        </div>
        <div  className="login-form">
          <form>
            <div className="form-email">
              <input type="email" placeholder="Email" className="login-input"/>
            </div>
            <div className="form-password">
              <input type="password" placeholder="Password" className="login-input"/>
              <div>show</div>
            </div>
            <p><Link to="" className="forgot-password">forgot password?</Link></p>
            <div className="">
              <button type="submit" className="login-btn btn-text">log in</button>
            </div> 
          </form>
        </div>
      </div>
    </div>

  );

}
export default LoginPage;

