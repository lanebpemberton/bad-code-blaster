import React from 'react';

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case

import '../styles/loginuser.css';
// In Navbar, we can assign a style from an object by using curly braces


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
 




function LoginUser() {
  return (
    <body>
    <section>
       <div class="card">
           <div class="inner-box">
               
               <div class="card-front" id="cardFront">
                   <h2 class="card-text">LOGIN</h2>
                   <form>
                       <input type="email" class="input-box"
                       placeholder="Your Email here" required/>
                       <input type="password" class="input-box"
                       placeholder="Your Password here" required/>
                       <button type="submit" id="loginButton" class="submit-btn card-text">Submit</button> 
                       <input type="checkbox"/><span>Remember Me</span>
                   </form>
                   <button type="button" id="signupShow" onclick={hideElem} class="btn">Sign Up</button>
                   <a href="">Forgot Password</a>
               </div>
               <div class="card-back" id="cardBack" style={{display:'none'}}>
                <h2>Sign Up</h2>
                <form>
                    <input type="email" id="email-login" class="input-box"
                    placeholder="Your Email here" required/>
                    <input type="password" id="password-login" class="input-box"
                    placeholder="Your Password here" required/>
                    
                    <input type="checkbox"/><span>Remember Me</span>
                </form>
                <button type="button" id="signUpbtn" class="btn card-text">Sign Up</button>
                <a href="">Forgot Password</a>
                <button type="submit" id="loginShow" onclick={hideElem} class="submit-btn">Already Have an account</button>

               </div>
              
           </div>

           

       </div>

       
    </section>
 
</body>
                                         

    );
}
export default LoginUser;                                      