import React from 'react'
import '../styles/login.css'


function Help() {
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

export default Help
