import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";

import  './LogInPage.css';


function LogInForm() {
    return (
        <div>

            <div className = "LogInContainer">
            {/*image upload input*/}

            <div className="col-md-6 mb-4">
                <form className="md-form">
                    <div className="file-field">
                        <div className="mb-4">
                            <img src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
                                className="rounded-circle z-depth-1-half avatar-pic imgUpload" alt="example placeholder avatar" />
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
            </div>

        </div>






    )
}



export default LogInForm;

    //reference for image upload: https://mdbootstrap.com/snippets/jquery/mdbootstrap/920964#html-tab-view