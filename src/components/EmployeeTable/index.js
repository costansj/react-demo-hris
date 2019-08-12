import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

class EmployeeTable extends Component {
  render() {
    const {
      personalDetails,
      jobDetails,
      benefitsDetails,
      onEditForm
    } = this.props;
    return (
      <div>
        <div>
          <Typography variant="h6" component="h6">
            PERSONAL DETAILS
          </Typography>
          <ul>
            <div
              style={{
                display: "flex",
                alignItems: "center"
                //justifyContent: "center"
              }}
            >
              <Typography variant="subtitle2" style={{ flexGrow: 1 }}>
                First Name
              </Typography>
              <Typography variant="body2" style={{ flexGrow: 3 }}>
                : {personalDetails.firstName}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center"
                //justifyContent: "center"
              }}
            >
              <Typography variant="subtitle2" style={{ flexGrow: 1 }}>
                Middle Name
              </Typography>
              <Typography variant="body2" style={{ flexGrow: 3 }}>
                :{personalDetails.middleName}
              </Typography>
            </div>
            <li> Middle Name {personalDetails.middleName}</li>
            <li> Last Name {personalDetails.lastName}</li>
            <li> Gender {personalDetails.gender}</li>
            <li> Title {personalDetails.title}</li>
            <li>
              Address
              {`${personalDetails.address.unitNumber} ${
                personalDetails.address.street
              } ${personalDetails.address.city} ${
                personalDetails.address.province
              } ${personalDetails.address.region} ${
                personalDetails.address.zipCode
              } `}
            </li>
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
            <li> PhilHealth{benefitsDetails.Philhealth}</li>
            <li> PAGIBIG {benefitsDetails.PAGIBIG}</li>
            <li> BIR {benefitsDetails.BIR}</li>
          </ul>
        </div>
        <button onClick={onEditForm}>Update</button>
      </div>
    );
  }
}

export { EmployeeTable };
