import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
//import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
//import app from '../firebase/firebase.config';

//const provider = new GoogleAuthProvider();

//const auth = getAuth();

//auth.languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
// auth.useDeviceLanguage();
const socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    },
    {
        iconName: 'icofont-pinterest',
        siteLink: '#',
        className: 'pinterest',
    },
]
const title = "Login";
const socialTitle = "Login With Social Media";
const btnText = "Login Now";

const Login = () => {
    //const handleLogin =() => {
        //console.log("btn clicked")
        //signInWithPopup(auth, provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    //const credential = GoogleAuthProvider.credentialFromResult(result);
    //const token = credential.accessToken;
    // The signed-in user info.
    //const user = result.user;
    //alert("Login successfully done")
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  //}).catch((error) => {
    // Handle Errors here.
    //const errorCode = error.code;
    //const errorMessage = error.message;
    //console.log(errorMessage)
    // The email of the user's account used.
    //const email = error.customData.email;
    // The AuthCredential type that was used.
    //const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  //});

    //}
    const [errorMessage, setErrorMessage] = useState("");
    const {signUpWithGmail, login} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogin= (event) => {
      event.preventDefault();
      const form = event.target;
      //console.log(form)
      const email = form.email.value;
      const password = form.password.value;
      //console.log(email, password)
      login(email, password).then((result) => {
        const user = result.user;
        alert("login successful!")
        navigate(from, {replace: true})
      }).catch((error) => {
        const errorMsg = error.message;
        setErrorMessage("please provide valid email $ password!")
      })
    }
    const handleRegister = () => {
      signUpWithGmail().then((result) => {
        const user = result.user;
        navigate(from, {replace: true})
      }).catch((error) => {
        const errorMsg = error.message;
        setErrorMessage("please provide valid email $ password!")
      })
    }
  return (
    <div>
    <div className='login-section padding-tb section-bg'>
        <div className="container">
          <div className="account-wrapper">
            <h3 className='title'>{title}</h3>
            <form className='account-form' onSubmit={handleLogin}>
              <div className="form-group">
                <input type="email" name="email" id="email" placeholder='Email Address *' required/>
              </div>
              <div className="form-group">
                <input type="password" name="password" id="password" placeholder='Password *' required/>
              </div>
              {/* showing error message */}
              <div>
                {
                  errorMessage && (
                    <div className='error-message text-danger mb-1'>{errorMessage}</div>
                  )
                }
              </div>
              <div className="form-group">
                <div className='d-flex justify-content-between flex-wrap pt-sm-2'>
                  <div className='checkgroup'>
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                  <Link to="/forgetpass">Forget Password?</Link>
                </div>
              </div>
              <div className='form-group'>
                <button type='submit' className='d-block lab-btn'>
                  <span>{btnText}</span>
                </button>
              </div>
            </form>

            {/* account bottom */}
            <div className='account-bottom'>
              <span className='d-block cate pt-10'>
                Don't Have An Account? <Link to="/signup">Sign Up</Link>
              </span>
              <span className='or'>
                <span>OR</span>
              </span>
              {/* social login */}
              <h5 className='subtitle'>{socialTitle}</h5>
              <ul className='lab-ul social-icons justify-content-center d-flex'>
                 <li>
                   <button className='github' onClick={handleRegister}><i className='icofont-github'></i></button>
                 </li>
                 <li>
                   <a href='/' className='facebook'><i className='icofont-facebook'></i></a>
                 </li>
                 <li>
                   <a href='/' className='twitter'><i className='icofont-twitter'></i></a>
                 </li>
                 <li>
                   <a href='/' className='linkedin'><i className='icofont-linkedin'></i></a>
                 </li>
                 <li>
                   <a href='/' className='instagram'><i className='icofont-instagram'></i></a>
                 </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Login