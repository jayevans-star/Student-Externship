import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBSelect } from 'mdbreact';
import Header from "../layout/header";
import '../assets/css/student-form.css'
class StudentFormPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show_verify: false,
            options: [
                {
                  text: "Option 1",
                  value: "1"
                },
                {
                  text: "Option 2",
                  value: "2"
                },
                {
                  text: "Option 3",
                  value: "3"
                }
              ]            
        };
        this.submit_number = this.submit_number.bind(this);
      }

    submit_number() {
        this.setState({show_verify: true})
    }
    
    render() {
        return (
            <>
            <MDBContainer className="mt-5 shadow-lg py-5 student-form-box">
                <MDBRow>
                    <MDBCol md="6" >
                        <form className="px-4">
                            <p className="h4 text-center mb-4">Continue</p>
                            <label htmlFor="defaultFormContactNameEx" className="grey-text">
                                Program
                            </label>
                            <input type="text" id="defaultFormContactNameEx" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                                Program Start Date
                            </label>
                            <input type="date" id="defaultFormContactEmailEx" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                Projected Externship Start Date
                            </label>
                            <input type="date" id="defaultFormContactSubjectEx" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                Can attend Externship
                            </label>
                            <div>
                                <select className="browser-default custom-select">
                                <option>Choose your option</option>
                                <option value="1">Full Time</option>
                                <option value="2">Part Time</option>
                                </select>
                            </div>                        
                            <br />
                            <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                                Mastered Skills
                            </label>
                            <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
                            <br/>
                            <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                                Intro
                            </label>
                            <div class="input-group mb-3">
                                <input type="file" id="myfile" name="myfile"/>
                            </div>
                            <div className="text-center mt-4">
                                <button type="button" onClick={this.submit_number} className="btn btn-primary">
                                    Send
                                    <MDBIcon far icon="paper-plane" className="ml-2" />
                                </button>
                            </div>
                        </form>
                    </MDBCol>
                    <MDBCol md="6" className="justify-content-center align-items-center d-flex">
                        <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg"></img>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            </>
        );
    }
} 

export default StudentFormPage;
