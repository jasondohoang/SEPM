import React from 'react';
import './signup.css';

const SignUp = () => {
  return (
    <div style ={{ backgroundColor: '#FFB55E' }}>

<br></br>
<br></br>


      <div className='Signup-container'>


        

        <form>
          <div className="form-group row">
            <div className="form-group col-md-6">
              <form className="md-form">
                <div className="file-field">
                  <div className="mb-4">
                    <img src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
                      className="rounded-circle z-depth-1-half avatar-pic" alt="example placeholder avatar" />
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="btn btn-mdb-color btn-rounded float-left">
                      <span>Add photo</span>
                      <input type="file" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="form-group  col-md-6">
              <label for="inputNames">Name</label>
              <input type="text" class="form-control" id="inputName" placeholder="Name" />

              <br></br>
              <label for="inputAddress">Address</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>



          </div>


          <div className="form-group row">
            <div className="form-group  col-md-6">
              <p> Gender</p>
              <label className="container">Male
                <input type="radio" checked="checked" name="radio" />
                <span className="checkmark"></span>
              </label>
              <label className="container">Female
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="form-group  col-md-6">
              <label for="phoneNumber">Phone Number</label>
              <input type="number" className="form-control" id="" placeholder="0123456789" />
              <br></br>
              <label for="birthday">Date of Birth </label>
              <input type="date" id="birthday" className="form-control" name="birthday" />
              <br></br>
            </div>

          </div>


          <div className="form-group row">
            <div className="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
            </div>
          </div>

          <div className="form-group row">
            <div className="form-group col-md-6">
            </div>
            <div className="form-group col-md-6">
              <div className="form-check">
                
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: ' 150px' ,marginTop : "2rem"}}>Sign Up</button>
            </div>
          </div>
        </form>
        <br></br>

      </div>
      <br></br>
      <br></br>



      
    </div>

  )
};

export default SignUp;
