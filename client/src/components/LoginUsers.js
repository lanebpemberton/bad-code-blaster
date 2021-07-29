import React from 'react'
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
    return(
        <div className= "background">
            <div className= "border">
                <div className= "box">
                    <div className="card-front" id="cardFront">
                        <h2 className="card-text">LOGIN</h2>
                        <form className="login-form">
                            <input type="email" id="email-login" className="input-box"
                            placeholder="Your Email here" required/>
                            <input type="password" id="password-login" className="input-box"
                            placeholder="Your Password here" required/>
                            <button type="submit" id="loginButton" className="submit-btn card-text">Submit</button> 
                            <input type="checkbox"/><span>Remember Me</span>
                        </form>
                        <button type="button" id="signupShow" onClick={hideElem} className="btn">Sign Up</button>
                        <a href="">Forgot Password</a>
                    </div>
                    <div className="card-back" id="cardBack" style={{display:'none'}}>
                        <h2>Sign Up</h2>
                        <form>
                            <input type="username" id="signupUsername" className="input-box"
                            placeholder="Your Username here" required/>
                            <input type="email" id="signupEmail" className="input-box"
                            placeholder="Your Email here" required/>
                            <input type="password" id="signupPassword" className="input-box"
                            placeholder="Your Password here" required/>
                            <input type="checkbox"/><span>Remember Me</span>
                        </form>
                        <button type="button" id="signUpbtn" className="btn card-text">Sign Up</button>
                        <a href="">Forgot Password</a>
                        <button type="submit" id="loginShow" onClick={hideElem} className="submit-btn">Already Have an account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginUsers