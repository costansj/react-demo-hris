import React, { Component } from "react";

class EmployeeTable extends Component {
    // dfdfsdf

    render() {
        const { personalDetails, jobDetails, benefitsDetails, onEditForm, onSaveForm } = this.props;
        if (this.props.onView === true) {
            if (this.props.onEdit === false) {
                return (
                    <div>
                        <div>
                            <h3> PERSONAL DETAILS</h3>
                            <ul>
                                <li> First Name {personalDetails.firstName}</li>
                                <li> Middle Name {personalDetails.middleName}</li>
                                <li> Last Name {personalDetails.lastName}</li>
                                <li> Gender {personalDetails.gender}</li>
                                <li> Title {personalDetails.titile}</li>
                                <li> Address {`${personalDetails.address.unitNumber} ${personalDetails.address.street} ${personalDetails.address.city} ${personalDetails.address.province} ${personalDetails.address.region} ${personalDetails.address.zipCode} `}</li>
                            </ul>
                        </div>
                        <div>
                            <h3> CONTACT DETAILS</h3>
                            <ul>
                                <li> Landline {personalDetails.contact.landlineNumber}</li>
                                <li> Mobile Number {personalDetails.contact.mobileNumber}</li>
                                <li> Email {personalDetails.contact.email}</li>
                            </ul>
                        </div>
                        <div>
                            <h3> JOB DETAILS</h3>
                            <ul>
                                <li> Title {jobDetails.title}</li>
                                <li> Employee Number {jobDetails.employeeNumber}</li>
                                <li> Location {jobDetails.location}</li>
                                <li> Department {jobDetails.department}</li>
                                <li> Salary {jobDetails.salary}</li>
                            </ul>
                        </div>
                        <div>
                            <h3> EMPLOYEE BENEFITS </h3>
                            <ul>
                                <li> SSS {benefitsDetails.SSS}</li>
                                <li> PhilHealth{benefitsDetails.PhilHealth}</li>
                                <li> PAGIBIG {benefitsDetails.PAGIBIG}</li>
                                <li> BIR {benefitsDetails.BIR}</li>
                            </ul>
                        </div>
                        {
                            this.props.onEdit ? this.renderForm() : null
                        }
                        <button onClick={onEditForm}> Update </button>
                    </div>

                )
            } else {
                return (
                    <div>
                        <div>
                            <h3> PERSONAL DETAILS</h3>
                            <ul>
                                <li> First Name <input type='text' name="firstName" placeholder={personalDetails.firstName} /></li>
                                <li> Middle Name <input type='text' name="firstName" placeholder={personalDetails.middleName} /></li>
                                <li> Last Name <input type='text' name="firstName" placeholder={personalDetails.lastName} /></li>
                                <li> Gender <input type='text' name="firstName" placeholder={personalDetails.gender} /></li>
                                <li> Title <input type='text' name="firstName" placeholder={personalDetails.title} /></li>
                                <li> Address <input type='text' name="firstName" placeholder={`${personalDetails.address.unitNumber} ${personalDetails.address.street} ${personalDetails.address.city} ${personalDetails.address.province} ${personalDetails.address.region} ${personalDetails.address.zipCode} `} /></li>
                            </ul>
                        </div>
                        <div>
                            <h3> CONTACT DETAILS</h3>
                            <ul>
                                <li> Landline <input type='text' name="firstName" placeholder={personalDetails.contact.landlineNumber} /></li>
                                <li> Mobile Number <input type='text' name="firstName" placeholder={personalDetails.contact.mobileNumber} /></li>
                                <li> Email <input type='text' name="firstName" placeholder={personalDetails.contact.email} /></li>
                            </ul>
                        </div>
                        <div>
                            <h3> JOB DETAILS</h3>
                            <ul>
                                <li> Title <input type='text' name="firstName" placeholder={jobDetails.title} /></li>
                                <li> Employee Number <input type='text' name="firstName" placeholder={jobDetails.employeeNumber} /></li>
                                <li> Location <input type='text' name="firstName" placeholder={jobDetails.location} /></li>
                                <li> Department <input type='text' name="firstName" placeholder={jobDetails.department} /></li>
                                <li> Salary <input type='text' name="firstName" placeholder={jobDetails.salary} /></li>
                            </ul>
                        </div>
                        <div>
                            <h3> EMPLOYEE BENEFITS </h3>
                            <ul>
                                <li> SSS <input type='text' name="firstName" placeholder={benefitsDetails.SSS} /></li>
                                <li> PhilHealth <input type='text' name="firstName" placeholder={benefitsDetails.PhilHealth} /></li>
                                <li> PAGIBIG <input type='text' name="firstName" placeholder={benefitsDetails.PAGIBIG} /></li>
                                <li> BIR <input type='text' name="firstName" placeholder={benefitsDetails.BIR} /></li>
                            </ul>
                        </div>
                        <button onClick={onSaveForm}> Save </button>
                    </div>
                )
            }
        }
    }
}

export { EmployeeTable };