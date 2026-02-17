import React from 'react'
import { useState,useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const title = "Register";
const socialTitle = "Login With Social Media";
const btnText = "Register Now";

const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const {signUpWithGmail, createUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleRegister = () => {
      signUpWithGmail().then((result) => {
        const user = result.user;
        navigate(from, {replace: true})
      }).catch((error) => {
        const errorMsg = error.message;
        setErrorMessage("please provide valid email $ password!")
      })
    }
    const handleSignUp =(event) => {
        event.preventDefault();
      const form = event.target;
      //console.log(form)
      const email = form.email.value;
      const password = form.password.value;
      const confirmPassword = form.confirmPassword.value;
      //console.log(email, password, confirmPassword)
      if(password !== confirmPassword){
        setErrorMessage("confirm password doesn't match with password");
      }else{
        setErrorMessage("");
        createUser(email, password).then((userCredentials) => {
            const user = userCredentials.user;
            alert("Account Created Successfully done!!!");
            navigate(from, {replace: true})
        }).catch((error) => {
            console.log(error.message);
            alert(`${error.message}`)
        })
      }
    }
  return (
    <div className='login-section padding-tb section-bg'>
        <div className="container">
          <div className="account-wrapper">
            <h3 className='title'>{title}</h3>
            <form className='account-form' onSubmit={handleSignUp}>
              <div className="form-group">
                <input type="text" name="name" id="name" placeholder='Userr Name *' required/>
              </div>
              <div className="form-group">
                <input type="email" name="email" id="email" placeholder='Email Address *' required/>
              </div>
              <div className="form-group">
                <input type="password" name="password" id="password" placeholder='Password *' required/>
              </div>
              <div className="form-group">
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder='confirm Password *' required/>
              </div>
              {/* showing error message */}
              <div>
                {
                  errorMessage && (
                    <div className='error-message text-danger mb-1'>{errorMessage}</div>
                  )
                }
              </div>
              {/* <div className="form-group">
                <div className='d-flex justify-content-between flex-wrap pt-sm-2'>
                  <div className='checkgroup'>
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div> 
                  <Link to="/forgetpass">Forget Password?</Link>
                </div>
              </div> */}
              <div className='form-group'>
                <button type='submit' className='d-block lab-btn'>
                  <span>{btnText}</span>
                </button>
              </div>
            </form>

            {/* account bottom */}
            <div className='account-bottom'>
              <span className='d-block cate pt-10'>
                Already Have An Account? <Link to="/login">Login</Link>
              </span>
              <span className='or'>
                <span>OR</span>
              </span>
              {/* social login */}
              <h5 className='subtitle'>{socialTitle}</h5>
              <ul className='lab-ul social-iccons justify-content-center d-flex'>
                 <li>
                   <button className='github m-1' onClick={handleRegister}><i className='icofont-github'></i></button>
                 </li>
                 <li>
                   <a href='/' className='facebook m-1'><i className='icofont-facebook'></i></a>
                 </li>
                 <li>
                   <a href='/' className='twitter m-1'><i className='icofont-twitter'></i></a>
                 </li>
                 <li>
                   <a href='/' className='linkedin m-1'><i className='icofont-linkedin'></i></a>
                 </li>
                 <li>
                   <a href='/' className='instagram m-1'><i className='icofont-instagram'></i></a>
                 </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SignUp