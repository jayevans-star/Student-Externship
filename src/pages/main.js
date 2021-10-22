import React from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardTitle, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";
import '../assets/css/main.css';
import {Link} from 'react-router-dom';
class MainPage extends React.Component {
    render() {
        return (
            <MDBContainer className="mt-5 text-center">
              <MDBRow>
                <MDBCol>
                  <MDBJumbotron className="p-0">
                    <h2 className="display-4 my-5 py-5">Welcome to Externship Finder</h2>
                    <div className="my-5">
                        <h2>Select account type</h2>
                    </div>
                    <div className="card-group">
                        
                        <div className="card">
                            <Link to="/student">
                                <div className="justify-content-center d-flex card-img-box pt-4">
                                    <img src="https://img.pngio.com/white-graduation-hat-png-graduation-cap-icon-png-free-png-images-graduation-cap-icon-png-920_960.png" className="card-img-student" alt="..."/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-text card-name">Student</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </Link>
                            
                        </div>
                        <div className="card">
                            <Link to="/employer">
                                <div className="justify-content-center d-flex card-img-box">
                                    <img src="https://thumbs.dreamstime.com/b/customer-customer-icon-147072097.jpg" className="card-img-employer" alt="..."/>
                                </div>
                                <div className="card-body">
                                <h5 className="card-text card-name">Employer</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </Link>
                        </div>
                        <div className="card">
                            <Link to="/school">
                                <div className="justify-content-center d-flex card-img-box pt-2">
                                    <img src="https://illustoon.com/photo/2878.png" className="card-img-school" alt="..."/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-text card-name">School</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </Link>
                    </div>
                </div>
                  </MDBJumbotron>

                </MDBCol>
               
              </MDBRow>
            </MDBContainer>
          )
    }  
}

export default MainPage;