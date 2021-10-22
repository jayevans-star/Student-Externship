import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import Header from "../layout/header";
import "../assets/css/school.css"
class StudentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show_verify: false};
        this.submit_number = this.submit_number.bind(this);
      }

    submit_number() {
        this.setState({show_verify: true})
    }
    render() {
        return (
            <>
            <Header role="This is a school."/>
            <MDBContainer className="mt-5 shadow-lg py-5">
                <MDBRow>
                    <MDBCol md="6" >
                        <form className="px-4">
                            <p className="h4 text-center mb-4">School Register</p>
                            <label htmlFor="defaultFormContactNameEx" className="grey-text">
                                Your name
                            </label>
                            <input type="text" id="defaultFormContactNameEx" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                                Your email
                            </label>
                            <input type="email" id="defaultFormContactEmailEx" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                Phone number
                            </label>
                            <input type="text" id="defaultFormContactSubjectEx" className="form-control" />
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
                            <img src="https://preview.colorlib.com/theme/course/images/xcourse_1.jpg.pagespeed.ic.tOJA9C5awf.webp" className="school-img"></img>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            </>
        );
    }
} 

export default StudentPage;
