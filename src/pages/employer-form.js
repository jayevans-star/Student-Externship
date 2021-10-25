import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon} from 'mdbreact';
import Select from 'react-select';
// import Header from "../layout/header";
import '../assets/css/employer-form.css'
const office_options = [
    { value: 'general', label: 'General Medicine' },
    { value: 'dental-1', label: 'Dental Practice' },
    { value: 'dental-2', label: 'Dental Specialty Office' },
    { value: 'pharmacy', label: 'Pharmacy' },
    { value: 'urgent', label: 'Urgent Care' },
    { value: 'hospital', label: 'Hospital' },
    { value: 'nursing', label: 'Nursing Home' },
    { value: 'ambulatory', label: 'Ambulatory Care' },
    { value: 'surgical', label: 'Surgical Care' },
    { value: 'radiology', label: 'Radiology Center' },
    { value: 'other', label: 'Other' },
  ];
const externship_options = [
    {value: true, label: 'Yes'},
    {value: false, label: 'No, it is my first time'}
]

const schedule_options = [
    {value: 7, label: '7:00am – 4:00pm'},
    {value: 8, label: '8:00am – 5:00pm'},
    {value: 9, label: '9:00am – 6:00pm'},
    {value: 10, label: '10:00am – 7:00pm'},
    {value: 0, label: 'Others'},
]
class EmployerFormPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOfficeOption: null,   
            selectedExternshipOption: null,
            selectedScheduleOption: null
        };
        // this.submit_number = this.submit_number.bind(this);
      }

    // submit_number() {
    //     this.setState({show_verify: true})
    // }
    handleOfficeChange = selectedOfficeOption => {
        this.setState({ selectedOfficeOption });
        console.log(`Option selected:`, selectedOfficeOption);
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
        const { selectedOfficeOption } = this.state;
        const { selectedExternshipOption } = this.state;
        const { selectedScheduleOption} = this.state;
        return (
            <>
            <br/><br/>
            <MDBContainer className="mt-5 shadow-lg py-5 employer-form-box">
                <MDBRow>
                    <MDBCol md="12">
                        <p className="h4 text-center mb-4">Continue</p>
                        <br/>
                    </MDBCol>
                    <MDBCol md="6" >
                        <form className="px-4">
                            <label htmlFor="defaultFormContactNameEx" className="grey-text">
                                Office Name
                            </label>
                            <input type="text" id="defaultFormContactNameEx" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                Office Contact Name
                            </label>
                            <input type="text" id="defaultFormContactNameEx" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                Office Fax
                            </label>
                            <input type="tel" id="defaultFormContactNameEx" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                Currently Participating in Externship
                            </label>
                            <Select
                                value={selectedExternshipOption}
                                onChange={this.handleExternshipChange}
                                options={externship_options}
                            />                          
                            <br />
                            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                            	Office Schedule/Hours
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
                                Office Address
                            </label>
                            <input type="text" id="defaultFormContactNameEx" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                Office Telephone
                            </label>
                            <input type="tel" id="defaultFormContactNameEx" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                Office Email
                            </label>
                            <input type="email" id="defaultFormContactNameEx" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                Type of Office
                            </label>
                            <Select
                                value={selectedOfficeOption}
                                onChange={this.handleOfficeChange}
                                options={office_options}
                            />                       
                            <br />
                            
                            <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                                About Office
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

export default EmployerFormPage;
