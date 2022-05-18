import React from 'react';
import './signin.css';



const SignIn = () => {
    return (
<div>


       <div className= 'container-signin'>
         <div className='SignIn-container ' >


         <label for="inputEmail4"   style ={{  marginLeft: "10rem"}} >Email</label>
              <input type="email" className="form-control" id="inputEmail4" placeholder="Email" style={{width: "350px" ,  marginLeft: "10rem",   marginBottom: "2rem"}} />
         <label for="inputPassword4"  style ={{ marginLeft: "10rem"}}   >Password</label>
              <input type="password" className="form-control" id="inputPassword4" placeholder="Password" style={{width: "350px" ,  marginLeft: "10rem"}} />
           <br></br>
              <button type="submit" className="btn btn-primary" style={{ width: ' 150px' ,   marginLeft: "22rem" }}>Sign In</button>
          
             

              </div>
       </div>
       </div>
    )
};


export default SignIn;

