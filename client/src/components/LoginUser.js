import React from 'react';

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case

import '../styles/loginuser.css';
// In Navbar, we can assign a style from an object by using curly braces
///login data send


// login function to change pages to game start

// const homeScreen = 

// //send data to login route
async function postLoginData(data)
{
    let fetchResult = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return fetchResult;
}

async function onLogin(event)
{
    event.preventDefault();
    //aggregate data from form
    let userData = {
        "email":document.getElementById(`email-login`).value.trim(),
        "password":document.getElementById(`password-login`).value.trim(),
    };
    let loginResults = await postLoginData(userData);
    console.log(loginResults);
    //check status
    if(loginResults.ok)
    {
        document.location.replace('/');
    } else {
        alert('Login information incorrect. Please try again.')
        return;
    }
}
// document
// //   .querySelector("loginButton")
//   .addEventListener('click', onLogin);




// const loginButton = document.getElementById("loginButton");
// loginButton.addEventListener("click", postLoginData);



// //send data to login route
// async function postLoginData(data)
// {
//     let fetchResult = await fetch('/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     });
//     return fetchResult;
// }

// //initiate login fetch
// async function onLogin(event)
// {
//     event.preventDefault();
//     //aggregate data from form
//     let userData = {
//         "email":document.getElementById(`email-login`).value.trim(),
//         "password":document.getElementById(`password-login`).value.trim(),
//     };
//     let loginResults = await postLoginData(userData);
//     //check status
//     if(loginResults.ok)
//     {
//         document.location.replace('/');
//     } else {
//         alert('Login information incorrect. Please try again.')
//         return;
//     }
// }
// document
//   .querySelector('.login-form')
//   .addEventListener('submit', onLogin);





/////////////
//function for hiding signup and login
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
       <div className="card">
           <div className="inner-box">
               
               <div className="card-front" id="cardFront">
                   <h2 className="card-text">LOGIN</h2>
                   <form className="login-form">
                       <input type="email" id="email-login" className="input-box"
                       placeholder="Your Email here" required/>
                       <input type="password" id="password-login" className="input-box"
                       placeholder="Your Password here" required/>
                       <button type="submit" id="loginButton" onClick={onLogin} className="submit-btn card-text">Submit</button> 
                       <input type="checkbox"/><span>Remember Me</span>
                   </form>
                   <button type="button" id="signupShow" onClick={hideElem} className="btn">Sign Up</button>
                   <a href="">Forgot Password</a>
               </div>
               <div className="card-back" id="cardBack" style={{display:'none'}}>
                <h2>Sign Up</h2>
                <form>
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

       
    </section>
 
</body>
                                         

    );
}
export default LoginUser;                                      