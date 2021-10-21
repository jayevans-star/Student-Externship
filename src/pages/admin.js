import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import "../assets/css/admin.css"
const FormPage = () => {
return (
    <div className="align-items-center">
        <MDBContainer>
            <MDBRow className="admin-box">
                <MDBCol md="3"/>
                <MDBCol md="6">
                <form className="jumbotron">
                    <div className="text-center w-100 fw-bolder" >
                        <h1>Administrator</h1>
                    </div>
                    <p className="h4 text-center mt-5">Login</p>
                    <div className="grey-text">
                        <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                            success="right" className="my-5" />
                        <MDBInput label="Type your password" icon="lock" group type="password" validate  className="mt-5"/>
                    </div>
                    <div className="text-center">
                        <button type="button" className="btn btn-primary">Sign In</button>

                    </div>
                </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </div>

);
};

export default FormPage;