import React from 'react'
import { useMutation } from '@apollo/client'
import { MUTATION_LOGIN, MUTATIONCREATEUSER } from '../utils/mutations'
import { useHistory } from 'react-router-dom';
import '../styles/login.css'
import '../styles/loginuser.css'

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
    const [createUser, createUserState] = useMutation(MUTATIONCREATEUSER);

    const handleLoginSubmit = event => {
        event.preventDefault();
        console.log('login form submit', event.target.email.value, event.target.password.value)
        loginUser({ 
            variables: {
                // variables
            }
        }).then(handleLoginSuccess, handleLoginFailure);
    }
    const handleLoginSuccess = () => {
        // set userId in local storage
        // redirect to home
    }
    const handleLoginFailure = error => {
        // no op for now?
        console.error(error);
    }

    const handleSignupSubmit = event => {
        event.preventDefault()
        console.log('signup form submit', event.target.username.value, event.target.email.value, event.target.password.value)
        createUser({
            variables : {
                // variables
            }
        }).then(handleSignupSuccess, handleSignupFailure);
    }
    const handleSignupSuccess = () => {
        // set userId in local storage
        // redirect to home
    }
    const handleSignupFailure = error => {
        console.error(error);
    }

    return(
        <div className= "background">
            <div className= "border">
                <div className="title"></div>
                <div className= "box">
                    <div className="card-front" id="cardFront">
                        <h2 className="card-text">LOGIN</h2>
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
                        <h2>Sign Up</h2>
                        <form onSubmit={handleSignupSubmit}>
                            <input name="username" type="username" id="signupUsername" className="input-box"
                            placeholder="Your Username here" required/>
                            <input name="email" type="email" id="signupEmail" className="input-box"
                            placeholder="Your Email here" required/>
                            <input name="password" type="password" id="signupPassword" className="input-box"
                            placeholder="Your Password here" required/>
                            <button type="button" id="signUpbtn" className="btn card-text">Sign Up</button>
                        </form>
                        <button type="submit" id="loginShow" onClick={hideElem} className="submit-btn">Already Have an account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginUsers