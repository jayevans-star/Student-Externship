import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon} from 'mdbreact';
import Select from 'react-select';
// import Header from "../layout/header";
import '../assets/css/school-form.css'
const program_options = [
    { value: 'dental-assist', label: 'Dental Assistant' },
    { value: 'medical-assist', label: 'Medical Assistant' },
    { value: 'x-ray', label: 'Diagnostic X-Ray' },
    { value: 'dantal-hygiene', label: 'Dental Hygiene' },
    { value: 'pharmacy', label: 'Pharmacy Technician' },
    { value: 'massage', label: 'Massage Therapy' },
    { value: 'med-billing', label: 'Medical Billing & Coding' },
    { value: 'surgical', label: 'Surgical Technology' },
    { value: 'other', label: 'Other' }
  ];
const externship_options = [
    {value: true, label: 'Yes'},
    {value: false, label: 'No'}
]

const schedule_options = [
    {value: 7, label: '7:00am – 4:00pm'},
    {value: 8, label: '8:00am – 5:00pm'},
    {value: 9, label: '9:00am – 6:00pm'},
    {value: 10, label: '10:00am – 7:00pm'},
    {value: 0, label: 'Others'},
]
class SchoolFormPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSchoolOption: null,   
            selectedExternshipOption: null,
            selectedScheduleOption: null
        };
        // this.submit_number = this.submit_number.bind(this);
      }

    // submit_number() {
    //     this.setState({show_verify: true})
    // }
    handleSchoolChange = selectedSchoolOption => {
        this.setState({ selectedSchoolOption });
        console.log(`Option selected:`, selectedSchoolOption);
      };
    handleExternshipChange = selectedExternshipOption => {
        this.setState({ selectedExternshipOption });
        console.log(`Option selected:`, selectedExternshipOption);
      };
    handleScheduleChange = selectedScheduleOption => {
        this.setState({ selectedScheduleOption });
        console.log(`Option selected:`, selectedScheduleOption);
      };
    render() {
        const { selectedSchoolOption } = this.state;
        const { selectedExternshipOption } = this.state;
        const { selectedScheduleOption} = this.state;
        return (
            <>
            <br/><br/>
            <MDBContainer className="mt-5 shadow-lg py-5 school-form-box">
                <MDBRow>
                    <MDBCol md="12">
                        <p className="h4 text-center mb-4">Continue</p>
                        <br/>
                    </MDBCol>
                    <MDBCol md="6" >
                        <form className="px-4">
                            <label htmlFor="defaultFormContactNameEx" className="grey-text">
                                School Name
                            </label>
                            <input type="text" id="defaultFormContactNameEx" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                School Contact Name
                            </label>
                            <input type="text" id="defaultFormContactNameEx" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                School Fax
                            </label>
                            <input type="tel" id="defaultFormContactNameEx" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                            	Do your students have an Externship
                            </label>
                            <Select
                                value={selectedExternshipOption}
                                onChange={this.handleExternshipChange}
                                options={externship_options}
                            />                          
                            <br />
                            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                School Hours of Operation
                            </label>
                            <Select
                                value={selectedScheduleOption}
                                onChange={this.handleScheduleChange}
                                options={schedule_options}
                            />    
                            
                            <br/>
                            <div className="text-center mt-4">
                                <button type="button" className="btn btn-primary">
                                    Send
                                    <MDBIcon far icon="paper-plane" className="ml-2" />
                                </button>
                            </div>
                        </form>
                    </MDBCol>
                    <MDBCol md="6" >
                        <form className="px-4">
                            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                                School Address
                            </label>
                            <input type="text" id="defaultFormContactNameEx" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                School Telephone
                            </label>
                            <input type="tel" id="defaultFormContactNameEx" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                School Email
                            </label>
                            <input type="email" id="defaultFormContactNameEx" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                Type of School
                            </label>
                            <Select
                                value={selectedSchoolOption}
                                onChange={this.handleSchoolChange}
                                options={program_options}
                            />                       
                            <br />
                            
                            <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                                About School
                            </label>
                            <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            </>
        );
    }
} 

export default SchoolFormPage;
