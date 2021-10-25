import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBAlert } from 'mdbreact';
import Header from "../layout/header";
import '../assets/css/employer.css';
// import Toastr from '../components/toastr'    
import { ToastContainer, toast } from 'react-toastify';    



class EmployerPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show_verify: false};
        this.submit_number = this.submit_number.bind(this);
      }
    submit_number() {
        if (document.getElementsByClassName("your-email")[0].value == "" ) {
            toast.error('Error Message')
        }
        this.setState({show_verify: true})
    }
    render() {
        return (
            <>
            <Header role="I am an employer."/>
            <MDBContainer className="mt-5 shadow-lg py-5 employer-reg-box">
                <MDBRow>
                    <MDBCol md="6" >
                        <form className="px-4">
                            <p className="h4 text-center mb-4">Employer Register</p>
                            <label htmlFor="defaultFormContactNameEx" className="black-text">
                                Your name
                            </label>
                            <input type="text" className="form-control your-name" />
                            <br />
                            <label className="black-text">
                                Your email
                            </label>
                            <input type="email" className="form-control  your-email" />
                            <br />
                            <label htmlFor="defaultFormContactSubjectEx" className="black-text">
                                Phone number
                            </label>
                            <input type="text" className="form-control  your-phone" />
                            <br />
                            {/* <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                                Your message
                            </label>
                            <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" /> */}
                            <div className="text-center mt-4">
                                <button type="button" onClick={this.submit_number} className="btn btn-primary">
                                    Send
                                    <MDBIcon far icon="paper-plane" className="ml-2" />
                                </button>
                            </div>
                        </form>
                    </MDBCol>
                    <MDBCol md="6" className="text-center">
                            <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg" className="employer-img"></img>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <ToastContainer />    

            </>
        );
    }
} 

export default EmployerPage;
