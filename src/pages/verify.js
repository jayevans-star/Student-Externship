import React from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBInputGroup, MDBInput} from "mdbreact";
import {Link} from 'react-router-dom';
import '../assets/css/verify.css'
class VerifyPage extends React.Component {
    render() {
        return (
            <MDBContainer className="mt-5 text-center verify-form-box">
              <MDBRow>
                <MDBCol>
                  <MDBJumbotron className="p-0 verify-box">
                    <h1 className="display-6 my-5 py-5 ">Verify you're a right candidate to start </h1>
                    <div className="my-5 border-bottom">
                        <h2>Verify Phone Number</h2>
                    </div>
                        <div className="text-left px-5">
                            <div className="mb-4">
                                <h3>Please enter the verification code we sent to +79056147321</h3>
                            </div>
                            <MDBRow className="mb-4">
                                <MDBCol md="8">
                                    <MDBInput containerClassName="mb-3" hint="Verify code..." />
                                </MDBCol>
                                <MDBCol md="3" className="pt-3"> 
                                    <button type="button" class="btn btn-primary">Submit</button>
                                </MDBCol>
                            </MDBRow>
                            {/* <p>Didn't receive the code?</p>
                            <button type="button" class="btn btn-outline-primary border-top-0">Resend code</button>
                            <br/>
                            <button type="button" class="btn btn-outline-primary border-bottom">Change Number</button> */}

                            
                        </div>
                        
                  </MDBJumbotron>

                </MDBCol>
               
              </MDBRow>
            </MDBContainer>
          )
    }  
}

export default VerifyPage;