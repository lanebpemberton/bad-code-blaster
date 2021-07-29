import React from 'react'
import { useMutation } from '@apollo/client'
import { MUTATION_LOGIN, MUTATION_CREATE_USER } from '../utils/mutations'
import { useHistory } from 'react-router-dom';
import '../styles/login.css'

function hideElem() {
    var cardFront = document.getElementById("cardFront");
    var cardBack = document.getElementById("cardBack");

    if (cardFront.style.display === "block" || !cardFront.style.display) {
        cardBack.style.display = "block"
        cardFront.style.display = "none"
    } else if (cardBack.style.display === "block" || !cardBack.style.display) {
        cardBack.style.display = "none"
        cardFront.style.display = "block"
    } else {
        console.error('annoying error message')
    }
}


function LoginUsers() {
    const history = useHistory();
    const [loginUser, loginUserState] = useMutation(MUTATION_LOGIN);
    const [createUser, createUserState] = useMutation(MUTATION_CREATE_USER);

    const handleLoginSubmit = event => {
        event.preventDefault();
        console.log('login form submit', event.target.email.value, event.target.password.value)
        loginUser({ 
            variables: {
                // variables
                email: event.target.email.value,
                password: event.target.password.value,
            }
        }).then(handleLoginSuccess, handleLoginFailure);
    }
    const handleLoginSuccess = ({data}) => {
        // set userId in local storage
            localStorage.setItem("loggedInUserId", data.login._id)
        // redirect to home
            history.push('/home')
    }
    const handleLoginFailure = error => {
        // no op for now?
        alert('Error: Login failed')
        console.error(error);
    }

    const handleSignupSubmit = event => {
        event.preventDefault()
        createUser({
            variables : {
                // variables
                username: event.target.username.value,
                email: event.target.email.value,
                password: event.target.password.value,
                ship_id: "60ff4a746d4e5e393cd036d8", //hard-coded value for now
            }
        }).then(handleSignupSuccess, handleSignupFailure);
    }
    const handleSignupSuccess = ({data}) => {
        // set userId in local storage
        localStorage.setItem("loggedInUserId", data.addUser._id)
        // redirect to home
        history.push('/home')
    }
    const handleSignupFailure = error => {
        alert('Error: Account creation failed')
        console.error(error);
    }

    return(
        <div className= "default background">
            <div className= "default border">
                <div className="loginTitle"></div>
                <div className= "loginBox">
                    <div className="card-front" id="cardFront">
                        <h1 className="title font card-title">LOGIN</h1>
                        <form className="login-form" onSubmit={handleLoginSubmit}>
                            <input name="email" type="email" id="email-login" className="input-box"
                            placeholder="Your Email here" required/>
                            <input name="password" type="password" id="password-login" className="input-box"
                            placeholder="Your Password here" required/>
                            <button type="submit" id="loginButton" className="submit-btn card-text">Submit</button> 
                            <input type="checkbox"/><span>Remember Me</span>
                        </form>
                        <button type="button" id="signupShow" onClick={hideElem} className="btn">Sign Up</button>
                    </div>
                    <div className="card-back" id="cardBack" style={{display:'none'}}>
                        <h1 className="title font card-title">Sign Up</h1>
                        <form onSubmit={handleSignupSubmit}>
                            <input name="username" type="username" id="signupUsername" className="input-box"
                            placeholder="Your Username here" required/>
                            <input name="email" type="email" id="signupEmail" className="input-box"
                            placeholder="Your Email here" required/>
                            <input name="password" type="password" id="signupPassword" className="input-box"
                            placeholder="Your Password here" required/>
                            <button type="submit" id="signUpbtn" className="btn card-text">Sign Up</button>
                        </form>
                        <button type="button" id="loginShow" onClick={hideElem} className="submit-btn">Already Have an account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginUsers